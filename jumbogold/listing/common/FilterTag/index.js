import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// picture
import clearIcon from 'public/assets/icons/clear.svg';

// styling
import styles from './style';

const FilterTag = ({ classes, text, onRemove }) => {
  return (
    <div className={classes.filterTag}>
      <Typography>{text}</Typography>
      <img src={clearIcon} alt="clear icon" onClick={onRemove} />
    </div>
  );
};

export default withStyles(styles)(FilterTag);
