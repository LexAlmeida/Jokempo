import { Box, CssBaseline, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./theme/theme"
import React, { useState } from "react"
import { Header } from "./Tradicional/Header/Header"
import { Options } from "./Tradicional/Options/Options"
import {  Results } from "./Tradicional/Results/Results"
import { Rules } from "./Tradicional/Rules/Rules"


export const App = () => {
  const [userChoice, setUserChoice] = useState<'paper' | 'rock' | 'scissors' | null>(null);
  const [winner, setWinner] = useState<'user' | 'house' | 'draw' | null>(null);

  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem('SCORE_POINTS')
    return saved ? Number(saved) : 0;
  })

  const handlePlayAgain = () => {
    setUserChoice(null);
    setWinner(null);
  }

  const handleHouseChoice = (houseChoice: 'paper' | 'rock' | 'scissors' | null) => {
    let result: 'user' | 'house' | 'draw' | null = null;
    if (userChoice === houseChoice) {
      result = 'draw';
      return;
    } else if (
      (userChoice === 'paper' && houseChoice === 'rock') ||
      (userChoice === 'rock' && houseChoice === 'scissors') ||
      (userChoice === 'scissors' && houseChoice === 'paper')
    ) {
      result = 'user';
      const newScore = score + 1;
      setScore((prev) => {
        const newScore = prev + 1;
        localStorage.setItem('SCORE_POINTS', newScore.toString());
        return newScore;
      });
    } else {
      result = 'house';
      setScore((prev) => {
        const newScore = Math.max(0, prev - 1);
        localStorage.setItem('SCORE_POINTS', newScore.toString());
        return newScore;
      });
    }
    setWinner(result);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
          height: '100vh',
          width: '100vw',
          overflow: 'hidden', 
          position: 'relative',
        }}>
        <Box sx={{
          width: '100%',
          maxWidth: {xs: '100%', md: '900px'},
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 auto',
        }}>
          <Header score={score}/>
          
          {!userChoice ?
            <Options onSelectChoice={(choice) => setUserChoice(choice)}/>
            :
            <Results userChoice={userChoice} onHouseChoice={handleHouseChoice} onPlayAgain={handlePlayAgain} winner={winner}/>
          }
          <Box sx={{
            position: 'absolute', 
            bottom: { xs: '50px', md: '30px' },
            left: { xs: '50%', md: 'auto' }, 
            right: { xs: 'auto', md: '30px' },
            transform: { xs: 'translateX(-50%)', md: 'none' },
          }}>
            <Rules/>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}