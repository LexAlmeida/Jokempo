import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface PlayAgainProps {
    onPlayAgain: () => void;
    winner: 'user' | 'house' | 'draw' | null;
}

export const PlayAgain = ({ onPlayAgain, winner }: PlayAgainProps) => {
   const getWinnerText = () => {
    if (winner === 'user') return 'You Win!';
    if (winner === 'house') return 'You Lose!';
    if (winner === 'draw') return 'It\'s a Draw!';
    return '';
   }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
            className="text-result">
            <Typography variant="h3" sx={{
                    color: 'white', 
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    marginTop: '100px',
                    }}>
                        {getWinnerText()}
            </Typography>
            <Button 
                variant="contained"
                sx={{
                    
                    backgroundColor: 'white',
                    color: '#35374c',
                    padding: '10px 70px',
                    marginTop: '20px',
                }}
                onClick={onPlayAgain}>
                    Play Again
            </Button>
        </Box>
    )
}