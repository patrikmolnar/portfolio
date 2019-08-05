import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectMarkdown from "../components/projectmarkdown"

const Project = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <Layout pageContext={pageContext}>
      <SEO title={`${pageContext.project.title}`} />
      <ProjectMarkdown
        title={pageContext.project.title}
        content={pageContext.project.projectDetail.content}
        description={pageContext.project.description}
        demo={pageContext.project.demoUrl}
        source={pageContext.project.sourceUrl}
        isPrivate={pageContext.project.isPrivate}
      />
    </Layout>
  )
}

export default Project
