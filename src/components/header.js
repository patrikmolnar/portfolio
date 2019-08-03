import React, { useState } from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Typography,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import Drawer from "@material-ui/core/Drawer"
import { Link } from "gatsby"

const useStyles = makeStyles(theme =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    link: {
      color: "#000",
      textDecoration: "none",
      padding: 20,
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: 400,
    },
    sectionDesktop: {
      display: "none",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      padding: 27,
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
)

const Header = () => {
  const classes = useStyles()
  const [state, setState] = useState({
    top: false,
  })

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const fullList = side => (
    <Grid
      style={{ textAlign: "center" }}
      container
      justify="center"
      direction="column"
    >
      <Link
        style={{ borderBottom: "1px solid #d4d4d4" }}
        to={`/`}
        className={classes.link}
        aria-label="Home"
      >
        Home
      </Link>
      <a
        aria-label="Resume"
        target="_blank"
        rel="noopener noreferrer"
        href="PatrikMolnar_CV.pdf"
        className={classes.link}
        style={{ borderBottom: "1px solid #d4d4d4" }}
      >
        Resume
      </a>
    </Grid>
  )

  return (
    <div className={classes.grow}>
      <AppBar elevation={0} position="static" color="primary">
        <Toolbar style={{ padding: 8 }}>
          <Grid container justify="flex-start">
            <Link style={{ color: "#000000", textDecoration: "none" }} to={`/`}>
              <Typography
                variant="h5"
                style={{
                  fontFamily: `Titillium Web, Arial, Helvetica, sans-serif`,
                  fontWeight: 700,
                  padding: "20px 0px 20px 50px",
                }}
              >
                Patrik Molnar
              </Typography>
            </Link>
          </Grid>

          <div className={classes.grow} />
          <Grid container justify="flex-end" className={classes.sectionDesktop}>
            <Link
              onClick={toggleDrawer("bottom", false)}
              aria-label="Home"
              to={`/`}
              className={classes.link}
            >
              Home
            </Link>
            <a
              aria-label="Resume"
              target="_blank"
              rel="noopener noreferrer"
              href="PatrikMolnar_CV.pdf"
              className={classes.link}
            >
              Resume
            </a>
          </Grid>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="Expand menu"
              onClick={toggleDrawer("top", true)}
            >
              <MenuIcon style={{ color: "#000", fontSize: 35 }} />
            </IconButton>
          </div>
          <Drawer
            anchor="top"
            open={state.top}
            onClose={toggleDrawer("top", false)}
          >
            {fullList("top")}
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
