import PropTypes from "prop-types"
import React from "react"

import { Link as GatsbyLink } from "gatsby"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import TitleImage from "./title-image"

const useStyles = makeStyles({
  root: { flexGrow: 1 },
  link: { textDecoration: `none`, color: `black`, flexGrow: 1 },
  title: { marginLeft: 10 },
})

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <TitleImage />
          <GatsbyLink to="/" className={classes.link}>
            <Typography
              className={classes.title}
              variant="h5"
              color="inherit"
              position="static"
              noWrap
            >
              {siteTitle}
            </Typography>
          </GatsbyLink>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
