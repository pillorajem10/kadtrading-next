import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Utils
import regExp from 'utils/regExp';

// Styling
import styles from './style';

const FreeGift = ({ classes, remark }) => {
  if (regExp.isEmpty(remark)) return null;

  return (
    <div className={classes.container}>
      <Typography>Free Gift</Typography>

      <div>
        <Typography className={classes.freeGift}>{remark}</Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(FreeGift);
