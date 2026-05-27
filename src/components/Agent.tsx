import { Box } from "@mui/material"

interface AgentProps {
    image: string,
    url: string,
}

const Agent = ({ image, url }: AgentProps) => {

    const handleClick = (url: string) => {
        window.location.href = url
    }


    return (
        <>
            <Box
                component="img"
                src={image}
                alt="Agente Corporativo"
                sx={{
                    width: "100%",
                    maxHeight: "70vh", 
                    aspectRatio: "2/3",
                    objectFit: "contain",
                    transition: "transform 0.2s ease", 

                    "@media (orientation:landscape)": {
                        width: "35vw",
                        maxHeight: "80vh", 
                    },
                    "&:hover": {
                        cursor: "pointer",
                        transform: "scale(1.02)",
                    },
                }}
                onClick={() => handleClick(url)}
            >
            </Box >
        </>
    )
}

export default Agent