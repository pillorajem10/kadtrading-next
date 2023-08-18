import React, { useMemo, useState, useEffect } from 'react';
import Router from 'next/router';

// MUI Stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// Styling
import styles from './style';

const CategoryMenu = ({ classes, showCategoryMenu, hideCategoryMenu, categoryId }) => {
  const { categoryList } = useSelector((state) => state.product);
  const { common: { currency }} = useSelector((state) => state);

  const [level2List, setLevel2List] = useState([]);
  const [level2Item, setLevel2Item] = useState({});
  const [level3Item, setLevel3Item] = useState({});

  useEffect(() => {
    const category = categoryList.find((cat) => cat.id === categoryId);

    if (category) {
      setLevel2Item(category.categories[0]);
    }
  }, [categoryList, categoryId]);

  useEffect(() => {
    const category = categoryList.find((cat) => cat.id === categoryId);

    if (category) {
      setLevel2List(category.categories);
    }
  }, [categoryList, categoryId]);

  const handleSetLevel2Item = (item) => setLevel2Item(item);

  const level3List = useMemo(() => {
    return level2List.find((cat) => cat.id === level2Item.id)?.categories;
  }, [level2Item, level2List]);

  const handleSetLevel3Item = (item) => setLevel3Item(item);

  const handleRemoveLevel3Item = () => setLevel3Item({});

  const handleGoParentCategoryListingPage = (v) => {
    hideCategoryMenu();
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
        c1: level2Item.parentId,
        c2: level2Item.id,
        type: categoryType,
        currency,
      },
    });
  };

  const handleGoCategoryListingPage = (v) => {
    hideCategoryMenu();
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
        c1: level2Item.parentId,
        c2: level2Item.id,
        c3: level3Item.id,
        type: categoryType,
        currency,
      },
    });
  };

  return (
    <div
      className={
        showCategoryMenu && categoryId.length !== 0
          ? classes.showCategoryMenu
          : classes.categoryMenu
      }
      onMouseLeave={hideCategoryMenu}
    >
      <div className={classes.categoryMenuContainer}>
        <div className={classes.level2MenuList}>
          {level2List.map((level2) => (
            <div
              key={level2.id}
              className={
                level2Item.id === level2.id ? classes.level2ActiveMenuItem : classes.level2MenuItem
              }
              onClick={() => handleSetLevel2Item(level2)}
            >
              <Typography>{level2.name}</Typography>
            </div>
          ))}
        </div>

        <div className={classes.level3MenuList}>
          <div className={classes.level3MenuItem} onClick={() => handleGoParentCategoryListingPage(level2Item)}>
            <Typography>All {level2Item.name}</Typography>
          </div>

          {level3List?.map((level3) => (
            <div
              key={level3.id}
              className={classes.level3MenuItem}
              onMouseOver={() => handleSetLevel3Item(level3)}
              onMouseLeave={handleRemoveLevel3Item}
              onFocus={() => null}
              onClick={() => handleGoCategoryListingPage(level3)}
            >
              <Typography>{level3.name}</Typography>
            </div>
          ))}
        </div>

        <Hidden mdDown>
          {level3Item?.image ? (
            <img src={level3Item.image} alt="" className={classes.level3Image} />
          ) : null}
        </Hidden>
      </div>
    </div>
  );
};

export default withStyles(styles)(CategoryMenu);
