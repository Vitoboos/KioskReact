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

    return <Link to={to} >{children} </Link>;
};

const MenuItem = ({ title, image, site }: MenuItemProps) => {

    return (
        <>
            <Grid size={{ xs: 6, sm: 4, md: 4, lg: 4, xl: 4 }} spacing={0}>
                <Card
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        borderRadius: "25px"
                    }}
                >
                    <CardContent>
                        <Typography sx={{fontSize: "2rem"}}>
                            {title}
                        </Typography>
                    </CardContent>
                    <CardMedia sx={{
                        width: { xs: "75px", sm: "150x", md: "200px", lg: "300px" },
                        height: { xs: "75px", sm: "150px", md: "200px", lg: "300px" },
                    }} image={image} />
                </Card>
            </Grid>
        </>
    )
}

export default MenuItem