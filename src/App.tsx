import { Box, CssBaseline, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./theme/theme"
import React from "react"
import { Header } from "./Tradicional/Header/Header"
import { Options } from "./Tradicional/Options/Options"

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 30%',
        }}>
          <Header/>
          <Options/>
        </Box>
    </ThemeProvider>
  )
}