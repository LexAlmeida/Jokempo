import React, { useState } from "react";
import { TradicionalMode } from "./src/TradicionalMode";
import { SheldonMode } from "./src/SheldonMode";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./src/theme/theme";
import { Rules } from "./src/Components/Rules";
import { SwitchMode } from "./src/Components/SwitchMode";

export const App = () => {
    const [isTradicional, setIsTradicional] = useState(true);
    const mode = isTradicional ? 'tradicional' : 'sheldon';
    const modeMap = {
        'tradicional': <TradicionalMode/>,
        'sheldon': <SheldonMode/>
    }
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box sx={{
                height: '100vh',
                width: '100vw',
                overflow: 'hidden', 
                position: 'relative',
                }}
            >
                {modeMap[mode]}
                <Box sx={{
                    width: '60%',
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: {xs: 'column-reverse', sm: 'row'},
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: {xs: '-30%', sm: '-10%', md: '-8%'},
                    }}
                >
                    <SwitchMode
                        checked={isTradicional}
                        onChange={() => setIsTradicional(!isTradicional)}/>
                    <Rules isTradicional={isTradicional}/>
                </Box>
            </Box>
        </ThemeProvider>
    )
}