import { Box } from "@mui/material"

interface AgentProps {
    image: string,
}

const Agent = ({ image }: AgentProps) => {

    return (
        <>
            <Box
                component="img"
                src={image}
                alt="Agente Corporativo"
                sx={{
                    width: {
                        xs: "40vw",
                        sm: "20vw",
                        md: "20vw",
                        lg: "30vw",
                    },
                    height: {
                        xs: "40vh",
                        sm: "20vh",
                        md: "20vh",
                        lg: "60vh",
                    },
                }}
            >
            </Box>
        </>
    )
}

export default Agent