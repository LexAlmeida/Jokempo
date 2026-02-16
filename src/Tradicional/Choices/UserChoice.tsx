import React from "react"
import { Box } from "@mui/material"
import { Scissors } from "../Options/Scissors"
import { Paper } from "../Options/Paper";
import { Rock } from "../Options/Rock";

interface UserChoiceProps {
    userChoice: 'paper' | 'rock' | 'scissors';
}

export const UserChoice = ({userChoice}: UserChoiceProps) => {   
    console.log(userChoice)
    const choicesMap = {
        'paper': <Paper/>,
        'rock': <Rock/>,
        'scissors': <Scissors/>
    }
    return (
        <Box>
            {choicesMap[userChoice]}
        </Box>
    )
}