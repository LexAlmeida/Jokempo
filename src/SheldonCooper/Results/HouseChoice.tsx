import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { Scissors } from "../Options/Scissors"
import { Rock } from "../Options/Rock"
import { Paper } from "../Options/Paper"
import { Spock } from "../Options/Spock"
import { Lizard } from "../Options/Lizard"

interface HouseChoiceProps {
    onChoiceMade: (choice: 'paper' | 'rock' | 'scissors' | 'spock' | 'lizard') => void;
}

export const HouseChoice = ({onChoiceMade}: HouseChoiceProps) => {
    const [myChoice, setMyChoice] = useState<'paper' | 'rock' | 'scissors' | 'spock' | 'lizard'| null >(null);

    const choicesMap ={
        'paper': <Paper/>,
        'rock': <Rock/>,
        'scissors': <Scissors/>,
        'spock': <Spock/>,
        'lizard': <Lizard/>
    }

   useEffect (() => {
    const choices = ['paper', 'rock', 'scissors', 'spock', 'lizard'] as const; 
    const selectedChoice = choices[Math.floor(Math.random()*5)];
    setMyChoice(selectedChoice);
    onChoiceMade(selectedChoice);
    }, [])

    return (
        <Box sx={{zIndex: 10}}>
            {choicesMap[myChoice!]}
        </Box>
    )
}