// importing dependencies
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, makeStyles } from '@material-ui/core/styles';


// Adding CSS styles for React components
const useStyles = makeStyles({
  root: {
    backgroundColor: '#424242',
    color: 'white',
    height: '80vh',

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// Utilising the custom MuiTheme option for Material UI components
const theme = createMuiTheme({
  typography: {
    body2: {
      fontFamily: 'Segoe UI',
      fontSize: '0.85rem',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      fontFamily: 'Segoe UI',
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

export default function InitialCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <ThemeProvider theme={theme}>
        <Typography variant="h4" component="h2">
        <font color="aqua"><center>How to use it?</center></font>
        </Typography>
        <Typography variant="body2" component="p">
        <ul>
           <li> Zoom in/out the map using the scroll button. </li>
           <li>  Click on any plotted object to check whether it has been observed by AstroSAT recently or not.</li>
           <li>  If the observation status is True, click the <b>‘More Info’</b> button to get detailed analysis of the object.</li>
           <li> Click on the <b>‘Manage Layers’</b> option on the left, to control the base image layer and the color map.</li> 
           <li>Check out our User Manual if you face any trouble or wish to know more about our webtool. </li> 
          </ul>
        </Typography>
        <Typography variant="h4" component="h2">
            <font color="aqua"><center>Key Features</center></font>
        </Typography>
        <Typography variant="body2" component="p">
         <ul>
           <li> GUI controlled options to control the <b>base image layer</b> with 20+ available options.</li>
           <li> Interactive options to change the <b>color map</b> amongst the five available options.</li>
           <li> Import any map view as a PNG image. </li>
           <li> Integrated search option to locate desired object by name or position.</li> 
          </ul>
        </Typography>
        </ThemeProvider>
      </CardContent>
      <CardActions style={{marginTop:'0'}}>
      <a style={{textDecoration:"none",}} href="https://drive.google.com/file/d/1WiloUV13bP-KFWHciXHBsNi613FWOihW/view?usp=sharing" download="Complete_Catalog"><Button size="small" variant="contained" color="primary">Download Catalogs</Button></a>
      <a style={{textDecoration:"none",}} href="https://drive.google.com/file/d/1ixOgcMPCoolMTo8uvkESYTDJCQQBww5O/view?usp=sharing"><Button size="small" variant="contained" color="primary">View User Manual</Button></a>
      </CardActions>
    </Card>
  );
}