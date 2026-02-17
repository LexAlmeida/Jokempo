import { Box, CssBaseline, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./theme/theme"
import React, { useState } from "react"
import { Header } from "./Tradicional/Header/Header"
import { Options } from "./Tradicional/Options/Options"
import {  Results } from "./Tradicional/Choices/Results"
import { UserChoice } from "./Tradicional/Choices/UserChoice"
import { PlayAgain } from "./Tradicional/Choices/PlayAgain"


export const App = () => {
  const [userChoice, setUserChoice] = useState<'paper' | 'rock' | 'scissors' | null>(null);
  const [winner, setWinner] = useState<'user' | 'house' | 'draw' | null>(null);

  const handlePlayAgain = () => {
    setUserChoice(null);
    setWinner(null);
  }

  const handleHouseChoice = (houseChoice: 'paper' | 'rock' | 'scissors' | null) => {
        if (userChoice === houseChoice) {
          setWinner('draw');
          console.log('draw');
        } else if (
          (userChoice === 'paper' && houseChoice === 'rock') ||
          (userChoice === 'rock' && houseChoice === 'scissors') ||
          (userChoice === 'scissors' && houseChoice === 'paper')
        ) {
          setWinner('user');
          console.log('user wins');
        } else {
          setWinner('house');
          console.log('house wins');
        }
    
  }
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
            <Results userChoice={userChoice} onHouseChoice={handleHouseChoice} onPlayAgain={handlePlayAgain} winner={winner} />
          }
        </Box>
    </ThemeProvider>
  )
}