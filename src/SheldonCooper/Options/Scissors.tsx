import React from "react"
import { Box } from "@mui/material"
import scissors from "../../assets/iconScissors.svg"

interface ScissorsProps {
    onClick?: () => void
}

export const Scissors = ({ onClick }: ScissorsProps) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: {xs: '150px', sm: '175px', md: '225px'},
            height: {xs: '150px', sm: '175px', md: '225px'},
            borderRadius: '50%',
            backgroundColor: '#eca00f',
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
                    src={scissors} 
                    alt='scissors' 
                    sx={{
                    width: {xs: '50px', sm: '70px', md: '70px'},
                }}/>
            </Box>
        </Box>
    )
}