import React from "react"
import { Card } from "@mui/material"
import { ScoreCard } from "./ScoreCard"
import { AppTitle } from "./AppTitle"

export const Header = ({score}: {score:number}) => {
    return (
        <Card sx={{
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '3% 4%',
            marginTop: '5%',
            marginBottom: '2rem',
            boxShadow: 'none',
            borderRadius: '16px',
            border: '4px solid #5b6b84',
            width: '90%',
            zIndex: 10,
        }}>
            <AppTitle/>
            <ScoreCard score={score}/>
        </Card>
    )
}