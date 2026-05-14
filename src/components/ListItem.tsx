import { Button, Container, ListItem, ListItemText } from "@mui/material"

interface ListChildProps {
    text: string,
    document: string,
}

const ListChild = ({ text, document }: ListChildProps) => {

    const handleDoc = (document: string) => {
        window.location.href = document
    }

    return (
        <>
            <ListItem sx={{
                borderRadius: "10px",
                backgroundColor: "#fcfcfc",
                margin: 2,

                boxShadow: "2px 2px #808080",
                "&:hover": {
                    cursor: "pointer",
                    color: "white",
                    backgroundColor: "#074191",
                    boxShadow: "2px 2px #052b61",
                }
            }}
                onClick={() => handleDoc(document)}
            >
                <ListItemText> {text} </ListItemText>
            </ListItem>
        </>
    )
}

export default ListChild