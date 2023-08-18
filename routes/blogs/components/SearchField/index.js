import React from 'react';

// MUI Stuff
import { withStyles, InputBase } from '@material-ui/core';

// MUI Icons
import SearchIcon from '@material-ui/icons/Search';

// Styling
import styles from './style';

const SearchField = ({ classes }) => {
  return (
    <div className={classes.textInputUnit}>
      <SearchIcon className={classes.icon} />
      <InputBase
        className={classes.textInput}
        inputProps={{ 'aria-label': 'filter products' }}
        placeholder="Enter keywords"
        type="text"
      />
    </div>
  );
};

export default withStyles(styles)(SearchField);
