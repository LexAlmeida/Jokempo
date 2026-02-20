import React from "react"
import { Box } from "@mui/material"
import paper from '../../assets/iconPaper.svg'

interface PaperProps {
    onClick?: () => void
}

export const Paper = ({ onClick }: PaperProps) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: {xs: '100px', sm: '130px', md: '165px'},
            height: {xs: '100px', sm: '130px', md: '165px'},
            borderRadius: '50%',
            backgroundColor: '#516df4',
            cursor: 'pointer',
        }} onClick={onClick}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: {xs: '75px', sm: '100px', md: '130px'},
                height: {xs: '75px', sm: '100px', md: '130px'},
                borderRadius: '50%',
                backgroundColor: '#ebebeb',
        }}>
            <Box 
                component='img' 
                src={paper} 
                alt='paper' 
                sx={{
                width: {xs: '35px', sm: '50px', md: '70px'},
            }}/>
            </Box>
        </Box>
    )
}