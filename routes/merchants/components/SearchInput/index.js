import React from 'react';

// MUI Stuff
import { withStyles, InputBase, IconButton } from '@material-ui/core';

// MUI Icons
import SearchIcon from '@material-ui/icons/Search';

// Styling
import styles from './style';

const SearchInput = ({ classes, onSearch }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.searchInputWrapper}>
        <InputBase
          className={classes.searchInput}
          placeholder="SEARCH MERCHANTS"
          inputProps={{ 'aria-label': 'search merchant' }}
          onChange={onSearch}
        />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default withStyles(styles)(SearchInput);
