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
  FilterCaratRange,
  FilterCutRange,
  FilterColorRange,
  FilterClarityRange,
  FilterPolishRange,
  FilterSymmetryRange,
  FilterShape,
  FilterLabRange
} from 'jumbogold/listing/OtherFilterComponentDropdown';

// styling
import styles from './style';

const OtherFilterOptionsSection = ({ classes, fullListing }) => {
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
                <FilterPriceRange/>
                <FilterShape/>
                <FilterCaratRange/>
              </div>
              <div className={classes.filterOptionsList}>
                <FilterCutRange/>
                <FilterColorRange/>
                <FilterClarityRange/>
              </div>
              <div className={classes.filterOptionsList}>
                <FilterPolishRange/>
                <FilterSymmetryRange/>
                <FilterLabRange/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(OtherFilterOptionsSection);
