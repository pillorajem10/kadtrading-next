import React, { useState } from 'react';

// MUI Stuff
import { withStyles, Checkbox, Typography } from '@material-ui/core';

// layout
import UserLayout from 'layout/UserLayout';

// sections
import FavouriteItemSection from 'routes/favourites/sections/FavouriteItemSection';

// Styling
import styles from 'routes/favourites/style';

const Favourites = ({ classes }) => {
  const [get3D, setGet3D] = useState(false);

  const handleToggleGet3D = () => setGet3D((prevState) => !prevState);

  return (
    <UserLayout>
      <div>
        <div className={classes.headerContainer}>
          <div>
            <div className={classes.threeDCheckboxContainer}>
              <Checkbox
                color="primary"
                checked={get3D}
                className={classes.threeDCheckbox}
                onChange={handleToggleGet3D}
              />
              <Typography>3D</Typography>
            </div>
          </div>

          {/* <div className={classes.tabsContainer}>
            <div
              className={tabIndex === 0 ? classes.activeTab : classes.normalTab}
              onClick={() => handleSetTabIndex(0)}
            >
              <Typography>Item</Typography>
            </div>
            <div
              className={tabIndex === 1 ? classes.activeTab : classes.normalTab}
              onClick={() => handleSetTabIndex(1)}
            >
              <Typography>Group</Typography>
            </div>
            <div
              className={tabIndex === 2 ? classes.activeTab : classes.normalTab}
              onClick={() => handleSetTabIndex(2)}
            >
              <Typography>Merchant</Typography>
            </div>
          </div> */}
        </div>

        <FavouriteItemSection get3D={get3D} />
      </div>
    </UserLayout>
  );
};

export default withStyles(styles)(Favourites);
