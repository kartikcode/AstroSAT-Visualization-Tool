// importing dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import isro from "./isro.png";
import geenie from "./geenie.png";
import "./style.css";

// Adding CSS styles for React components
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Topbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#424242', height:'15vh' }}>
        <Toolbar>
            <img src={isro} style={{ width:'20vw', height:'20vh' }}/>
            <center>
            <div className="glow">Geenie: The AstroSAT Visualizer</div>
            </center>
            <img src={geenie} style={{ width:'30vh', height:'17vh' }}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
