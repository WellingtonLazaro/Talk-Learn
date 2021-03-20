import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import Header from '../src/components/Header'
import PlaceToVisit from '../src/components/placeToVisit'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/whitewall.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}));
export default function App() {
  const classes = useStyles();
  return <div className={classes.root}>
    <CssBaseline />
    <Header />
    <PlaceToVisit />
  </div>
};