import React from "react"
import { Grid, Typography, Button, Tooltip, Divider } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import TechStack from "./techstack"
import ImageZoom from "react-medium-image-zoom"

const useStyles = makeStyles(theme =>
  createStyles({
    imageCard: {
      borderRadius: 12,
      objectFit: "contain",
      maxHeight: "300px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
      "&:hover": {
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      },
    },
    chip: {
      margin: theme.spacing(1),
    },
  })
)

const ProjectDetails = ({ project }) => {
  const classes = useStyles()
  console.log(project)
  return (
    <>
      <Grid
        style={{ padding: "40px 40px 0px 40px", textAlign: "center" }}
        item
        xs
      >
        <ImageZoom
          image={{
            alt: "thumbnail",
            src: project.thumbnail.url,
            className: classes.imageCard,
          }}
        />
        <Grid
          style={{ padding: 20 }}
          justify="center"
          container
          direction="row"
        >
          <Button
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2d9cdb", fontWeight: "bold" }}
            href={project.demoUrl}
          >
            Demo
          </Button>
          {project.isPrivate ? (
            <Tooltip title="Source is private" placement="bottom">
              <span>
                <Button disabled>Code</Button>
              </span>
            </Tooltip>
          ) : (
            <Button
              style={{ color: "#2d9cdb", fontWeight: "bold" }}
              target="_blank"
              rel="noopener noreferrer"
              href={project.sourceUrl}
            >
              Code
            </Button>
          )}
        </Grid>
      </Grid>
      <Grid style={{ padding: "0px 40px 40px 40px" }} item xs>
        <Typography
          style={{ color: "#2d9cdb", fontWeight: "bold" }}
          variant="h4"
          component="h4"
        >
          {project.title}
        </Typography>
        <br />
        <Typography variant="h5" component="h5">
          {project.description}
        </Typography>
        <br />
        <Typography variant="h5" component="h5">
          {project.difficulties}
        </Typography>
        <br />
        {project.techStack.map((tech, index) => (
          <TechStack key={index} tech={tech} />
        ))}
      </Grid>
      <Grid style={{ padding: 50 }} container direction="column">
        <Divider variant="middle" />
      </Grid>
    </>
  )
}

export default ProjectDetails
