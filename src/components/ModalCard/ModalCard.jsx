// importing dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

// Adding CSS styles for React components
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: "50vw",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalCard() {
  const classes = useStyles();
  // Declaring state variable to handle the opening and closing
  // of the popup view
  const [open, setOpen] = React.useState(true);

  // Function for closing the popup view
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={{
        top: `50%`,
        left: `45%`,
        transform: `translate(-50%, -45%)`,
      }} 
    className={classes.paper}>
      <h2 id="simple-modal-title">Welcome to Geenie: The AstroSat Visualizer!</h2>
      <p id="simple-modal-description">
      This site was designed by a team of sophomores from Team 16 and is 
      based on Aladin, an interactive sky atlas. We present a <b>3-D sky map of 280 X-Ray Binaries</b> using
      Liu+ (2001).  The source names have been resolved using SIMBAD and is accurate upto atleast 2 arcmin!
      <br/><br/>Using our tool you can also <b>find out whether the source has been observed by AstroSat </b> 
      within the last 2 years and <b>you can also find publications corresponding to the source</b>. COOL right?
      Contact our team if you wish to give any feedback. We would love to hear back from you. <br/><br/>
      <i>Happy Stargazing!</i>
      </p>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
