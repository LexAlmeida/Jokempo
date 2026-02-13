import { Box, CssBaseline, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./theme/theme"
import React from "react"

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Box>
          <Typography variant="h1" color="black">Jokempo</Typography>
        </Box>
    </ThemeProvider>
  )
}