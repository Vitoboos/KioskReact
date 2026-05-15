import { Button, Container, List, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface ListProps {
    children: (searchTerm: string) => React.ReactNode,
    previous?: string,
}

function goBack(navigate: ReturnType<typeof useNavigate>) {
    navigate(-1)
}

const ListParent = ({ children, previous }: ListProps) => {

    const navigate = useNavigate()
    const handleClick = () => goBack(navigate);

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            {previous && (
                <Container
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Button variant="contained" size="large" sx={{ width: "20%" }} onClick={handleClick}>
                        {previous}
                    </Button>
                </Container>
            )}

            <Container>

                <TextField label="Buscar" variant="filled" type="search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{
                        margin: 2,
                        backgroundColor: "#fcfcfc",
                        border: "none",
                        borderRadius: "25px",
                        width: "100%"
                    }} />

                <List sx={{
                    padding: "10px",
                    maxHeight: "50vh",
                    overflowX: "hidden",
                    overflowY: "scroll",
                }}>
                    {children(searchTerm)}
                </List>
            </Container>

        </>
    )
}

export default ListParent