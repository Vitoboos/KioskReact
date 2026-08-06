use tauri::webview::WebviewWindowBuilder;
use tauri::WebviewUrl;

const NEUTRALIZE_BLANK: &str =
    r#"
(function() {
    // Convierte target="_blank" a target="_self" en todos los links
    document.querySelectorAll('a[target="_blank"]').forEach(a => a.target = '_self');
    
    // Sobrescribe window.open para que use location.href (navegación normal)
    const originalOpen = window.open;
    window.open = function(url) {
        if (url) window.location.href = url;
        return null;
    };
    
    // Observa nuevos links que aparezcan dinámicamente
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.tagName === 'A' && node.target === '_blank') {
                    node.target = '_self';
                }
                if (node.querySelectorAll) {
                    node.querySelectorAll('a[target="_blank"]').forEach(a => a.target = '_self');
                }
            });
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
"#;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder
        ::default()
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            if cfg!(debug_assertions) {
                app
                    .handle()
                    .plugin(
                        tauri_plugin_log::Builder::default().level(log::LevelFilter::Info).build()
                    )?;
            }

            let webview = WebviewWindowBuilder::new(
                app,
                "main",
                WebviewUrl::App("index.html".into())
            )
                .title("Cartelera Informativa")
                .inner_size(1200.0, 800.0)
                .on_page_load(|webview, payload| {
                    // Inyecta el script DESPUÉS de cada carga de página
                    let scheme = payload.url().scheme();
                    if scheme == "http" || scheme == "https" {
                        let _ = webview.eval(NEUTRALIZE_BLANK);
                    }
                })
                .on_navigation(|url| {
                    let url_str = url.to_string();

                    // Permite Viva Engine y tu frontend local
                    if
                        url_str.contains("vivaengine.com") ||
                        url_str.contains("localhost") ||
                        url_str.contains("engage.cloud.microsoft") ||
                        url_str.contains("tauri.localhost")
                    {
                        return true;
                    }

                    if
                        url_str.contains("login.microsoftonline.com") ||
                        url_str.contains("login.live.com") ||
                        url_str.contains("vivaengine.com") ||
                        url_str.contains("crosswordlabs.com/")
                    {
                        return true;
                    }

                    // Cualquier otra URL externa: abre en navegador del sistema
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
