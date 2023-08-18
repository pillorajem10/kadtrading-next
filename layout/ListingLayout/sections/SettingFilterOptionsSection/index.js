import React, { useState } from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// picture
import filterIcon from 'public/assets/icons/filter.svg';

// components
import {
  FilterPriceRange,
  FilterCategory,
  FilterFullCategory,
  FilterTags,
  FilterMerchants
} from 'jumbogold/listing/SettingsFilterComponentDropdown';

// styling
import styles from './style';

const FilterOptionsSection = ({ classes, fullListing }) => {
  const {
    listing: { filterCount },
  } = useSelector((state) => state);

  const [showFilter, setShowFilter] = useState(true);

  const handleToggleFilterOptions = () =>
    setShowFilter((currentValue) => {
      return !currentValue;
    });

  return (
    <div className={classes.filterOptionsSection}>
      <div className={classes.container}>
        <div className={classes.filterHeaderWrapper}>
          <img src={filterIcon} alt="filter icon" onClick={handleToggleFilterOptions} />

          <Typography className={classes.filterHeader} onClick={handleToggleFilterOptions}>
            {`${showFilter ? 'Hide' : 'Show'} filter (${filterCount})`}
          </Typography>
        </div>
      </div>

      <div className={showFilter ? classes.filterOptionsWrapper : classes.hideFilterOptionsWrapper}>
        <div className={classes.container}>
          <div className={classes.innerFilterOptionsWrapper}>
            <div>
              <div className={classes.filterOptionsList}>
                <FilterPriceRange />
                {fullListing ? <FilterFullCategory /> : <FilterCategory />}
                <FilterTags/>
                {/* <FilterMerchants/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(FilterOptionsSection);
