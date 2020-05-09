import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import React from 'react';
import { Routes } from '../../Router';

const useStyles = makeStyles((theme) => ({
  typoShare: {
    margin: theme.spacing(1),
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
  }
}));

export default function NewStoryPage() {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.typoShare} variant='h3' color="textPrimary">
        Start a new story
      </Typography>
      <TextField
        id="story-name"
        label="Story name"
        style={{ margin: 8 }}
        placeholder="Write the name of your story"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Typography className={classes.typoShare} variant="body1" color="textPrimary" component="p">
        Share the following link with your pen friend:
      </Typography>
      <div className={classes.link}>
        <Typography className={classes.typoShare} variant="body2" color="textPrimary" component="p">
          https://fake.com/story/e7f81831-7f37-45c5-bc30-6db60d1f75e9/join
        </Typography>
        <IconButton aria-label="copy">
          <FileCopyIcon/>
        </IconButton>
      </div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<CreateIcon/>}
        href={Routes.demoStory}
      >
        Start writing!
      </Button>
    </div>
  );
}
