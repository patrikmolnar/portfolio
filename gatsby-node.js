exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query {
      graphcms {
        personal(where: { id: "cjypvzi3cloqj0830gjpmj3rv" }) {
          id
          name
          introduction
          resumeUrl
          projects {
            id
            title
            description
            role
            difficulties
            solution
            sourceUrl
            demoUrl
            isPrivate
            techStack
            slug
            projectDetail {
              content
            }
            thumbnail {
              id
              url
            }
          }
          social {
            id
            linkedIn
            github
            twitter
          }
        }
      }
    }
  `)

  try {
    const portfolio = result.data

    const basePath = "/"
    actions.createPage({
      path: basePath,
      component: require.resolve("./src/templates/home.js"),
      context: {
        portfolio: portfolio.graphcms.personal,
      },
    })

    const projects = portfolio.graphcms.personal.projects

    projects.forEach(project => {
      actions.createPage({
        path: basePath + "project/" + project.slug,
        component: require.resolve("./src/templates/project.js"),
        context: {
          project: project,
        },
      })
    })
  } catch (error) {
    console.log("gatsby-node.error", error)
  }
}
