import React from "react"
import { Grid, Typography } from "@material-ui/core"

const ProjectDetails = ({ project }) => {
  console.log(project)
  return (
    <>
      <Grid item xs={4}>
        <img
          alt="thumbnail"
          src={project.thumbnail.url}
          style={{ objectFit: "contain", maxHeight: "200px" }}
        />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h5" component="h5">
          {project.title}
        </Typography>
        <Typography variant="h5" component="h5">
          {project.description}
        </Typography>
      </Grid>
    </>
  )
}

export default ProjectDetails
