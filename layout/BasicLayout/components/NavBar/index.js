import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Cookies from 'js-cookie';
import ReactCountryFlag from "react-country-flag"

// MUI Stuff
import { withStyles, Badge, InputBase, Typography, Button, ListItem } from '@material-ui/core';

// MUI Icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { common, listing } from 'redux/actions';

// Picture
import searchIcon from 'public/assets/icons/search.svg';
import profileIcon from 'public/assets/icons/profile.svg';
import favouriteIcon from 'public/assets/icons/favourite.png';
import shi from 'public/assets/images/wizzo/shi.png';

// components
import { CartSideBar } from 'jumbogold/transaction';
import CategoryMenu from '../CategoryMenu';
import SearchMenu from '../SearchMenu';
import SettingMenu from '../SettingMenu';

import colored from 'public/assets/jumbo/colored-transparent.png';

// Styling
import styles from './style';

const NavBar = ({ classes }) => {
  const dispatch = useDispatch();
  const {
    common: { settings, currency },
    user: { account, authenticated },
    product: { categoryList },
    transaction: { cart },
  } = useSelector((state) => {
    // console.log('[NAVBAR] ', state);
    return state;
  });

  const [position, setPosition] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [showSearchMenu, setShowSearchMenu] = useState(true);
  const [searchResult, setSearchResult] = useState({});
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [categoryId, setCategoryId] = useState('');

  const [showSettingMenu, setShowSettingMenu] = useState(false);


  const listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = winScroll / height;
    setPosition(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };
  }, []);

  const handleShowCartSideBar = () => dispatch(common.toggleCartSideBar(true));
  const handleCurrencySelection = (v) => dispatch(common.setSystemCurrency(v));

  const handleElasticSearch = async (keyword) => {
    const res = await dispatch(listing.getElasticSearchKeyword(keyword));
    const { success, data } = res;

    if (success) {
      setSearchResult(data);
    }
  };

  const handleSetSearchValue = (event) => {
    event.persist();
    const keyword = event.target.value;
    setSearchValue(keyword);

    if (keyword === '') {
      setSearchResult({});
    } else {
      setShowSearchMenu(true);
      handleElasticSearch(keyword);
    }
  };

  const handleHideSearchMenu = () => {
    setShowSearchMenu(false);
    setSearchResult({});
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const keyword = event.target.value;

      const getResentSearch = Cookies.get('recent_search');

      if (getResentSearch !== undefined) {
        const recentSearchList = JSON.parse(getResentSearch);

        if (!recentSearchList.includes(keyword)) {
          Cookies.set('recent_search', JSON.stringify([keyword, ...recentSearchList].slice(0, 5)));
        }
      } else {
        Cookies.set('recent_search', JSON.stringify([keyword]));
      }

      setSearchValue('');
      handleHideSearchMenu();

      setTimeout(() => {
        Router.push({
          pathname: '/listing',
          query: { keyword },
        });
      }, 550);
    }
  };

  const handleSetCategoryId = (catId) => {
    setShowCategoryMenu(true);
    setCategoryId(catId);
  };

  const handleHideCategoryMenu = () => {
    setShowCategoryMenu(false);
    setCategoryId('');
  };

  const handleHideSettingMenu = () => {
    setShowSettingMenu(false);
  };

  const catList = useMemo(() => {
    return categoryList?.map((cat) => {
      return { id: cat.id, name: cat.name };
    });
  }, [categoryList]);

  return (
    <nav className={classes.navbar}>
      <div
        className={classes.upperContainer}
        style={{ padding: position === 0 ? '26px 0' : '13px 0' }}
      >
        <div className={classes.container}>
          <img
            src={colored}
            alt=""
            className={classes.logo}
            width={position === 0 ? 220 : 184}
            onClick={() => Router.push('/')}
          />

          <div className={classes.middleContainer}>
            {/*<div className={classes.searchContainer}>
              <img src={searchIcon} className={classes.searchIcon} alt="" />
              <InputBase
                className={classes.searchInput}
                placeholder="What are you looking for?"
              />
            </div>

            {/* Search Menu 
            <SearchMenu
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              showSearchMenu={showSearchMenu}
              hideSearchMenu={handleHideSearchMenu}
              searchResult={searchResult}
            />*/}
          </div>

          <div className={classes.rightContainer}>
            <div 
              className={classes.currency}
              onClick={() => setShowSettingMenu(true)}>
              <Typography style={{ marginRight: 5 }} variant="caption">Currency:</Typography>
              <ReactCountryFlag 
                  countryCode={currency.substring(0, 2)}
                  style={{
                    marginRight: 5,
                    fontSize: '1.5em',
                    lineHeight: '1em',
                  }}
                />
              <Typography variant="caption">{currency} $</Typography>
            </div>
              
            {/* Cart Icon */}
            <Badge max={99}
              className={classes.badge}
              badgeContent={cart ? cart.itemCount : 0}>
              <ShoppingCartIcon
                className={classes.shoppingCartIcon}
                onClick={handleShowCartSideBar}
              />
            </Badge>

            {/* Favourite Folder Icon
            <img
              src={favouriteIcon}
              alt=""
              className={classes.favouriteIcon}
            />
            */}

            {/*
            <SettingsIcon
              className={classes.favouriteIcon}
            />

            <FavoriteIcon
              className={classes.favouriteIcon}
            />            
            */}


            {/*
              User Avatar /user/profile
            */}
            {authenticated ? (
              <Link href={authenticated ? '/user/profile' : '/login'}>
                <a>
                  <img src={account.profilePic && account.profilePic !== "" ? account.profilePic : shi} alt="usr" className={classes.avatar1} />
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a>
                  <img src={profileIcon} alt="usr" className={classes.avatar} />
                </a>
              </Link>
            )}

            {/* Setting Menu */}
            <SettingMenu
              showMenu={showSettingMenu}
              hideMenu={handleHideSettingMenu}
              onSelect={handleCurrencySelection}
            />

          </div>
        </div>
      </div>

      <div className={classes.bottomContainer}>
        <div className={classes.container}>
          {catList.map((cat) => (
            <div
              key={cat.id}
              className={
                categoryId === cat.id ? classes.bottomActiveMenuItem : classes.bottomMenuItem
              }
              onClick={() => handleSetCategoryId(cat.id)}
            >
              <Typography>{cat.name}</Typography>
              <KeyboardArrowDownIcon className={classes.downIcon} />
            </div>
          ))}

          <div className={classes.merchantLink}>
            <Link href="/about" replace>
              <a><Typography>Our Story</Typography></a></Link>
          </div>

          {/*
          <div className={classes.merchantLink}>
            <Link href="/listing?diamonds=inhouse"><Typography>IN-HOUSE DIAMONDS</Typography></Link>
          </div>

          <div className={classes.merchantLink} >
            <Typography>CATEGORIES</Typography>
          </div>

          <div className={classes.merchantLink} >
            <Typography>COLLECTIONS</Typography>
          </div>

          <div className={classes.merchantLink}>
            <Link href="/diamondsearch"><Typography>Diamond Search</Typography></Link>
          </div>
*/}


          <div className={classes.merchantLink}>
            <Link href="/diamondcompare">
              <a><Typography>Compare Diamonds</Typography></a>
            </Link>
          </div>

          {/*
          <div className={classes.merchantLink} >
            <Typography>Bespoke</Typography>
          </div>

          <div className={classes.merchantLink} >
            <Typography>Contact</Typography>
          </div>
          */}


          <div className={classes.merchantLink} >
            <Link href="/blog/diamond-blog1">
              <a><Typography>Blog</Typography></a>
            </Link>
          </div>

          {/*
          <Link href="/">
            <a>
              <Button color="primary" variant="contained" className={classes.saleButton}>
                Sale
              </Button>
            </a>
          </Link>          
          */}


          {/* Category Menu */}
          <CategoryMenu
            showCategoryMenu={showCategoryMenu}
            hideCategoryMenu={handleHideCategoryMenu}
            categoryId={categoryId}
          />

        </div>
      </div>

      {/* Cart Side Bar */}
      <CartSideBar />
    </nav>
  );
};

export default withStyles(styles)(NavBar);
