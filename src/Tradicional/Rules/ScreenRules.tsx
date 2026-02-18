import { Box, Button, Dialog, Typography } from "@mui/material";
import React, { useState } from "react";
import rules from '../../assets/imageRules.svg'
import close from '../../assets/iconClose.svg'

export const ScreenRules = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () =>  setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
        <Button onClick={handleClickOpen}>
            <Typography sx={{
                    textTransform: 'uppercase',
                    backgroundColor: 'transparent',
                    color: 'white',
                    fontWeight: 'bold',
                    border: '2px solid #5b6b84',
                    padding: '8px 30px',
                    borderRadius: '8px',
                }}>
                Rules
            </Typography>
        </Button>
        <Dialog 
            open={open}
            onClose={handleClose}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems:'center',
                }}>
                    <Typography sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    color: '#35374c',
                    fontSize: '24px',
                    marginTop: '20px',
                    marginLeft: '30px',
                    }}>
                        Rules
                    </Typography>
                    <img src={close} alt="Close Icon" onClick={handleClose} style={{
                        position: 'absolute',
                        top: '30px',
                        right: '30px',
                        cursor: 'pointer',
                    }}/>
                </Box>
                <img src={rules} alt="Rules Image" style={{width: '100%', height: 'auto', padding: '35px 50px'}}/>
        </Dialog>
        </>
    )
}