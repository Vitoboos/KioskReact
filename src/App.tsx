import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Box } from '@mui/material';

import Home from './pages/Inicio'
import Communities from './pages/Comunidades'
import HR from './pages/Capital Humano'

import wallpaper from './assets/Fondo de pantalla.webp'

function App() {

  return (

    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
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

        </Routes>
      </BrowserRouter>

    </Box>

  )
}

export default App
