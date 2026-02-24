import React from "react"
import { Box, Card, Typography } from "@mui/material"
import logo from "../../assets/logoBonus.svg"

export const AppTitle = () => {
    return (
        <Box component='img' src={logo} sx={{
            width: {xs: '25%', sm: '16%', md: '15%'}
        }}>

        </Box>
    )
}