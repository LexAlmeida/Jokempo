import React from "react"
import { Box } from "@mui/material"
import paper from '../../assets/iconPaper.svg'

export const Paper = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '225px',
            height: '225px',
            borderRadius: '50%',
            backgroundColor: '#516df4',
        }}>
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