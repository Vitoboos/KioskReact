import { Container } from '@mui/material'
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

            <Time />

            <Container
                disableGutters
                maxWidth={false}
                sx={{
                    width: '70vw',
                    height: '100dvh',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    "@media (orientation: landscape)": {
                        flexDirection: "row",
                    },
                }}>
                <Menu>
                    <MenuItem title='Web Oficial' image={web_icon} site="https://www.rolda.com.ve/en" />
                    <MenuItem title='Red Social Corporativa' image={social_icon} site="/comunidades" />
                    <MenuItem title='Capital Humano' image={hr_icon} site="/capitalhumano" />
                    <MenuItem title='Buzón de Sugerencias' image={suggestions_icon} site="mailto:piplanta@rolda.com.ve?subject=Solicitud" />
                </Menu>

                <Agent image={agentIcon} url='msteams://teams.microsoft.com/l/app/?titleId=T_65027c6c-8b00-fdfd-3581-edcaabe09419' />

            </Container>
        </>
    )
}

export default Home