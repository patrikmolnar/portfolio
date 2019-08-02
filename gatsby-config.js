module.exports = {
  siteMetadata: {
    title: `Portfolio · Patrik Molnar`,
    titleTemplate: "%s · Patrik Molnar",
    description: `A website for my portfolio`,
    siteUrl: "https://patrikmolnar-portfolio.netlify.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat", "Roboto", "Titillium Web"],
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GraphCMS",
        fieldName: "graphcms",
        url:
          "https://api-apeast.graphcms.com/v1/cjypv7h5n26en01e3foajagxw/master",
      },
    },
    {
      resolve: "gatsby-plugin-material-ui",
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
