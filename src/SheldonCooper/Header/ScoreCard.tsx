import React from "react"
import { Card, Typography } from "@mui/material"

export const ScoreCard = ({score}: {score:number}) => {
    return (
        <Card sx={{
            padding: '0.8rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 'none',
            textTransform: 'uppercase',
        }}>
            <Typography sx={{
                fontSize: '60%'
            }}>
                Score
            </Typography>
            <Typography sx={{
                fontSize: '2rem',
                fontWeight: 'bold',
            }}>
                {score}
            </Typography>
        </Card>
    )
}