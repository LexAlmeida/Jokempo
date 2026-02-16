import React from "react"
import { Card } from "@mui/material"
import { ScoreCard } from "./ScoreCard"
import { AppTitle } from "./AppTitle"

export const Header = () => {
    return (
        <Card sx={{
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            marginBottom: '2rem',
            boxShadow: 'none',
            border: '2px solid #5b6b84',
            width: '100%',
        }}>
            <AppTitle/>
            <ScoreCard/>
        </Card>
    )
}