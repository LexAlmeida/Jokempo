import { Box, CssBaseline, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./theme/theme"
import React, { useState } from "react"
import { Header } from "./Tradicional/Header/Header"
import { Options } from "./Tradicional/Options/Options"
import { Choices } from "./Tradicional/Choices/Choices"
import { UserChoice } from "./Tradicional/Choices/UserChoice"

export const App = () => {
  const [userChoice, setUserChoice] = useState<'paper' | 'rock' | 'scissors' | null>(null);
  const handlePlayAgain = () => setUserChoice(null);
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
          {!userChoice ?
            <Options onSelectChoice={(choice) => setUserChoice(choice)}/>
            :
            <Choices userChoice={userChoice}/>
          }
        </Box>
    </ThemeProvider>
  )
}