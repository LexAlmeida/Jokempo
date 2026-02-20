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
              0 0 0 40px rgba(41, 50, 81, 1),
              0 0 0 70px rgba(35, 44, 75, 0.3),
              0 0 0 110px rgba(30, 41, 73, 0.2)
              `
          },
          "50%": {
            boxShadow: `
              0 0 0 70px rgba(41, 50, 81, 0.6),
              0 0 0 100px rgba(35, 44, 75, 0.4),
              0 0 0 150px rgba(30, 41, 73, 0.3)
              `
          },
          "100%": {
            boxShadow: `
              0 0 0 40px rgba(41, 50, 81, 0.4),
              0 0 0 70px rgba(35, 44, 75, 0.3),
              0 0 0 110px rgba(30, 41, 73, 0.2)
              `
          }
        },
        ".winner-effect": {
          borderRadius: '50%',
          animation: "pulse 3s infinite ease-in-out",
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 0
        },
        ".text-result": {
          position: 'relative',
          zIndex: 10
        }
      }
    }
  }
})