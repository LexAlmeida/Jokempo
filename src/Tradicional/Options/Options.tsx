import React from "react"
import { Paper } from "./Paper"
import { Rock } from "./Rock"
import { Scissors } from "./Scissors"
import { Box } from "@mui/material"
import triangle from '../../assets/bgTriangle.svg'

export const Options = () => {
    return (
        <Box sx={{
                position: 'relative', 
                display: 'inline-block',
                width: '100%',
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
                top: '-450px',
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
                    <Paper/>
                    <Scissors/>
                </Box>
                <Box sx={{marginTop: '10%'}}>
                    <Rock/>
                </Box>
            </Box>
        </Box>
    )
}