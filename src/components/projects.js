import React from "react"
import { Grid, GridList } from "@material-ui/core"
import ProjectDetails from "./projectdetails"
import { makeStyles, createStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    projectCardGrid: {
      [theme.breakpoints.down("xl")]: {
        padding: "0px 300px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "20px 10px",
      },
    },
  })
)

const Projects = ({ pageContext }) => {
  const classes = useStyles()

  try {
    return (
      <Grid
        className={classes.projectCardGrid}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <GridList>
          {pageContext.portfolio.projects.map((project, index) => {
            return <ProjectDetails key={index} project={project} />
          })}
        </GridList>
      </Grid>
    )
  } catch (error) {
    console.log("Projects.error", error)
  }
}

export default Projects
