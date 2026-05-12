import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface MenuItemProps {
    title: string,
    image: string,
    site: string,
}


// Navegación

function goToSite(url: string, navigate: ReturnType<typeof useNavigate>) {

    if (url.startsWith("https") || url.startsWith("mailto")) {
        window.location.href = url
    }
    else {
        navigate(url)
    }
}

// Menu 

const MenuItem = ({ title, image, site }: MenuItemProps) => {
    const navigate = useNavigate()
    const handleClick = (url: string) => goToSite(url, navigate);

    return (
        <>
            <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }} spacing={0}>
                <Card
                    onClick={() => handleClick(site)}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",  
                        flexDirection: "column",
                        borderRadius: "25px",
                        width: "100%",
                        aspectRatio: "1 / 1",
                        overflow: "hidden",
                        bgcolor: "grey.50",
                        "&:hover": {
                            cursor: "pointer"
                        }
                    }}
                >
                    <CardContent>
                        <Typography sx={{ fontSize: "1rem" }}>
                            {title}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        image={image}
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    />
                </Card>
            </Grid>
        </>
    )
}

export default MenuItem