import React from "react"
import {
  Grid,
  Typography,
  Button,
  Card,
  Tooltip,
  CardContent,
  CardMedia,
} from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import TechStack from "./techstack"
import { Link } from "gatsby"

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      height: "100%",
      width: "100%",
    },
    chip: {
      margin: theme.spacing(1),
    },
    innerShadow: {
      WebkitBoxShadow: "0px 0px 30px 0px #6d6b6b4a",
      MozBoxShadow: "0px 0px 30px 0px #6d6b6b4a",
      boxShadow: "0px 0px 30px 0px #6d6b6b4a",
    },
  })
)

const ProjectDetails = ({ project }) => {
  const classes = useStyles()
  console.log(project)
  return (
    <>
      <Grid style={{ padding: 20 }} item xs={12} sm={12} md={12} lg={6} xl={6}>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            alt={project.title}
            height="240"
            image={project.thumbnail.url}
            title={project.title}
            className={classes.innerShadow}
          />
          <CardContent>
            <div style={{ padding: "20px 20px 0px 20px" }}>
              <Typography gutterBottom variant="h5" component="h2">
                {project.title}
              </Typography>
              <Typography
                style={{ lineHeight: "25px" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {project.role}
              </Typography>
              {/* <div style={{ paddingTop: 15 }}>
                {project.techStack.map((tech, index) => (
                  <TechStack key={index} tech={tech} />
                ))}
              </div>
              <div style={{ paddingTop: 15 }}>
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: "bold" }}
                  href={project.demoUrl}
                  color="secondary"
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
                    style={{ fontWeight: "bold" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.sourceUrl}
                    color="secondary"
                  >
                    Code
                  </Button>
                )}
              </div> */}
              <Grid
                style={{ paddingTop: 25 }}
                container
                justify="center"
                alignItems="center"
              >
                <Button
                  component={Link}
                  to={`/project/${project.slug}`}
                  style={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Read more
                </Button>
              </Grid>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default ProjectDetails
