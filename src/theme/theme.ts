import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
  components:{
    MuiCssBaseline:{
      styleOverrides:{
        body:{
        background: "linear-gradient(180deg, #1F3756 0%, #141539 100%)",
        minHeight: "100vh",
        margin: 0
        }
      }
    }
  }
})