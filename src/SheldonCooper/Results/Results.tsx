import React from "react"
import { Box, Typography } from "@mui/material"
import { UserChoice } from "./UserChoice"
import { HouseChoice } from "./HouseChoice"
import { PlayAgain } from "./PlayAgain";

interface ChoicesProps {
    userChoice: 'paper' | 'rock' | 'scissors' | 'spock' | 'lizard' | null;
    onPlayAgain: () => void;
    winner: 'user' | 'house' | 'draw' | null;
    onHouseChoice: (choice: 'paper' | 'rock' | 'scissors' | 'spock' | 'lizard' | null) => void;
}
export const Results = ({userChoice, onPlayAgain, winner, onHouseChoice}: ChoicesProps) => {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            maxWidth: { xs: '400px', md: '900px' },
            mt: { xs: 8, md: 10 },
            rowGap: { xs: 8, md: 0 },
        }}>
            
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column-reverse', md: 'column' },
                alignItems: 'center',
                order: 1,
                width: { xs: '50%', md: 'auto' }, 
            }}>
                <Typography sx={{
                    color: 'white',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    letterSpacing: '2px',
                    mt: { xs: 3, md: 0 },
                    mb: { xs: 0, md: 8 },
                    fontSize: { xs: '15px', md: '20px' },
                    zIndex: 10
                }}>
                    You Picked
                </Typography>
                <Box className={`icon-wrapper ${winner === 'user' ? 'winner-effect' : ''}`}
                     sx={{ transform: { xs: 'scale(0.8)', md: 'scale(1.3)' } }}>
                    <UserChoice userChoice={userChoice!} />
                </Box>
            </Box>

            <Box sx={{ 
                order: { xs: 3, md: 2 },
                width: { xs: '100%', md: 'auto' },
                textAlign: 'center',
                mt: { xs: -5, sm: -8 , md: 0 },
                mx: { md: 8 },
                zIndex: 10
            }}>
                <PlayAgain onPlayAgain={onPlayAgain} winner={winner}/>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column-reverse', md: 'column' },
                alignItems: 'center',
                order: { xs: 2, md: 3 }, 
                width: { xs: '50%', md: 'auto' },
            }}>
                <Typography sx={{
                    color: 'white',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    letterSpacing: '2px',
                    mt: { xs: 3, md: 0 },
                    mb: { xs: 0, md: 8 },
                    fontSize: { xs: '15px', md: '20px' },
                    zIndex: 10
                }}>
                    The House Picked
                </Typography>
                <Box className={`icon-wrapper ${winner === 'house' ? 'winner-effect' : ''}`}
                     sx={{ transform: { xs: 'scale(0.8)', md: 'scale(1.3)' } }}>
                    <HouseChoice onChoiceMade={onHouseChoice} />
                </Box>
            </Box>
            
        </Box>
    )
}