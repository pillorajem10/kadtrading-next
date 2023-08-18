import React, { useState } from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Slide, Dialog, InputBase, Typography, Button } from '@material-ui/core';

// Picture
import searchIcon from 'public/assets/icons/grey-search.svg';
import closeIcon from 'public/assets/icons/grey-clear.svg';

// redux
import { useDispatch } from 'react-redux';
import { listing } from 'redux/actions';

// Styling
import styles from './style';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="top" ref={ref} {...props} />;
});

const MobileSearchMenu = ({ classes, showMobileSearchMenu, hideMobileSearchMenu }) => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState({});

  const handleCloseSearchMenu = () => {
    setSearchValue('');
    setSearchResult({});
    hideMobileSearchMenu();
  };

  const handleElasticSearch = async (keyword) => {
    const res = await dispatch(listing.getElasticSearchKeyword(keyword));
    const { success, data } = res;

    if (success) {
      setSearchResult(data);
    }
  };

  const handleSetKeyword = (event) => {
    event.persist();

    const keyword = event.target.value;

    setSearchValue(keyword);

    if (keyword === '') {
      setSearchResult({});
    } else {
      handleElasticSearch(keyword);
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      const keyword = event.target.value;

      handleCloseSearchMenu();

      Router.push({
        pathname: '/listing',
        query: { keyword },
      });
    }
  };

  const handleConvertEmToSpan = (value) => {
    const textDict = {
      '<em>': '<span>',
      '</em>': '</span>',
    };
    return value.replace(/<em>|<\/em>/gi, (match) => textDict[match]);
  };

  const handleGoProduct = (productId) => {
    handleCloseSearchMenu();

    Router.push('/product/[productId]', `/product/${productId}`);
  };

  const handleViewAllProducts = () => {
    handleCloseSearchMenu();

    Router.push({
      pathname: '/listing',
      query: { keyword: searchValue },
    });
  };

  const handleGoCategory = async (categoryId) => {
    Router.push({
      pathname: '/listing',
      query: { categoryIds: categoryId },
    });
  };

  const handleGoMerchant = (merchantId) => {
    handleCloseSearchMenu();

    Router.push({
      pathname: '/merchant',
      query: {
        merchantIds: merchantId,
      },
    });
  };

  return (
    <Dialog
      classes={{
        root: classes.root,
        paper: classes.paper,
      }}
      fullScreen
      open={showMobileSearchMenu}
      onClose={handleCloseSearchMenu}
      TransitionComponent={Transition}
    >
      <div>
        <div className={classes.searchContainer}>
          <img src={searchIcon} alt="search icon" />

          <InputBase
            autoFocus
            placeholder="What are you looking for?"
            className={classes.searchInput}
            onChange={handleSetKeyword}
            onKeyDown={handleKeyDown}
          />

          <img
            src={closeIcon}
            alt="close icon"
            style={{ paddingTop: 2 }}
            onClick={handleCloseSearchMenu}
          />
        </div>

        {Object.keys(searchResult).length > 0 && (
          <div className={classes.searchResultContainer}>
            <div className={classes.productContainer}>
              <Typography className={classes.productHeader}>Products</Typography>

              {searchResult.products.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  className={classes.productItem}
                  onClick={() => handleGoProduct(item.id)}
                >
                  <img src={item.image} alt="" />
                  <Typography
                    dangerouslySetInnerHTML={{
                      __html: handleConvertEmToSpan(item.name),
                    }}
                  />
                </div>
              ))}

              <Button
                className={classes.viewAllProductsButton}
                variant="outlined"
                onClick={handleViewAllProducts}
              >
                View All Products
              </Button>
            </div>

            <div className={classes.categoryContainer}>
              <Typography className={classes.categoryHeader}>Categories</Typography>

              {searchResult.categories.map((category) => (
                <div
                  key={category.id}
                  className={classes.categoryItem}
                  onClick={() => handleGoCategory(category.id)}
                >
                  <Typography
                    dangerouslySetInnerHTML={{
                      __html: handleConvertEmToSpan(category.name),
                    }}
                  />
                </div>
              ))}

              {searchResult?.merchants?.length === 0 && (
                <div>
                  <Typography className={classes.noResults}>No results</Typography>
                </div>
              )}
            </div>

            <div className={classes.merchantContainer}>
              <Typography className={classes.categoryHeader}>Merchants</Typography>

              {searchResult.merchants.map((merchant) => (
                <div
                  key={merchant.id}
                  className={classes.merchantItem}
                  onClick={() => handleGoMerchant(merchant.id)}
                >
                  <Typography
                    dangerouslySetInnerHTML={{
                      __html: handleConvertEmToSpan(merchant.name),
                    }}
                  />
                </div>
              ))}

              {searchResult?.merchants?.length === 0 && (
                <div>
                  <Typography className={classes.noResults}>No results</Typography>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Dialog>
  );
};

export default withStyles(styles)(MobileSearchMenu);
