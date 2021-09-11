import React from 'react';
import { useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alerts(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

 const SnackBars = ({isDeleted}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [succeess, setSuccess] = useState();

  useEffect(() => {
    setSuccess(isDeleted);
    console.log(isDeleted);
    setOpen(true);
  }, [])

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  console.log(isDeleted)
  return (
    <div >
      {succeess &&
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alerts onClose={handleClose} severity="success">
          User deleted successfully
        </Alerts>
      </Snackbar>
      }

      {!succeess &&
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alerts onClose={handleClose} severity="warning">
          User not deleted
        </Alerts>
      </Snackbar>
      }
      {/* <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alerts onClose={handleClose} severity="success">
          User deleted successfully
        </Alerts>
      </Snackbar> */}
    </div>
  );
}

export default SnackBars;
