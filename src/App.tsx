import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Box } from '@mui/material';

import Home from './pages/Inicio'
import Communities from './pages/Comunidades'
import HR from './pages/Capital Humano'

import Contrato from './pages/Contrato Colectivo';
import Seguro from './pages/Seguro Medico';
import Reglamento from './pages/Reglamento Interno';

import wallpaper from './assets/wallpaper/Fondo de pantalla.webp'

// Escalado

// import { ScaleProvider } from './hooks/useScale';
// import { Canvas } from './components/Canvas';

function App() {


  return (

    // <ScaleProvider>
    //   <Canvas>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          minHeight: '100dvh',
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <BrowserRouter>
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/comunidades" element={<Communities />} />
              <Route path="/capitalhumano" element={<HR />} />
              <Route path="/contrato" element={<Contrato />} />
              <Route path="/seguro" element={<Seguro />} />
              <Route path="/reglamento" element={<Reglamento />} />

            </Routes>
          </BrowserRouter>

        </Box>
    //   </Canvas>
    // </ScaleProvider>



  )
}

export default App
