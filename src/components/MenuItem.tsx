import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

interface MenuItemProps {
    title: string,
    image: string,
    site: string,
}

interface SmartLinkProps {
    to: string;
    children: React.ReactNode;
}

const SmartLink = ({ to, children }: SmartLinkProps) => {
    const isExternal = to.startsWith("http");

    if (isExternal) {
        return (
            <a href={to} target="_blank" rel="noreferrer">
                {children}
            </a>
        );
    }

    return <Link to={to} >{children}</Link>;
};

const MenuItem = ({ title, image, site }: MenuItemProps) => {

    return (
        <>
            <Grid size={4} spacing={0}>
                <Card sx={{
                    background: "white",
                    display: "flex",
                    alignItems: "center", flexDirection: "column", borderRadius: "25px"
                }}
                    component={SmartLink}
                    to={site}
                >
                    <CardContent>
                        <Typography sx={{
                            textAlign: 'center',
                            fontSize: {
                                xs: "1rem",
                                sm: "1.25rem",
                                md: "1.5rem",
                                lg: "1.5rem",
                                xl: "2rem"
                            }
                        }}> {title}
                        </Typography>
                    </CardContent>
                    <CardMedia sx={{
                        margin: "10px",
                        width: { xs: "125px", sm: "200px", md: "200px", lg: "200px" },
                        height: { sx: "125px", sm: "200px", md: "200px", lg: "200px" },
                    }} image={image} />
                </Card>
            </Grid>
        </>
    )
}

export default MenuItem