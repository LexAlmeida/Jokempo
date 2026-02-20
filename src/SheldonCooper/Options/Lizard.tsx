import React from "react"
import { Box } from "@mui/material"
import lizard from '../../assets/iconLizard.svg'

interface PaperProps {
    onClick?: () => void
}

export const Lizard = ({ onClick }: PaperProps) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: {xs: '100px', sm: '130px', md: '165px'},
            height: {xs: '100px', sm: '130px', md: '165px'},
            borderRadius: '50%',
            backgroundColor: '#8857e6',
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
                src={lizard} 
                alt='lizard' 
                sx={{
                width: {xs: '50px', sm: '60px', md: '90px'},
            }}/>
            </Box>
        </Box>
    )
}