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
  } catch (error) {
    console.log("gatsby-node.error", error)
  }
}
