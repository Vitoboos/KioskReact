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

            <Container
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                    justifyItems: "center"
                }}
            >
                {previous && (
                    <Container
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Button variant="contained" size="large" sx={{ width: "30%", padding: "10px", fontSize: "2rem", margin: "25px" }} onClick={handleClick}>
                            {previous}
                        </Button>
                    </Container>
                )}

                <Container>

                    <TextField label="Buscar" variant="filled" type="search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        slotProps={{
                            input: {
                                sx: { fontSize: "2rem" }
                            }
                        }}
                        sx={{
                            margin: "20px",
                            backgroundColor: "#fcfcfc",
                            border: "none",
                            borderRadius: "25px",
                            width: "100%",
                        }}

                    />


                    <List sx={{
                        padding: "10px",
                        maxHeight: "50vh",
                        overflowX: "hidden",
                        overflowY: "scroll",
                    }}>
                        {children(searchTerm)}
                    </List>
                </Container>

            </Container>


        </>
    )
}

export default ListParent