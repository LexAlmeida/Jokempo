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
            width: {xs: '150px', sm: '175px', md: '200px'},
            height: {xs: '150px', sm: '175px', md: '200px'},
            borderRadius: '50%',
            backgroundColor: '#516df4',
            cursor: 'pointer',
        }} onClick={onClick}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: {xs: '115px', sm: '135px', md: '160px'},
                height: {xs: '115px', sm: '135px', md: '160px'},
                borderRadius: '50%',
                backgroundColor: '#ebebeb',
        }}>
            <Box 
                component='img' 
                src={paper} 
                alt='paper' 
                sx={{
                width: {xs: '50px', sm: '60px', md: '70px'},
            }}/>
            </Box>
        </Box>
    )
}