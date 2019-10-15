import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeContent from "../components/home-content"

import { Container, Paper } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import MailOutline from "@material-ui/icons/MailOutline"
import LinkedIn from "@material-ui/icons/LinkedIn"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => {
  return {
    content: {
      minHeight: 115,
      margin: `15px 0 15px 10px`,
      padding: `10px 50px 10px 20px`,
    },
    icons: {
      width: 50,
      margin: `0 40px 0 0`,
      padding: 0,
      border: 0,
      position: `fixed`,
      right: 0,
      top: 80,
    },
  }
})

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <Paper className={classes.content}><HomeContent/></Paper>
      <Container fixed className={classes.icons}>
        <IconButton href="mailto:contact@riccardogiomi.com">
          <MailOutline />
        </IconButton>
        <IconButton
          target="_blank"
          href="https://www.linkedin.com/in/riccardo-giomi-663303188/"
        >
          <LinkedIn />
        </IconButton>
      </Container>
    </Layout>
  )
}

export default IndexPage
