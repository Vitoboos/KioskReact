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
                    width: "100%",
                    aspectRatio: "1/1",
                    "@media (orientation:landscape)": {
                        width: "200%",
                        aspectRatio: "2/3",
                    }
                }}
            >
            </Box>
        </>
    )
}

export default Agent