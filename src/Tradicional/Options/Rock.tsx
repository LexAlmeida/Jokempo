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
            width: '225px',
            height: '225px',
            borderRadius: '50%',
            backgroundColor: '#dc3554',
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
                <img src={rock} alt='rock' width={'70px'}/>
            </Box>
        </Box>
    )
}