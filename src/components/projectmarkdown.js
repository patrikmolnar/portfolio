import React from "react"
import ReactMarkdown from "react-markdown"
import { Grid } from "@material-ui/core"
import ProjectHeader from "./projectheader"

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
      <article>
        <ReactMarkdown escapeHtml={false} source={content} />
      </article>
    </Grid>
  </>
)

export default ProjectMarkdown
