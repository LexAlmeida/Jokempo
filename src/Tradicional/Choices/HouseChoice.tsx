import React from "react"
import { Box } from "@mui/material"
import { Scissors } from "../Options/Scissors"
import { Rock } from "../Options/Rock"
import { Paper } from "../Options/Paper"

const randomChoice = () => {
    const choices = ['paper', 'rock', 'scissors'] as const; 
    return choices[Math.floor(Math.random()*(choices.length))];
}

export const HouseChoice = () => {
    const choicesMap ={
        'paper': <Paper/>,
        'rock': <Rock/>,
        'scissors': <Scissors/>
    }

    return (
        <Box>
            {choicesMap[randomChoice()]}
        </Box>
    )
}