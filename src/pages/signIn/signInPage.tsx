import { Button } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CustomHeader from '../../components/header/header';
import { Routes } from '../../Router';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const SignInPage = () => {
  const classes = useStyles();

  return (
    <>
      <CustomHeader header='Sign in'/>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="username" label="Username" variant="outlined"/>
        <TextField id="password" label="Password" variant="outlined" type="password"/>
      </form>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<LockOpenIcon/>}
        href={Routes.dashboard}
      >
        Login
      </Button>
    </>
  );
};

export default SignInPage;