import React from "react"
import { Card, Typography } from "@mui/material"
import logo from "../../assets/logo.svg"

export const AppTitle = () => {
    return (
        <Typography>
            <img src={logo} alt='logo'/>
        </Typography>
    )
}