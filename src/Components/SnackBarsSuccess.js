import React from 'react';
import { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alerts(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

 const SnackBarsSuccess = ({isDeleted}) => {
  const [open, setOpen] = useState(true);

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
