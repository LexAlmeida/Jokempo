import React from "react"
import { Box } from "@mui/material"
import rock from "../../assets/iconRock.svg"

interface RockProps {
    onClick?: () => void
}

export const Rock = ({ onClick }: RockProps) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: {xs: '100px', sm: '130px', md: '160px'},
            height: {xs: '100px', sm: '130px', md: '160px'},
            borderRadius: '50%',
            backgroundColor: '#dc3554',
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
                src={rock} 
                alt='rock' 
                sx={{
                width: {xs: '35px', sm: '50px', md: '60px'},
            }}/>
            </Box>
        </Box>
    )
}