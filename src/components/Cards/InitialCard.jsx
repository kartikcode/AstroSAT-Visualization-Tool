import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export default function InitialCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h4" component="h2">
        <font color="aqua">How to use it?</font>
        </Typography>
        <Typography variant="body1" component="p">
        <ul>
           <li> Zoom in/out the map using the scroll button. </li>
           <li> Simply select the map to change the angle and direction of FOV.</li>
           <li> Click on any plotted object to check whether it has been observed by AstroSAT or not.</li>
           <li> If the observation status is <i><b>true</b></i>, click the More Info button to have the detailed analysis of the object.</li> 
           <li> Click on the <i><b>Manage Layers</b></i> option on the left, to control the base image layer and the color map.</li> 
          </ul>
        </Typography>
        <Typography variant="h4" component="h2">
            <font color="aqua">Key Features</font>
        </Typography>
        <Typography variant="body1" component="p">
         <ul>
           <li> GUI controlled options to control the base image layer with 20+ available options. </li>
           <li> Interactive options to change the color map amongst the five available options. </li>
           <li> Import any map view as an image. </li> 
          </ul>
        </Typography>
      </CardContent>
      <CardActions style={{marginTop:'28vh'}}>
        <Button size="small">Footer Heading</Button>
      </CardActions>
    </Card>
  );
}