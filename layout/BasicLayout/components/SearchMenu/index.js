import React, { useCallback, useEffect, useState } from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';

// MUI Stuff
import { withStyles, ClickAwayListener, Typography } from '@material-ui/core';

// components
import { Image } from 'jumbogold/common';

// Picture
import productCardSkeleton from 'public/assets/jumbo/about2.png';

// Styling
import styles from './style';

const SearchMenu = ({
  classes,
  searchValue,
  setSearchValue,
  showSearchMenu,
  hideSearchMenu,
  searchResult,
}) => {
  const getRecentSearch = Cookies.get('recent_search');

  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    setRecentSearches(
      getRecentSearch === undefined ? [] : JSON.parse(Cookies.get('recent_search')),
    );
  }, [getRecentSearch]);

  const handleGoKeywordListing = (keyword) => {
    hideSearchMenu();
    setSearchValue('');

    setTimeout(() => {
      Router.push({
        pathname: '/listing',
        query: { keyword },
      });
    }, 550);
  };

  const handleClearAllKeyword = () => {
    Cookies.remove('recent_search');
    setRecentSearches([]);
  };

  const handleGoProduct = (productId) => {
    hideSearchMenu();

    setTimeout(() => {
      Router.push('/product/[productId]', `/product/${productId}`);
    }, 550);
  };

  const handleGoCategory = async (categoryId) => {
    setTimeout(() => {
      Router.push({
        pathname: '/listing',
        query: { categoryIds: categoryId },
      });
    }, 550);
  };

  const handleGoMerchant = (merchantId) => {
    hideSearchMenu();
    setTimeout(() => {
      Router.push({
        pathname: '/merchant',
        query: {
          merchantIds: merchantId,
        },
      });
    }, 550);
  };

  const handleViewAllProducts = () => {
    hideSearchMenu();

    setTimeout(() => {
      Router.push({
        pathname: '/listing',
        query: { keyword: searchValue },
      });
    }, 550);
  };

  const handleConvertEmToSpan = (value) => {
    const textDict = {
      '<em>': '<span>',
      '</em>': '</span>',
    };
    return value.replace(/<em>|<\/em>/gi, (match) => textDict[match]);
  };

  const handleSearchMenuHeight = useCallback(() => {
    let height = 0;

    const { categories, merchants } = searchResult;

    if (showSearchMenu && searchValue.length > 0 && categories?.length > 3 && merchants?.length > 3)
      height = 590;

    if (showSearchMenu && searchValue.length > 0 && categories?.length < 4 && merchants?.length > 3)
      height = 535;

    if (showSearchMenu && searchValue.length > 0 && categories?.length > 3 && merchants?.length < 4)
      height = 535;

    if (showSearchMenu && searchValue.length > 0 && categories?.length < 4 && merchants?.length < 4)
      height = 510;

    return height;
  }, [showSearchMenu, searchValue.length, searchResult]);

  return (
    <ClickAwayListener onClickAway={hideSearchMenu}>
      <div
        className={
          showSearchMenu && searchValue.length > 0 ? classes.showSearchMenu : classes.searchMenu
        }
        style={{
          height: handleSearchMenuHeight(),
        }}
        onMouseLeave={hideSearchMenu}
      >
        <div className={classes.searchMenuContainer}>
          {/* Recent Searches */}
          <div className={classes.recentSearchContainer}>
            <Typography>Recent searches: </Typography>
            {recentSearches.map((keyword, index) => (
              <Typography
                className={classes.recentText}
                key={index}
                onClick={() => handleGoKeywordListing(keyword)}
              >
                {recentSearches.length - 1 === index ? keyword : `${keyword}, `}
              </Typography>
            ))}
          </div>

          {/* Your Search History */}
          <div className={classes.clearSearchHistory}>
            <Typography>Your search history</Typography>
            <Typography onClick={handleClearAllKeyword}>CLEAR</Typography>
          </div>

          {Object.keys(searchResult).length > 0 && (
            <>
              {/* Product List */}
              <div className={classes.productContainer}>
                <Typography className={classes.productHeader}>Products</Typography>

                <div className={classes.gridContainer}>
                  {searchResult.products.slice(0, 6).map((item) => (
                    <div key={item.id} onClick={() => handleGoProduct(item.id)}>
                      <Image src={item.image || productCardSkeleton} alt="" />
                      <Typography
                        dangerouslySetInnerHTML={{
                          __html: handleConvertEmToSpan(item.name),
                        }}
                      />
                    </div>
                  ))}
                </div>

                <Typography className={classes.viewAllProducts} onClick={handleViewAllProducts}>
                  view all products
                </Typography>
              </div>

              <div className={classes.divider} />

              {/* Category List */}
              <div className={classes.categoryContainer}>
                <Typography className={classes.categoryHeader}>Categories</Typography>

                <div className={classes.gridContainer}>
                  {searchResult.categories.map((category) => (
                    <div key={category.id} onClick={() => handleGoCategory(category.id)}>
                      <Typography
                        dangerouslySetInnerHTML={{
                          __html: handleConvertEmToSpan(category.name),
                        }}
                      />
                    </div>
                  ))}

                  {searchResult?.categories?.length === 0 && (
                    <div>
                      <Typography className={classes.noResults}>No results</Typography>
                    </div>
                  )}
                </div>
              </div>

              <div className={classes.divider} />

              {/* Merchant List */}
              <div className={classes.merchantContainer}>
                <Typography className={classes.merchantHeader}>Merchant</Typography>

                <div className={classes.gridContainer}>
                  {searchResult.merchants.map((merchant) => (
                    <div key={merchant.id} onClick={() => handleGoMerchant(merchant.id)}>
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
            </>
          )}
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default withStyles(styles)(SearchMenu);
