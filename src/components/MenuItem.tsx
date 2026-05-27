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
            <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}>
                <Card
                    onClick={() => handleClick(site)}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        borderRadius: "25px",
                        width: "100%",
                        height: "auto", 
                        aspectRatio: "1 / 1",
                        bgcolor: "grey.50",
                        boxSizing: "border-box", 
                        overflow: "hidden", 
                        p: 2, 
                        "&:hover": {
                            cursor: "pointer"
                        },
                    }}
                >
                    <CardContent
                        sx={{
                            p: 0,
                            width: "100%",
                            "&:last-child": { pb: 0 } 
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "2.5rem", 
                                lineHeight: "1.2",
                                height: "6rem",
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                "@media (orientation: landscape)": {
                                    fontSize: "1.8rem",
                                    height: "4.5rem",
                                },
                            }}
                        >
                            {title}
                        </Typography>
                    </CardContent>

                    <CardMedia
                        component="img"
                        image={image}
                        sx={{
                            width: "100%",
                            flexGrow: 1, 
                            height: "0", 
                            objectFit: "contain",
                        }}
                    />
                </Card>
            </Grid>
        </>
    )
}

export default MenuItem