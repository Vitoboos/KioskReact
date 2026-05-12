import { Button, Container, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface MenuProps {
    children: React.ReactNode,
    previous?: string,
}


function goBack(navigate: ReturnType<typeof useNavigate>) {

    navigate(-1)

}

const Menu = ({ children, previous }: MenuProps) => {

    const navigate = useNavigate()
    const handleClick = () => goBack(navigate);

    return (
        <>
            <Grid container spacing={3}>
                <Grid size={12}>
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
                </Grid>

                {children}
            </Grid>
        </>
    )
}

export default Menu