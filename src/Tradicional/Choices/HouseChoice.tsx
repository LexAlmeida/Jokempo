import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { Scissors } from "../Options/Scissors"
import { Rock } from "../Options/Rock"
import { Paper } from "../Options/Paper"

interface HouseChoiceProps {
    onChoiceMade: (choice: 'paper' | 'rock' | 'scissors') => void;
}

export const HouseChoice = ({onChoiceMade}: HouseChoiceProps) => {
    const [myChoice, setMyChoice] = useState<'paper' | 'rock' | 'scissors'|null>(null);

    const choicesMap ={
        'paper': <Paper/>,
        'rock': <Rock/>,
        'scissors': <Scissors/>
    }

   useEffect (() => {
    const choices = ['paper', 'rock', 'scissors'] as const; 
    const selectedChoice = choices[Math.floor(Math.random()*3)];
    setMyChoice(selectedChoice);
    onChoiceMade(selectedChoice);
    }, [])

    return (
        <Box>
            {choicesMap[myChoice!]}
        </Box>
    )
}