import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import isro from "./isro.png";
import iitk from "./iitk.jpg";
import "./style.css";



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
            <div className="glow"> AstroSAT Visualizer</div>
            </center>
            <img src={iitk} style={{ width:'14vh', height:'14vh',  borderRadius:'7vh' }}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
