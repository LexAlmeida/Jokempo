import React from "react"
import { Box, Typography } from "@mui/material"
import { UserChoice } from "./UserChoice"
import { HouseChoice } from "./HouseChoice"

export const Choices = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '150px',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transform: 'scale(1.7)'
            }}>
                <Typography sx={{
                    color: 'white',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    marginBottom: '50px'
                }}>You Picked</Typography>
                <UserChoice/>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transform: 'scale(1.7)'
            }}>
                <Typography sx={{
                    color: 'white',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    marginBottom: '50px'
                }}>The House Picked</Typography>
                <HouseChoice/>
            </Box>
        </Box>
    )
}