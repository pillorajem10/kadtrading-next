import React, { useState, useRef, useMemo } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  Typography,
  MenuItem,
  MenuList,
} from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// picture
import expandIcon from 'public/assets/icons/expand.png';

// components
import EmptyFilter from '../../common/EmptyFilter';

// styling
import styles from './style';

const FilterCategory = ({ classes }) => {
  const {
    product: { categoryList },
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [showCategoryList, setShowCategoryList] = useState(false);
  const anchorRef = useRef();

  const handleToggleCategoryList = () =>
    setShowCategoryList((currentValue) => {
      return !currentValue;
    });

  const handleCloseCategoryList = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setShowCategoryList(false);
  };

  const handleSelectCategory = (id) => {
    router.push({
      pathname,
      query: {
        ...query,
        c3: id,
      },
    });
  };

  const catList = useMemo(() => {
    let list = [];

    if (params.c1 && params.c2) {
      list = categoryList
        .find((cat1) => cat1.id === params.c1)
        ?.categories.find((cat2) => cat2.id === params.c2).categories;
    }

    return list;
  }, [params.c1, params.c2, categoryList]);

  const level2 = categoryList.reduce((pre, cur) => {
    return [...pre, ...cur.categories];
  }, []);

  const level3 = level2.reduce((pre, cur) => {
    return [...pre, ...cur.categories];
  }, []);

  return (
    <>
      <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterCategory}
        onClick={handleToggleCategoryList}
        style={{
          border: showCategoryList || params.c3 ? '1px solid #000' : 'solid 1px #e4e4e4',
        }}
      >
        <Typography>
          {params.c3 === undefined
            ? 'Categories'
            : level3?.find((cat) => cat.id === params.c3)?.name}
        </Typography>

        <img
          src={expandIcon}
          alt="expand icon"
          className={classes.expandIcon}
          style={{
            transform: showCategoryList ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      <Popper
        anchorEl={anchorRef.current}
        className={classes.popper}
        disablePortal
        keepMounted
        open={showCategoryList}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper id="menu-list-grow" className={classes.menuWrapper}>
              <ClickAwayListener onClickAway={handleCloseCategoryList}>
                <MenuList className={classes.categoryListWrapper}>
                  {catList?.length === 0 ? (
                    <EmptyFilter />
                  ) : (
                    catList?.map(({ id, name }) => (
                      <MenuItem
                        className={classes.menuItem}
                        key={id}
                        onClick={() => handleSelectCategory(id)}
                      >
                        <Typography>{name}</Typography>
                      </MenuItem>
                    ))
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default withStyles(styles)(FilterCategory);
