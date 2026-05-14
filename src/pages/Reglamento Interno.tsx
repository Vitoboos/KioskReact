import { Container, ListItem } from "@mui/material"

import Time from "../components/Time"
import ListParent from "../components/List"
import ListChild from "../components/ListItem"

import data from "../data/reglamento"

const Reglamento = () => {
    return (
        <>
            <Time />

            <ListParent previous="Regresar">
                {(searchTerm) =>
                    data
                        .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map(item => (
                            <ListChild key={item.id} text={item.name} document={item.url} />
                        ))
                }
            </ListParent>

        </>
    )
}

export default Reglamento