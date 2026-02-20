import React from "react"
import { Box } from "@mui/material"
import { Scissors } from "../Options/Scissors"
import { Paper } from "../Options/Paper";
import { Rock } from "../Options/Rock";
import { Lizard } from "../Options/Lizard";
import { Spock } from "../Options/Spock";

interface UserChoiceProps {
    userChoice: 'paper' | 'rock' | 'scissors' | 'spock' | 'lizard';
}

export const UserChoice = ({userChoice}: UserChoiceProps) => {   
    const choicesMap = {
        'paper': <Paper/>,
        'rock': <Rock/>,
        'scissors': <Scissors/>,
        'spock': <Spock/>,
        'lizard': <Lizard/>
    }
    return (
        <Box sx={{zIndex: 10}}>
            {choicesMap[userChoice]}
        </Box>
    )
}