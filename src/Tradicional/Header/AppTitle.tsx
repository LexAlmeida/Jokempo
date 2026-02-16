import React from "react"
import { Card, Typography } from "@mui/material"

export const AppTitle = () => {
    return (
        <Typography sx={{
            color: 'white',
            fontSize: '2rem',
            fontWeight: 'bold',
            lineHeight: '0.85',
            textTransform: 'uppercase',
        }}>
            ROCK<br/>PAPER<br/>SCISSORS
        </Typography>
    )
}