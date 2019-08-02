import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import SEO from "../components/seo"

const Home = ({ pageContext }) => (
  <Layout pageContext={pageContext}>
    <SEO title="Home" />
    <Banner social={pageContext.portfolio.social} />
  </Layout>
)

export default Home
