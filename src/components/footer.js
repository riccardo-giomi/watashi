import React from "react"

import { Divider, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => {
  return {
    footer: {
      flexGrow: 1,
      width: `100%`,
      position: `fixed`,
      left: 0,
      bottom: 0,
      background: theme.palette.background.default,
    },
    copyright: {
      fontSize: `0.9rem`,
    },
  }
})

const Copyright = () => {
  const classes = useStyles()
  return (
    <Typography
      variant="body2"
      align="center"
      color="textSecondary"
      className={classes.copyright}
    >
      Riccardo Giomi
      {` | `}
      NIE: Y2764240-E
      {` | `}
      Tenerife, Spain
      {` | `}
      contact@riccardogiomi.com
    </Typography>
  )
}

export default () => {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      <Divider />
      <Copyright />
    </div>
  )
}
