import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
  components:{
    MuiCssBaseline:{
      styleOverrides:{
        body:{
        background: "radial-gradient(circle at top, #1f3656 30%, #14173a 65%)",
        minHeight: "100vh",
        margin: 0
        },
        "@keyframes pulse": {
          "0%": {
            boxShadow: `
              0 0 0 20px rgba(255, 255, 255, 0.4),
              0 0 0 50px rgba(255, 255, 255, 0.3),
              0 0 0 90px rgba(255, 255, 255, 0.2)
              `
          },
          "50%": {
            boxShadow: `
              0 0 0 50px rgba(255, 255, 255, 0.6),
              0 0 0 80px rgba(255, 255, 255, 0.4),
              0 0 0 130px rgba(255, 255, 255, 0.3)
              `
          },
          "100%": {
            boxShadow: `
              0 0 0 20px rgba(255, 255, 255, 0.4),
              0 0 0 50px rgba(255, 255, 255, 0.3),
              0 0 0 90px rgba(255, 255, 255, 0.2)
              `
          }
        },
        ".winner-effect": {
          borderRadius: '50%',
          animation: "pulse 3s infinite ease-in-out",
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }
      }
    }
  }
})