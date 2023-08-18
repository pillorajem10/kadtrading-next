import React from 'react';

// MUI Stuff
import { withStyles, Hidden } from '@material-ui/core';

// components
import SortPageSize from '../../components/SortPageSize';
import MobileSortPageSize from '../../components/MobileSortPageSize';
import SearchField from '../../components/SearchField';

const styles = (theme) => ({
  filterSection: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 31,

    [theme.breakpoints.only('xs')]: {
      marginBottom: 25,
    },
  },
});

const FilterSection = ({ classes }) => {
  return (
    <div className={classes.filterSection}>
      {/* Sort Page Size */}
      <Hidden xsDown>
        <SortPageSize />
      </Hidden>
      <Hidden smUp>
        <MobileSortPageSize />
      </Hidden>

      {/* Search Feild */}
      <SearchField />
    </div>
  );
};

export default withStyles(styles)(FilterSection);
