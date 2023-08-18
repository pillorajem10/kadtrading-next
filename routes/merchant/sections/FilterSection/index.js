import React, { Fragment, useState } from 'react';

// MUI Stuff
import { withStyles, Typography, Hidden, IconButton, Badge } from '@material-ui/core';

// MUI Icons
import TuneIcon from 'mdi-react/TuneIcon';

// Redux
import { useSelector } from 'react-redux';

// components
import {
  FilterOrder,
  FilterPageSize,
  SearchKeyword,
  MobileFilterPageSize,
  MobileFilterOrder,
} from 'jumbogold/listing/common';
import MobileFilterSideBar from '../../components/MobileFilterSideBar';
import PromotionBanner from '../../components/PromotionBanner';

// Styling
import styles from './style';

const FilterSection = ({ classes, onSearch, pageSize, setPageSize }) => {
  const {
    listing: { filterCount },
  } = useSelector((state) => state);

  const [showFilterSideBar, setShowFilterSideBar] = useState(false);

  const handleShowFilterSideBar = () => setShowFilterSideBar(true);

  const handleCloseFilterSideBar = () => setShowFilterSideBar(false);

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.filterSection}>
          <Hidden xsDown>
            <div />
          </Hidden>

          <div className={classes.rightFilterSection}>
            <Hidden xsDown>
              <Fragment>
                <Typography className={classes.filterTitle}>Sort by</Typography>
                <FilterOrder />

                <Typography className={classes.filterTitle}>View</Typography>
                <FilterPageSize pageSize={pageSize} setPageSize={setPageSize} />
              </Fragment>
            </Hidden>

            <SearchKeyword onSearch={onSearch} />
          </div>
        </div>
      </div>

      <Hidden smUp>
        <PromotionBanner />

        <div className={classes.mobileFilterSection}>
          <IconButton className={classes.toggleFilterButton} onClick={handleShowFilterSideBar}>
            <Badge className={classes.badge} badgeContent={filterCount} color="primary" max={99} />
            <TuneIcon className={classes.filterIcon} />
          </IconButton>

          <MobileFilterOrder />

          <MobileFilterPageSize pageSize={pageSize} setPageSize={setPageSize} />
        </div>
      </Hidden>
      <MobileFilterSideBar open={showFilterSideBar} onClose={handleCloseFilterSideBar} />
    </Fragment>
  );
};

export default withStyles(styles)(FilterSection);
