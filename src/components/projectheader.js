import React from "react"
import { Grid, Typography, Divider, Button, Tooltip } from "@material-ui/core"
import { Link } from "gatsby"

const ProjectHeader = ({ title, description, demo, source, isPrivate }) => (
  <>
    <Grid
      style={{ padding: "20px 0px 0px 20px" }}
      container
      justify="flex-start"
    >
      <Button
        style={{ fontWeight: "bold" }}
        component={Link}
        to="/"
      >{`< Back`}</Button>
    </Grid>
    <Grid
      style={{ padding: "40px 40px 20px 40px" }}
      direction="row"
      container
      justify="center"
    >
      <Typography style={{ color: "#2d9cdb" }} variant="h3">
        {title}
      </Typography>
    </Grid>
    <Grid
      style={{ padding: "0px 0px 20px 0px" }}
      direction="row"
      container
      justify="center"
    >
      <Button
        style={{ fontWeight: "bold" }}
        target="_blank"
        rel="noopener noreferrer"
        href={demo}
      >
        Demo
      </Button>
      {isPrivate ? (
        <Tooltip title="Source is private" placement="bottom">
          <span>
            <Button style={{ fontWeight: "bold" }} disabled>
              Source
            </Button>
          </span>
        </Tooltip>
      ) : (
        <Button
          style={{ fontWeight: "bold" }}
          target="_blank"
          rel="noopener noreferrer"
          href={source}
        >
          Source
        </Button>
      )}
    </Grid>
    <Divider variant="middle" />
  </>
)

export default ProjectHeader
