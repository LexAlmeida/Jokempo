import React, { useState } from "react"
import { Paper } from "./Paper"
import { Rock } from "./Rock"
import { Scissors } from "./Scissors"
import { Box } from "@mui/material"
import triangle from '../../assets/bgTriangle.svg'

interface OptionsProps {
    onSelectChoice: (choice: 'paper' | 'rock' | 'scissors') => void
}

export const Options = ({ onSelectChoice }: OptionsProps) => {
    return (
        <Box sx={{
                position: 'relative', 
                display: 'inline-block',
                width: {xs: '275px', sm: '300px', md:'400px'},
                maxWidth: '400px',
            }}
        >
            <img src={triangle} style={{
                display: 'block',
                marginTop: '35%',
                width: '100%',
            }}/>
                
            <Box sx={{
                position: 'relative',
                top: {xs: '-300px', sm: '-350px', md: '-450px'},
                left: '-13%',
                width: '125%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                }}>
                    <Paper onClick={() => onSelectChoice('paper')}/>
                    <Scissors onClick={() => onSelectChoice('scissors')}/>
                </Box>
                <Box sx={{marginTop: '10%'}}>
                    <Rock onClick={() => onSelectChoice('rock')}/>
                </Box>
            </Box>
        </Box>
    )
}