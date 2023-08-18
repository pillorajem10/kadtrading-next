import { Snackbar } from '@material-ui/core';
import React from 'react';
import Alert from '@material-ui/lab/Alert';

const MustBeProvidedSnackBar = ({openSnackBar, closeSnackBar}) => {
  return (
    <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={openSnackBar} autoHideDuration={2000} onClose={closeSnackBar}>
      <Alert severity="error">Minimum carat must be smaller than maximum carat.</Alert>
    </Snackbar>
  )
}

export default MustBeProvidedSnackBar
