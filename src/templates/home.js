import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"

const Home = ({ pageContext }) => (
  <Layout pageContext={pageContext}>
    <Banner social={pageContext.portfolio.social} />
  </Layout>
)

export default Home
