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
          {bull} Lorem Ipsum Dorem <br/> {bull} Lorem Ipsum Dorem <br/>{bull} Lorem Ipsum Dorem <br/> 
          <br />
        </Typography>
        <Typography variant="h4" component="h2">
            <font color="aqua">Key Features</font>
        </Typography>
        <Typography variant="body1" component="p">
          {bull} Lorem Ipsum Dorem <br/> {bull} Lorem Ipsum Dorem <br/>{bull} Lorem Ipsum Dorem <br/> 
          <br />
        </Typography>
      </CardContent>
      <CardActions style={{marginTop:'28vh'}}>
        <Button size="small">Footer Heading</Button>
      </CardActions>
    </Card>
  );
}