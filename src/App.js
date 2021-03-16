import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Aladin from './components/Aladin/Aladin';
import Topbar from './components/Topbar/Topbar';
import InitialCard from "./components/Cards/InitialCard";
import StarfieldAnimation from 'react-starfield-animation';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'black',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Topbar/>
        </Grid>
        <Grid item xs={9}>
          <Aladin/>
        </Grid>
        <Grid item xs={3}>
          <InitialCard/> 
        </Grid>
             </Grid>
    </div>
  );
}