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
            width: {xs: '150px', sm: '175px', md: '225px'},
            height: {xs: '150px', sm: '175px', md: '225px'},
            borderRadius: '50%',
            backgroundColor: '#516df4',
            cursor: 'pointer',
        }} onClick={onClick}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: {xs: '100px', sm: '125px', md: '175px'},
                height: {xs: '100px', sm: '125px', md: '175px'},
                borderRadius: '50%',
                backgroundColor: '#ebebeb',
        }}>
            <Box 
                component='img' 
                src={paper} 
                alt='paper' 
                sx={{
                width: {xs: '50px', sm: '70px', md: '70px'},
            }}/>
            </Box>
        </Box>
    )
}