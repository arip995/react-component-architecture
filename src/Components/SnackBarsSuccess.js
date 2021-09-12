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

 const SnackBarsSuccess = ({isDeleted}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);



  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div >
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alerts onClose={handleClose} severity="success">
        User deleted successfully
      </Alerts>
    </Snackbar>
    </div>
  );
}

export default SnackBarsSuccess;
