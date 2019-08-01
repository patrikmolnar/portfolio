import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "@material-ui/styles"
import { Theme } from "./theme"

const Layout = ({ children, pageContext }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Helmet>
        <title>Patrik Molnar - Portfolio</title>
      </Helmet>

      <div style={{ overflow: "hidden" }}>
        <Header pageContext={pageContext} />
        <div style={{ minHeight: "90vh" }}>{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
