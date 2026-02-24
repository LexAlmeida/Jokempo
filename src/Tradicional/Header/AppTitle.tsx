import React from "react"
import { Box, Card, Typography } from "@mui/material"
import logo from "../../assets/logo.svg"

export const AppTitle = () => {
    return (
        <Box component='img'src={logo} sx={{
            width: {xs:'30%',sm: '22%', md: '20%'}
        }}>
        </Box>
    )
}