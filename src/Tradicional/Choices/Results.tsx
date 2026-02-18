import React from "react"
import { Box, Typography } from "@mui/material"
import { UserChoice } from "./UserChoice"
import { HouseChoice } from "./HouseChoice"
import { PlayAgain } from "./PlayAgain";

interface ChoicesProps {
    userChoice: 'paper' | 'rock' | 'scissors' | null;
    onPlayAgain: () => void;
    winner: 'user' | 'house' | 'draw' | null;
    onHouseChoice: (choice: 'paper' | 'rock' | 'scissors' | null) => void;
}

export const Results = ({userChoice, onPlayAgain, winner, onHouseChoice}: ChoicesProps) => {
    return (
        <Box sx={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'space-between',
            width: '150%',
            marginTop: '150px',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transform: 'scale(1.5)'
            }}>
                <Typography sx={{
                    color: 'white',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    marginBottom: '50px'
                    }}
                    className="text-result">
                    You Picked
                </Typography>
                <div className={`icon-wrapper ${winner === 'user' ? 'winner-effect' : ''}`}>
                    <UserChoice userChoice={userChoice!}/>
                </div>
            </Box>
            <Box>
                <PlayAgain onPlayAgain={onPlayAgain} winner={winner}/>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transform: 'scale(1.5)'
            }}>
                <Typography sx={{
                    color: 'white',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    marginBottom: '50px',
                    }}
                    className="text-result">
                        The House Picked
                    </Typography>
                <div className={`icon-wrapper ${winner === 'house' ? 'winner-effect' : ''}`}>
                    <HouseChoice onChoiceMade={onHouseChoice} />
                </div>
            </Box>
        </Box>
    )
}