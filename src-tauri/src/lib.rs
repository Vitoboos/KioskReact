use std::sync::Mutex;
use tauri::{ Manager, State, Url, WebviewUrl, webview::WebviewWindowBuilder };

struct AppState {
    home_url: Mutex<Option<Url>>,
}

#[tauri::command]
fn go_home(window: tauri::WebviewWindow, state: State<'_, AppState>) {
    if let Some(url) = state.home_url.lock().unwrap().clone() {
        let _ = window.navigate(url);
    }
}

fn build_neutralize_script(home_url: Option<&str>) -> String {
    let home = home_url.unwrap_or("");
    format!(r#"
(function() {{
    window.__TAURI_HOME_URL__ = "{}";

    // --- Neutraliza target="_blank" ---
    document.querySelectorAll('a[target="_blank"]').forEach(a => a.target = '_self');
    
    const originalOpen = window.open;
    window.open = function(url) {{
        if (url) window.location.href = url;
        return null;
    }};
    
    const observer = new MutationObserver(function(mutations) {{
        mutations.forEach(function(mutation) {{
            mutation.addedNodes.forEach(function(node) {{
                if (node.tagName === 'A' && node.target === '_blank') {{
                    node.target = '_self';
                }}
                if (node.querySelectorAll) {{
                    node.querySelectorAll('a[target="_blank"]').forEach(a => a.target = '_self');
                }}
            }});
        }});
    }});
    if (document.body) {{
        observer.observe(document.body, {{ childList: true, subtree: true }});
    }}
    
    // --- Menú contextual personalizado ---
    (function() {{
        let menuEl = null;
        function removeMenu() {{
            if (menuEl) {{ menuEl.remove(); menuEl = null; }}
        }}
        
        function createItem(icon, text, onClick) {{
            const item = document.createElement('div');
            item.innerHTML = icon + ' &nbsp;' + text;
            item.style.cssText = 'padding:8px 16px;cursor:pointer;transition:background 0.08s;white-space:nowrap;';
            item.onmouseenter = () => item.style.background = '#333';
            item.onmouseleave = () => item.style.background = 'transparent';
            item.onclick = function() {{
                onClick();
                removeMenu();
            }};
            return item;
        }}
        
        function createSeparator() {{
            const sep = document.createElement('div');
            sep.style.cssText = 'height:1px;background:#444;margin:4px 0;';
            return sep;
        }}
        
        document.addEventListener('contextmenu', function(e) {{
            e.preventDefault();
            removeMenu();
            
            const menu = document.createElement('div');
            menu.style.cssText = 'position:fixed;background:#1e1e1e;border:1px solid #444;border-radius:6px;padding:4px 0;box-shadow:0 8px 24px rgba(0,0,0,0.5);z-index:2147483647;font-family:system-ui,sans-serif;font-size:13px;color:#e8e8e8;min-width:170px;user-select:none;';
            
            // Botón Atrás
            menu.appendChild(createItem('◀', 'Atrás', function() {{
                window.history.back();
            }}));
            
            // Botón Adelante
            menu.appendChild(createItem('▶', 'Adelante', function() {{
                window.history.forward();
            }}));
            
            menu.appendChild(createSeparator());
            
            // Botón Volver al inicio
            menu.appendChild(createItem('🏠', 'Volver al inicio', function() {{
                if (window.__TAURI_HOME_URL__) {{
                    window.location.href = window.__TAURI_HOME_URL__;
                }} else if (window.__TAURI_INTERNALS__ && window.__TAURI_INTERNALS__.invoke) {{
                    window.__TAURI_INTERNALS__.invoke('go_home');
                }}
            }}));
            
            const x = Math.min(e.clientX, window.innerWidth - 180);
            const y = Math.min(e.clientY, window.innerHeight - 140);
            menu.style.left = x + 'px';
            menu.style.top = y + 'px';
            document.body.appendChild(menu);
            menuEl = menu;
        }});
        
        document.addEventListener('click', removeMenu);
        document.addEventListener('scroll', removeMenu, true);
        document.addEventListener('keydown', (e) => {{ if (e.key === 'Escape') removeMenu(); }});
    }})();
}})();
"#, home)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder
        ::default()
        .plugin(tauri_plugin_opener::init())
        .manage(AppState { home_url: Mutex::new(None) })
        .invoke_handler(tauri::generate_handler![go_home])
        .setup(|app| {
            if cfg!(debug_assertions) {
                app
                    .handle()
                    .plugin(
                        tauri_plugin_log::Builder::default().level(log::LevelFilter::Info).build()
                    )?;
            }

            let app_handle = app.handle().clone();

            let _webview = WebviewWindowBuilder::new(
                app,
                "main",
                WebviewUrl::App("index.html".into())
            )
                .title("Cartelera Informativa")
                .fullscreen(true)
                .focused(true)
                .on_page_load(move |webview, payload| {
                    let state = app_handle.state::<AppState>();
                    let mut home_url = state.home_url.lock().unwrap();

                    if home_url.is_none() {
                        let url_str = payload.url().to_string();
                        if
                            url_str.contains("tauri.localhost") ||
                            url_str.contains("localhost") ||
                            url_str.contains("127.0.0.1")
                        {
                            *home_url = Some(payload.url().clone());
                        }
                    }

                    let home_str = home_url.as_ref().map(|u| u.as_str());
                    let script = build_neutralize_script(home_str);

                    let scheme = payload.url().scheme();
                    if scheme == "http" || scheme == "https" {
                        let _ = webview.eval(&script);
                    }
                })
                .on_navigation(|url| {
                    let url_str = url.to_string();

                    if
                        url_str.contains("vivaengine.com") ||
                        url_str.contains("localhost") ||
                        url_str.contains("engage.cloud.microsoft") ||
                        url_str.contains("tauri.localhost") ||
                        url_str.contains("login.microsoftonline.com") ||
                        url_str.contains("login.live.com") ||
                        url_str.contains("rolda.com.ve") ||
                        url_str.contains("crosswordlabs.com/")
                    {
                        return true;
                    }

                    if url_str.starts_with("http://") || url_str.starts_with("https://") {
                        let _ = tauri_plugin_opener::open_url(&url_str, None::<&str>);
                        return false;
                    }

                    true
                })
                .build()?;

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
