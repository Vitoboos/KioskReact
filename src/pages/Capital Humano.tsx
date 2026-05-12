import { Container } from "@mui/material"

import Time from "../components/Time"
import Menu from "../components/Menu"
import MenuItem from "../components/MenuItem"

import contract_icon from "../assets/Contrato.png"
import insurance_icon from "../assets/Seguro.png"
import rules_icon from "../assets/Reglas.png"

const HR = () => {
    return (
        <>
            <Time />

            <Container
                sx={{
                    minWidth: "70%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100dvh",
                    "@media (orientation: landscape)": {
                        display: "flex",
                        flexDirection: "row",
                    }
                }}>
                <Menu previous="Capital Humano">
                    <MenuItem title='Contrato Colectivo' image={contract_icon} site="" />
                    <MenuItem title='Seguro Médico' image={insurance_icon} site="" />
                    <MenuItem title='Reglamento Interno' image={rules_icon} site="" />
                </Menu>

            </Container>
        </>
    )
}

export default HR