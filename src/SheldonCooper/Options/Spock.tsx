import React from "react"
import { Box } from "@mui/material"
import spock from '../../assets/iconSpock.svg'

interface PaperProps {
    onClick?: () => void
}

export const Spock = ({ onClick }: PaperProps) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: {xs: '100px', sm: '130px', md: '160px'},
            height: {xs: '100px', sm: '130px', md: '160px'},
            borderRadius: '50%',
            backgroundColor: '#45b7d1',
            cursor: 'pointer',
        }} onClick={onClick}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: {xs: '75px', sm: '100px', md: '125px'},
                height: {xs: '75px', sm: '100px', md: '125px'},
                borderRadius: '50%',
                backgroundColor: '#ebebeb',
        }}>
            <Box 
                component='img' 
                src={spock} 
                alt='spock' 
                sx={{
                width: {xs: '35px', sm: '50px', md: '55px'},
            }}/>
            </Box>
        </Box>
    )
}