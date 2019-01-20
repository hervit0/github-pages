import React from "react"
import AppBar from "@material-ui/core/AppBar"
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"

// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/page-layout-examples/album/Album.js
const styles = theme => ({
  appBar: {
    position: "relative"
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  }
})

const TopBar = ({ classes }) => (
  <AppBar position="static" className={classes.appBar}>
    <Toolbar>
      <PhotoCameraIcon className={classes.icon} />
      <Typography variant="h6" color="inherit" noWrap>
        Ohnana
      </Typography>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(TopBar)
