import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import { Avatar } from "@material-ui/core"

const useStyles = makeStyles(theme => {
  return {
    avatar: {
      backgroundColor: theme.palette.secondary,
    },
  }
})

const TitleImage = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "watashi.kanji.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Avatar
      className={classes.avatar}
      title={data.site.siteMetadata.title}
      alt={data.site.siteMetadata.title}
    >
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    </Avatar>
  )
}

export default TitleImage
