import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material"
import { theme } from "./theme/theme"
import React, { useCallback, useEffect, useState } from "react"
import { Header } from "./SheldonCooper/Header/Header"
import { Options } from "./SheldonCooper/Options/Options"
import {Rules} from "./SheldonCooper/Rules/Rules"
import {Results} from "./SheldonCooper/Results/Results"

type Choice = 'paper' | 'rock' | 'scissors' | 'spock' | 'lizard' | null;
type Winner = 'user' | 'house' | 'draw' | null

export const App = () => {
  const [userChoice, setUserChoice] = useState<'paper' | 'rock' | 'scissors' | 'spock' | 'lizard' | null>(null);
  const [winner, setWinner] = useState<'user' | 'house' | 'draw' | null>(null);

  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem('SCORE_POINTS');
    return saved ? Number(saved) : 0;
  })

  useEffect(() => {
    localStorage.setItem('SCORE_POINTS', score.toString())
  });

  const handlePlayAgain = () => {
    setUserChoice(null);
    setWinner(null);
  }

  const handleHouseChoice = useCallback((houseChoice: Choice) => {


    let result: Winner = null;

    if (userChoice === houseChoice) {
      result = 'draw';
    } else if (
      (userChoice === 'paper' && (houseChoice === 'rock' || houseChoice === 'spock')) ||
      (userChoice === 'rock' && (houseChoice === 'scissors' || houseChoice === 'lizard')) ||
      (userChoice === 'lizard' && (houseChoice === 'spock' || houseChoice === 'paper')) ||
      (userChoice === 'spock' && (houseChoice === 'scissors' || houseChoice === 'rock')) ||
      (userChoice === 'scissors' && (houseChoice === 'paper' || houseChoice === 'lizard'))
    ) {
      result = 'user';   
      setScore((prev) => prev + 1);
    } else {
      result = 'house';
      setScore((prev) =>  Math.max(0, prev - 1));
    }
    setWinner(result);
  },[userChoice, winner]);
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