import React, { useState } from 'react';

// MUI Stuff
import { withStyles, Hidden, IconButton, Badge } from '@material-ui/core';

// MUI Icons
import TuneIcon from 'mdi-react/TuneIcon';

// redux
import { useSelector } from 'react-redux';

// components
import { MobileFilterPageSize, MobileFilterOrder } from 'jumbogold/listing/common';
import CategorySelection from '../../components/CategorySelection';
import MobileFilterSideBar from '../../components/MobileFilterSideBar';

// styling
import styles from './style';

const FilterSection = ({ classes, fullListing, pageSize, setPageSize }) => {
  const {
    listing: { filterCount },
  } = useSelector((state) => state);

  const [showFilterSideBar, setShowFilterSideBar] = useState(false);

  const handleShowFilterSideBar = () => setShowFilterSideBar(true);

  const handleCloseFilterSideBar = () => setShowFilterSideBar(false);

  return (
    <>
      <div className={classes.filterSection}>{fullListing ? <div /> : <CategorySelection />}</div>

      <Hidden smUp>
        <div className={classes.mobileFilterSection}>
          <IconButton className={classes.toggleFilterButton} onClick={handleShowFilterSideBar}>
            <Badge className={classes.badge} badgeContent={filterCount} color="primary" max={99} />
            <TuneIcon className={classes.filterIcon} />
          </IconButton>

          <MobileFilterOrder />

          <MobileFilterPageSize pageSize={pageSize} setPageSize={setPageSize} />
        </div>
      </Hidden>

      <MobileFilterSideBar
        open={showFilterSideBar}
        onClose={handleCloseFilterSideBar}
        fullListing={fullListing}
      />
    </>
  );
};

export default withStyles(styles)(FilterSection);
