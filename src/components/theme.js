import { createMuiTheme } from "@material-ui/core/styles"

export const Theme = createMuiTheme({
  body: {
    margin: 0,
  },
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
      lineHeight: "60px",
      fontFamily: `"Montserrat", Arial, Helvetica, sans-serif`,
      fontSize: "3.5rem",
      "@media (min-width:600px)": {
        fontSize: "3.0rem",
        lineHeight: "60px",
      },
      "@media (max-width:600px)": {
        fontSize: "2rem",
        lineHeight: "43px",
      },
    },
    h2: {
      fontFamily: `"Montserrat", Arial, Helvetica, sans-serif`,
      fontSize: "21px",
      lineHeight: "34px",
      "@media (min-width:600px)": {
        fontSize: "21px",
        padding: "15px 50px",
        lineHeight: "34px",
      },
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
        padding: "15px 50px",
        lineHeight: "34px",
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
        fontSize: "1.8rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
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
