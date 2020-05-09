import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import React from 'react';
import logo from '../../logo.svg';
import { Routes } from '../../Router';

const useStyles = makeStyles((theme) => ({
  welcomePage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const WelcomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.welcomePage}>
      <img src={logo} className="App-logo" alt="logo"/>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<LockOpenIcon/>}
        href={Routes.signin}
      >
        Sign in
      </Button>
      <Button
        className={classes.button}
        variant="outlined"
        color="secondary"
        size="large"
        startIcon={<FiberNewIcon/>}
      >
        Sign up
      </Button>
    </div>
  );
};

export default WelcomePage;