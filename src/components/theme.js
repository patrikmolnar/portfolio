import { createMuiTheme } from "@material-ui/core/styles"

export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "#452475",
    },
    secondary: {
      light: "#0066ff",
      main: "#a6026a",
      contrastText: "#fff",
    },
  },
  typography: {
    h1: {
      fontFamily: `"Montserrat", Arial, Helvetica, sans-serif`,
      fontSize: "3.5rem",
      "@media (min-width:600px)": {
        fontSize: "3.0rem",
      },
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontFamily: `"Montserrat", Arial, Helvetica, sans-serif`,
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
        padding: "15px 50px",
      },
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
        padding: "15px 50px",
      },
    },
    h3: {
      fontFamily: `"Montserrat", Arial, Helvetica, sans-serif`,
      fontSize: "2.5rem",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h4: {
      fontFamily: `"Montserrat", Arial, Helvetica, sans-serif`,
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
    },
    h5: {
      fontFamily: `"Montserrat", Arial, Helvetica, sans-serif`,
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    fontFamily: [
      "Montserrat",
      "Titillium Web",
      "Roboto",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})
