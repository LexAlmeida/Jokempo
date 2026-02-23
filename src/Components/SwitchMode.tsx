import React from "react"
import { Box, Switch, Typography } from "@mui/material"
import { MySwitch } from "./SwitchTheme"

interface SwitchModeProps {
    checked: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SwitchMode = ({checked, onChange}: SwitchModeProps) => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,               
        }}>
            <Typography sx={{ 
                color: "white", 
                textTransform: 'uppercase', 
                letterSpacing: 2,
                fontSize: '0.8rem',
                fontWeight: 'bold' 
            }}>
                {checked ? 'Tradicional Mode' : 'Sheldon Mode'}
            </Typography>
            
            <MySwitch defaultChecked checked={checked} onChange={onChange}/> 
        </Box>
    )
}