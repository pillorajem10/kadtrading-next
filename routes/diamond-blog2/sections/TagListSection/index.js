import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Styling
import styles from './style';

const TagListSection = ({ classes }) => {
  return (
    <div className={classes.tagListSection}>
      <Typography className={classes.tagTitle}>TAGGED TOPICS</Typography>

      <div className={classes.tagList}>
        <div className={classes.tagWrapper}>
          <Typography className={classes.tag}>bto defect</Typography>
        </div>
        <div className={classes.tagWrapper}>
          <Typography className={classes.tag}>defect checklist</Typography>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(TagListSection);
