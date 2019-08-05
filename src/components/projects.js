import React from "react"
import { Typography, Grid, Divider } from "@material-ui/core"
import ProjectDetails from "./projectdetails"

const Projects = ({ pageContext }) => {
  try {
    console.log(pageContext)
    return (
      <>
        <Grid
          style={{ padding: "0px 0px 50px 0px" }}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
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
