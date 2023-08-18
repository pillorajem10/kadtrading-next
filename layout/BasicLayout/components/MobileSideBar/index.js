import React, { useEffect, useState } from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Slide, Dialog, Typography, MenuList, MenuItem } from '@material-ui/core';

// MUI Icons
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

// Pictures
import closeIcon from 'public/assets/icons/black-clear.svg';
import saleIcon from 'public/assets/icons/discount.png';
import merchantIcon from 'public/assets/icons/shop.png';
import expandIcon from 'public/assets/icons/expand-more.svg';
import wizzoMobileSideBar from 'public/assets/images/wizzo/mobile_nav_menu.png';

// Redux
import { useSelector } from 'react-redux';
import { user } from 'redux/actions';

// Styling
import styles from './style';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const MobileSideBar = ({ classes, showMobileSideBar, hideMobileSideBar }) => {
  const {
    product: { categoryList },
    user: { authenticated, account },
  } = useSelector((state) => state);

  const [category, setCategory] = useState({});
  const [categoryItem, setCategoryItem] = useState({});
  const [showLevel1Modal, setShowLevel1Modal] = useState(false);

  useEffect(() => {
    if (categoryList) {
      setCategory(categoryList[0]);
      setCategoryItem(categoryList[0]?.categories[0]);
    }
  }, [categoryList]);

  const handleSetCategoryItem = (item) => setCategoryItem(item);

  const handleGoAnotherPage = (link) => {
    hideMobileSideBar();

    Router.push(link);
  };

  const handleGoSalesPage = () => {
    hideMobileSideBar();

    Router.push({
      pathname: '/listing',
      query: { sale: true },
    });
  };

  const handleShowLevel1Modal = () => setShowLevel1Modal(true);

  const handleHideLevel1Modal = () => setShowLevel1Modal(false);

  const handleSetCategory = (cat) => {
    setCategory(cat);
    setCategoryItem(cat.categories[0]);

    handleHideLevel1Modal();
  };

  const handleGoParentCategoryListingPage = (v) => {
    hideMobileSideBar();
    let categoryType = 'product';

    if (v.name.toLowerCase().indexOf('global diamond') > -1) {
      categoryType = 'globald';
    }

    if (v.name.toLowerCase().indexOf('in house diamond') > -1) {
      categoryType = 'inhouse';
    }

    if (v.name.toLowerCase().indexOf('in house gemstone') > -1) {
      categoryType = 'gemstone';
    }

    Router.push({
      pathname: '/products',
      query: {
        c1: v.parentId,
        c2: v.id,
        type: categoryType,
      },
    });
  };

  const handleGoCategoryListingPage = (id) => {
    hideMobileSideBar();

    Router.push({
      pathname: '/products',
      query: {
        c1: categoryItem.parentId,
        c2: categoryItem.id,
        c3: id,
        type: 'product',
      },
    });
  };

  if (categoryList.length === 0) return null;

  return (
    <Dialog
      classes={{
        root: classes.root,
        paper: classes.paper,
      }}
      fullScreen
      open={showMobileSideBar}
      onClose={hideMobileSideBar}
      TransitionComponent={Transition}
    >
      <div className={classes.container}>
        <div className={classes.closeIconContainer}>
          <img src={closeIcon} alt="close icon" onClick={hideMobileSideBar} />
        </div>

        {!authenticated ? (
          <div className={classes.userContainer}>
            <PersonOutlineIcon />

            <Typography onClick={() => handleGoAnotherPage('/login')}>
              Log in / New Account
            </Typography>
          </div>
        ) : (
          <div className={classes.loginUserContainer}>
            <div className={classes.usernameContainer}>
              <PersonOutlineIcon />

              <Typography>
                Hello {account.firstName} {account.lastName}
              </Typography>
            </div>

            <div className={classes.userLinkContainer}>
              <div onClick={() => handleGoAnotherPage('/user/profile')}>
                <Typography>Manage account</Typography>
              </div>

              <div onClick={() => handleGoAnotherPage('/user/transaction')}>
                <Typography>Transaction History</Typography>
              </div>

              <div
                onClick={() => {
                  user.userLogout();
                  hideMobileSideBar();
                }}
              >
                <Typography>LOG OUT</Typography>
              </div>
            </div>
          </div>
        )}


        {/*
        <div className={classes.menuContainer}>
          <div onClick={handleGoSalesPage}>
            <img src={saleIcon} alt="sale icon" />
            <Typography>Sales</Typography>
          </div>

          <div onClick={() => handleGoAnotherPage('/merchants')}>
            <img src={merchantIcon} alt="merchant icon" />
            <Typography>Merchant</Typography>
          </div>          
        </div>
        */}



        {category && categoryItem && (
          <div className={classes.categoryContainer}>
            <div className={classes.categoryHeader} onClick={handleShowLevel1Modal}>
              <Typography>{category.name}</Typography>
              <img src={expandIcon} alt="expand icon" />
            </div>

            <div className={classes.categoryInnerContainer}>
              <div className={classes.categoryListContainer}>
                {category.categories?.map((cat) => (
                  <div
                    key={cat.id}
                    className={
                      cat.id === categoryItem.id
                        ? classes.categoryListActiveItem
                        : classes.categoryListItem
                    }
                    onClick={() => {
                      if (cat.categories.length > 0) {
                        handleSetCategoryItem(cat);
                      } else {
                        handleGoParentCategoryListingPage(cat);                     
                      }
                    }}
                  >
                    <Typography>{cat.name}</Typography>

                    {cat.id === categoryItem.id && <div className={classes.activeDot} />}
                  </div>
                ))}
              </div>

              {(categoryItem.categories && categoryItem.categories.length > 0) &&
                <div className={classes.categoryChildListContainer}>
                  {categoryItem.categories?.map((cat) => (
                    <div key={cat.id} onClick={() => handleGoCategoryListingPage(cat.id)}>
                      <img src={cat.image} alt="" />
                      <Typography>{cat.name}</Typography>
                    </div>
                  ))}
                </div>              
              }

            </div>
          </div>
        )}

        <div className={classes.linkList}>
          <Typography className={classes.linkListHeader}>Jumbo Gold and Diamonds</Typography>

          <div className={classes.linkItem} onClick={() => handleGoAnotherPage('/about')}>
            <Typography>About Jumbo Gold and Diamonds</Typography>
          </div>

          {/*
          <div className={classes.linkItem} onClick={() => handleGoAnotherPage('/board')}>
            <Typography>Get on board</Typography>
          </div>

          <div className={classes.linkItem} onClick={() => handleGoAnotherPage('/faq')}>
            <Typography>FAQ | Order & Delivery</Typography>
          </div>          
          */}


          <div className={classes.linkItem} onClick={() => handleGoAnotherPage('/terms')}>
            <Typography>Terms of use</Typography>
          </div>

          <div className={classes.linkItem} onClick={() => handleGoAnotherPage('/privacy')}>
            <Typography>Privacy policy</Typography>
          </div>

          <div className={classes.linkItem} onClick={() => handleGoAnotherPage('/contact')}>
            <Typography>Contact us</Typography>
          </div>

          <img src={wizzoMobileSideBar} className={classes.wizzo} alt="" />
        </div>

        <Dialog fullWidth maxWidth="md" onClose={handleHideLevel1Modal} open={showLevel1Modal}>
          <MenuList>
            {categoryList.map((productCat) => (
              <MenuItem
                className={classes.menuItem}
                key={productCat.id}
                onClick={() => handleSetCategory(productCat)}
              >
                {productCat.name}
              </MenuItem>
            ))}
          </MenuList>
        </Dialog>
      </div>
    </Dialog>
  );
};

export default withStyles(styles)(MobileSideBar);
