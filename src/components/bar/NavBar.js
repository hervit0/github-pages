import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Avatar from "@material-ui/core/Avatar"
import ImageIcon from "@material-ui/icons/Image"
import WorkIcon from "@material-ui/icons/Work"
import BeachAccessIcon from "@material-ui/icons/BeachAccess"

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
})

const NavBar = ({ classes }) => (
  <List className={classes.root}>
    <Link to="/dogs" style={{ textDecoration: "none" }}>
      <ListItem>
        <Avatar>
          <ImageIcon />
        </Avatar>
        <ListItemText primary="Dogs" secondary="Jan 9, 2014" />
      </ListItem>
    </Link>
    <Link to="/contacts" style={{ textDecoration: "none" }}>
      <ListItem>
        <Avatar>
          <WorkIcon />
        </Avatar>
        <ListItemText primary="Contacts" secondary="Jan 7, 2014" />
      </ListItem>
    </Link>
    <Link to="/" style={{ textDecoration: "none" }}>
      <ListItem>
        <Avatar>
          <BeachAccessIcon />
        </Avatar>
        <ListItemText primary="Home" secondary="July 20, 2014" />
      </ListItem>
    </Link>
  </List>
)

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavBar)
