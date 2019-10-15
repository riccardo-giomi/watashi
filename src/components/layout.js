import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"

import theme from "./theme"
import "./layout.css"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, ...props }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header siteTitle={`${data.site.siteMetadata.title}`} />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
