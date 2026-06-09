import { Box } from "@mui/material"

import Time from "../components/Time"
import ListParent from "../components/List"
import ListChild from "../components/ListItem"

import { pdfDocuments } from "../data/reglamento"

const Reglamento = () => {

    pdfDocuments.sort((a, b) =>
        a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' })
    );

    return (
        <>

            <Box
                sx={{
                    minHeight: "100dvh"
                }}
            >
                <Time />

                <ListParent previous="Regresar">
                    {(searchTerm) =>
                        pdfDocuments
                            .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
                            .map(item => (
                                <ListChild key={item.id} text={item.title} document={item.url} />
                            ))
                    }
                </ListParent>
            </Box>

        </>
    )
}

export default Reglamento