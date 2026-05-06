import { Grid } from "@mui/material"

interface MenuProps {
    children: React.ReactNode
}


const Menu = ({ children }: MenuProps) => {

    return (
        <>
            <Grid container spacing={3}>
                {children}
            </Grid>
        </>
    )
}

export default Menu