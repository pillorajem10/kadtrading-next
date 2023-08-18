import { Snackbar } from '@material-ui/core';
import React from 'react';
import Alert from '@material-ui/lab/Alert';

const MustBeProvidedSnackBar = ({openSnackBar, closeSnackBar}) => {
  return (
    <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={openSnackBar} autoHideDuration={3000} onClose={closeSnackBar}>
      <Alert severity="error">Minimum depth % must be smaller than maximum depth %.</Alert>
    </Snackbar>
  )
}

export default MustBeProvidedSnackBar
