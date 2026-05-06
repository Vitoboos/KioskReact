import { Box } from '@mui/material'
// Componentes

import Time from '../components/Time'
import Menu from '../components/Menu'
import MenuItem from '../components/MenuItem'
import Agent from '../components/Agent'

// Iconos

import web_icon from '../assets/Página Web.png'
import social_icon from '../assets/Red Social.png'
import hr_icon from '../assets/Capital Humano.png'
import suggestions_icon from '../assets/Buzon.png'

import agentIcon from '../assets/agente.png'


const Home = () => {
    return (
        <>
            <Box>

                <Time />

                <Box sx={{
                    display: 'flex',
                    flex: 1,
                    minHeight: 0,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    "@media (orientation: landscape)": {
                        flexDirection: 'row',
                    }
                }}>

                    <Menu>
                        <MenuItem title='Web Oficial' image={web_icon} site="https://www.rolda.com.ve/en"/>
                        <MenuItem title='Red Social Corporativa' image={social_icon} site=""/>
                        <MenuItem title='Capital Humano' image={hr_icon} site=""/>
                        <MenuItem title='Buzón de Sugerencias' image={suggestions_icon} site=""/>
                    </Menu>

                    <Agent image={agentIcon} />

                </Box>


            </Box>
        </>
    )
}

export default Home