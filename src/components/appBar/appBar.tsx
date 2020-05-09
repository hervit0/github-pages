import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DashboardIcon from '@material-ui/icons/Dashboard';
import React from 'react';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Badge from '@material-ui/core/Badge';
import { Routes } from '../../Router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const CustomAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href={Routes.dashboard}>
            <DashboardIcon/>
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Story Tok
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="notification">
            <Badge badgeContent={Math.floor(Math.random() * 10)} color="secondary">
              <NotificationsActiveIcon/>
            </Badge>
          </IconButton>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="exit" href={Routes.signin}>
            <ExitToAppIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CustomAppBar;