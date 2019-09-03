import React from "react"
import {
  Grid,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardActions,
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
    imageCard: {
      borderRadius: 12,
      objectFit: "contain",
      flex: 1,
      width: "100%",
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
      <Grid style={{ padding: 20 }} item xs={12} sm={12} md={12} lg={6} xl={6}>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            alt={project.title}
            height="140"
            image={project.thumbnail.url}
            title={project.title}
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
                {project.description}
              </Typography>
              <div style={{ paddingTop: 15 }}>
                {project.techStack.map((tech, index) => (
                  <TechStack key={index} tech={tech} />
                ))}
              </div>
              <Button style={{ marginTop: 20 }} color="secondary">
                Read more
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
      {/* <Grid
        style={{ padding: "40px 40px 0px 40px", textAlign: "center" }}
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
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
      <Grid
        style={{ padding: "0px 40px 40px 40px" }}
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
      >
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
          {project.role}
          <Link to={`/project/${project.slug}`}>Learn more</Link>
        </Typography>

        <br />
        {project.techStack.map((tech, index) => (
          <TechStack key={index} tech={tech} />
        ))}
      </Grid>
      <Grid style={{ padding: 50 }} container direction="column">
        <Divider variant="middle" />
      </Grid> */}
    </>
  )
}

export default ProjectDetails
