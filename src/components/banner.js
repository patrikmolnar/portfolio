import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import Particles from "./particles"
import Social from "./social"

const useStyles = makeStyles(theme =>
  createStyles({
    banner: {
      [theme.breakpoints.down("sm")]: {
        backgroundPosition: "0px 0px",
      },
    },
  })
)

const Banner = ({ social }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      className={classes.banner}
      style={{
        height: "70vh",
        position: "relative",
      }}
      justify={"center"}
      alignItems={"center"}
    >
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          left: 0,
          height: "70vh",
        }}
      >
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: 260, maxWidth: 1000 }}
        >
          <Grid style={{ alignContent: "left" }} item xs={12}>
            <Typography
              variant="h1"
              component="h1"
              style={{ textAlign: "left", padding: "0px 50px" }}
            >
              I'm Patrik Molnar
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              style={{ textAlign: "left", padding: "0px 50px" }}
            >
              a <span style={{ color: "#2D9CDB" }}>full-stack</span> developer
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              style={{ textAlign: "left" }}
            >
              I build digital products using mainly AWS, Gatsby, GraphQL,
              Apollo, MongoDB and React. Currently a software engineer at Brikl
              Thailand Co,. Ltd.
            </Typography>
            <Social />
          </Grid>
        </Grid>
      </Grid>
      <Particles />
    </Grid>
  )
}

export default Banner
