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

                        lg: "80%",
                    },
                    height: {

                        lg: "80%",
                    },
                }}
            >
            </Box>
        </>
    )
}

export default Agent