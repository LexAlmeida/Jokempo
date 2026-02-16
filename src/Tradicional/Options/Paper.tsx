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
            width: '225px',
            height: '225px',
            borderRadius: '50%',
            backgroundColor: '#516df4',
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
                <img src={paper} alt='paper' width={'70px'}/>
            </Box>
        </Box>
    )
}