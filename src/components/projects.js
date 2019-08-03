import React from "react"
import { Typography, Grid } from "@material-ui/core"
import ProjectDetails from "./projectdetails"

const Projects = ({ pageContext }) => {
  try {
    console.log(pageContext)
    return (
      <>
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography variant="h3" component="h3">
            Projects
          </Typography>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          {pageContext.portfolio.projects.map((project, index) => {
            return <ProjectDetails key={index} project={project} />
          })}
        </Grid>
      </>
    )
  } catch (error) {
    console.log("Projects.error", error)
  }
}

export default Projects
