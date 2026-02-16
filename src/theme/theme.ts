import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
  components:{
    MuiCssBaseline:{
      styleOverrides:{
        body:{
        background: "radial-gradient(circle at top, #1f3656 30%, #14173a 80%)",
        minHeight: "100vh",
        margin: 0
        }
      }
    }
  }
})