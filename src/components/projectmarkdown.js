import React from "react"
import ReactMarkdown from "react-markdown"
import { Grid, Container } from "@material-ui/core"
import ProjectHeader from "./projectheader"
import "github-markdown-css"

const ProjectMarkdown = ({
  content,
  title,
  description,
  demo,
  source,
  isPrivate,
}) => (
  <>
    <ProjectHeader
      title={title}
      description={description}
      demo={demo}
      source={source}
      isPrivate={isPrivate}
    />
    <Grid
      style={{ padding: 40, fontFamily: "Merriweather" }}
      justify="center"
      alignItems="center"
      container
    >
      <Container className="markdown-body" maxWidth="md">
        <ReactMarkdown escapeHtml={false} source={content} />
      </Container>
    </Grid>
  </>
)

export default ProjectMarkdown
