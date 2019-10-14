import PropTypes from "prop-types"
import React from "react"

import { Link } from "gatsby"

import { AppBar, Toolbar, Typography } from "@material-ui/core"

import TitleImage from "./title-image"

const Header = ({ siteTitle }) => (
  <div style={{ flexGrow: 1 }}>
    <AppBar>
      <Toolbar>
        <TitleImage />
        <Link
          to="/"
          style={{ textDecoration: `none`, color: `white`, flexGrow: 1 }}
        >
          <Typography
            style={{ marginLeft: 10 }}
            variant="h6"
            color="inherit"
            position="static"
            noWrap
          >
            {siteTitle}
          </Typography>
        </Link>
        <Link to="/curriculum" style={{ color: `white` }}>
          Curriculum
        </Link>
      </Toolbar>
    </AppBar>
    <Toolbar />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
