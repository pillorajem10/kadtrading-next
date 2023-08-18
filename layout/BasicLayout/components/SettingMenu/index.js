import React, { useMemo, useState, useEffect } from 'react';

import ReactCountryFlag from "react-country-flag"

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Styling
import styles from './style';

const SettingMenu = ({ classes, showMenu, hideMenu, onSelect }) => {

  const handleItemClick = (e, v) => {
    onSelect(v);
    hideMenu();
  };

  return (
    <div
      className={
        showMenu
          ? classes.showMenu
          : classes.categoryMenu
      }
      onMouseLeave={hideMenu}
    >
      <div className={classes.categoryMenuContainer}>
        <div className={classes.level2MenuList}>
          <div 
            onClick={(e) => handleItemClick(e, 'SGD')}
            className={classes.currencyItem}>
            <ReactCountryFlag 
                countryCode="SG"
                style={{
                  marginRight: 15,
                  fontSize: '2em',
                  lineHeight: '1em',
                }}
              />
            <Typography>Singaporean SGD$</Typography>
          </div>

          <div
            onClick={(e) => handleItemClick(e, 'USD')}          
            className={classes.currencyItem}>
            <ReactCountryFlag 
                countryCode="US"
                style={{
                  marginRight: 30,
                  fontSize: '2em',
                  lineHeight: '1em',
                }}
              />
            <Typography>American USD$</Typography>
          </div>

        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(SettingMenu);
