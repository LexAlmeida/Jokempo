import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface PlayAgainProps {
    onPlayAgain: () => void;
}

export const PlayAgain = ({ onPlayAgain }: PlayAgainProps) => {
   
    return (
        <Box>
            <Typography variant="h3" sx={{
                    color: 'white', 
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    marginTop: '100px',
                    }}>
                        You Win
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