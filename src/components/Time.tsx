import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";

const Time = () => {
    const [tiempo, setTiempo] = useState(new Date().toLocaleString("es-ES"));

    useEffect(() => {
        const interval = setInterval(() => {
            setTiempo(new Date().toLocaleString("es-ES"));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "flex-end"
                }}
            >
                <Typography sx={{
                    color: "white",
                    fontSize: {
                        xs: '1.2rem',
                        sm: '1.5rem',
                        md: '2rem',
                        lg: '2.5rem',
                    }, fontWeight: "bold"
                }}> {tiempo}
                </Typography>
            </Container>

        </>
    );
};

export default Time;