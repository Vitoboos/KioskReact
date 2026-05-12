import { Container } from "@mui/material"

import Time from "../components/Time"
import ListParent from "../components/List"
import ListChild from "../components/ListItem"


const Reglamento = () => {
    return (
        <>
            <Time />

            <ListParent previous="Regresar">
                <ListChild text="Prueba 1" />
                <ListChild text="Prueba 2" />
                <ListChild text="Prueba 3" />
                <ListChild text="Prueba 4" />
                <ListChild text="Prueba 5" />
                <ListChild text="Prueba 6" />
                <ListChild text="Prueba 7" />
                <ListChild text="Prueba 8" />
            </ListParent>

        </>
    )
}

export default Reglamento