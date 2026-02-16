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
            width: '225px',
            height: '225px',
            borderRadius: '50%',
            backgroundColor: '#eca00f',
            cursor: 'pointer',
        }} onClick={onClick}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '175px',
                height: '175px',
                borderRadius: '50%',
                backgroundColor: '#ebebeb',
        }}>
                <img src={scissors} alt='scissors' width={'70px'}/>
            </Box>
        </Box>
    )
}