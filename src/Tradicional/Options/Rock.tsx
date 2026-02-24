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
            width: {xs: '150px', sm: '175px', md: '200px'},
            height: {xs: '150px', sm: '175px', md: '200px'},
            borderRadius: '50%',
            backgroundColor: '#dc3554',
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
                src={rock} 
                alt='rock' 
                sx={{
                width: {xs: '50px', sm: '60px', md: '70px'},
            }}/>
            </Box>
        </Box>
    )
}