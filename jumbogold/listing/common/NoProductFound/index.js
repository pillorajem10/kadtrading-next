import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// picture
import nani from 'public/assets/images/wizzo/shi.png';

// styling
import styles from './style';

const MotProductFound = ({ classes }) => {
  return (
    <div className={classes.noProductFound}>
      <img className={classes.noProductFoundImage} src={nani} alt="no product found" />
      <Typography className={classes.noProductFoundText}>
        No diamonds were found matching your selection.
      </Typography>
    </div>
  );
};

export default withStyles(styles)(MotProductFound);
