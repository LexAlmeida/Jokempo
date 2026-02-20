import React from "react"
import { Box, Switch, Typography } from "@mui/material"

export const SwitchMode = () => {
    return (
        <Box sx={{
            display:'flex',
        }}>
            <Typography color="white">Change Mode</Typography>
            <Switch></Switch>
        </Box>
    )
}