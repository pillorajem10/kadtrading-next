import React, { useState } from 'react';
import Router from 'next/router';
import ReactCountryFlag from "react-country-flag"

// MUI Stuff
import { withStyles, Badge, Typography } from '@material-ui/core';

// MUI Icons
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { common } from 'redux/actions';

// Picture
import favouriteIcon from 'public/assets/icons/favourite.png';

// components
import { CartSideBar } from 'jumbogold/transaction';
import MobileSideBar from '../MobileSideBar';
import MobileSearchMenu from '../MobileSearchMenu';
import SettingMenu from '../SettingMenu';

import colored from 'public/assets/jumbo/colored.png';

// Styling
import styles from './style';

const MobileNavBar = ({ classes }) => {
  const dispatch = useDispatch();
  const {
    common: { settings, currency },
    user: { authenticated },
    transaction: { cart },
  } = useSelector((state) => {
    // console.log('[MOBILE NAVBAR] ', state);
    return state;
  });

  const [showMobileSideBar, setShowMobileSideBar] = useState(false);
  const [showMobileSearchMenu, setShowMobileSearchMenu] = useState(false);
  const [showSettingMenu, setShowSettingMenu] = useState(false);

  const handleShowMobileSideBar = () => setShowMobileSideBar(true);

  const handleHideMobileSideBar = () => setShowMobileSideBar(false);

  const handleShowMobileSearchMenu = () => setShowMobileSearchMenu(true);

  const handleHideMobileSearchMenu = () => setShowMobileSearchMenu(false);

  const handleShowCartSideBar = () => dispatch(common.toggleCartSideBar(true));
  
  const handleCurrencySelection = (v) => dispatch(common.setSystemCurrency(v));

  const handleHideSettingMenu = () => setShowSettingMenu(false);

  return (
    <div className={classes.mobileNavBar}>
      <img src={colored} alt="" height={40} onClick={() => Router.push('/')} />

      <div className={classes.iconContainer}>
        {/*
        <SearchIcon className={classes.icon} onClick={handleShowMobileSearchMenu} />        
        */}

        <div 
          className={classes.currency}
          onClick={() => setShowSettingMenu(true)}>
          <ReactCountryFlag 
              countryCode={currency.substring(0, 2)}
              style={{
                fontSize: '1.5em',
                lineHeight: '1em',
                marginRight: 15,
                marginLeft: 5,

              }}
            />
          <Typography variant="caption">{currency} $</Typography>
        </div>

        {/*authenticated &&
          <img
            src={favouriteIcon}
            className={classes.icon}
            onClick={() => (authenticated ? Router.push('/user/favourites') : Router.push('/login'))}
            alt=""
          />        
        */}


        <Badge max={99} className={classes.badge} badgeContent={cart ? cart.itemCount : 0}>
          <ShoppingCartIcon className={classes.icon} onClick={handleShowCartSideBar} />
        </Badge>

        <MenuIcon className={classes.icon} onClick={handleShowMobileSideBar} />

        {/* Setting Menu */}
        <SettingMenu
          showMenu={showSettingMenu}
          hideMenu={handleHideSettingMenu}
          onSelect={handleCurrencySelection}
        />
        
      </div>

      <MobileSideBar
        showMobileSideBar={showMobileSideBar}
        hideMobileSideBar={handleHideMobileSideBar}
      />

      <MobileSearchMenu
        showMobileSearchMenu={showMobileSearchMenu}
        hideMobileSearchMenu={handleHideMobileSearchMenu}
      />

      <CartSideBar />
    </div>
  );
};

export default withStyles(styles)(MobileNavBar);
