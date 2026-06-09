import { Container } from "@mui/material"

import Time from "../components/Time"
import Menu from "../components/Menu"
import MenuItem from "../components/MenuItem"

import hr_icon from "../assets/icons/Capital Humano.png"
import marketing_icon from "../assets/icons/Mercadeo.png"
import sst_icon from "../assets/icons/Seguridad Laboral.png"
import it_icon from "../assets/icons/Tecnologia.png"

const Communities = () => {
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
                <Menu previous="Regresar">
                    <MenuItem title='Capital Humano' image={hr_icon} site="https://engage.cloud.microsoft/main/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIyNTIzNzYyMzYwMzIifQ/all" />
                    <MenuItem title='Mercadeo' image={marketing_icon} site="https://engage.cloud.microsoft/main/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIyNTQ5ODg3MjIxNzYifQ/all" />
                    <MenuItem title='Seguridad Laboral' image={sst_icon} site="https://engage.cloud.microsoft/main/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIyMTA0NzU4NDQ1OTI0MzUyIn0/all" />
                    <MenuItem title='Tecnología' image={it_icon} site="https://engage.cloud.microsoft/main/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiI0MDk0Njk2NjUyOCJ9/all" />

                </Menu>

            </Container>
        </>
    )
}

export default Communities