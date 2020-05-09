import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import React from 'react';
import logo from '../../logo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      minWidth: theme.spacing(2),
    },
  }),
);

const tileData = [
  {
    title: 'Barry Trotter'
  },
  {
    title: 'Yarry Poster'
  },
  {
    title: 'Dobby Potter'
  },
];

const UserDashboardPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>My Stories</h2>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.title}>
            <img src={logo} alt={tile.title}/>
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <PlayCircleOutlineIcon/>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default UserDashboardPage;
