import React, { useState } from "react"
import { Paper } from "./Paper"
import { Rock } from "./Rock"
import { Scissors } from "./Scissors"
import {Lizard} from "./Lizard"
import { Spock } from "./Spock"
import { Box } from "@mui/material"
import pentagon from '../../assets/bgPentagon.svg'

interface OptionsProps {
    onSelectChoice: (choice: 'paper' | 'rock' | 'scissors' | 'spock' | 'lizard') => void
}

export const Options = ({ onSelectChoice }: OptionsProps) => {
    return (
        <Box sx={{
                position: 'relative', 
                display: 'inline-block',
                width: {xs: '275px', sm: '350px', md:'400px'},
                maxWidth: '400px',
            }}
        >
            <img src={pentagon} style={{
                display: 'block',
                marginTop: '25%',
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
                    marginTop: {xs:'%', sm: '-10%' , md: '-5%'}
                }}>
                    <Scissors onClick={() => onSelectChoice('scissors')}/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '105%',
                    marginTop: {xs:'', sm: '-5%' , md: '-5%'}
                }}>
                    <Spock onClick={() => onSelectChoice('spock')}/>
                    <Paper onClick={() => onSelectChoice('paper')}/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '80%',
                    marginTop: {xs:'15%', sm: '' , md: ''}
                }}>
                    <Lizard onClick={() => onSelectChoice('lizard')}/>
                    <Rock onClick={() => onSelectChoice('rock')}/>
                </Box>
            </Box>
        </Box>
    )
}