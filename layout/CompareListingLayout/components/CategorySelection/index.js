import React, { Fragment, useState, useRef } from 'react';
import Router from 'next/router';

// MUI Stuff
import {
  withStyles,
  Button,
  ClickAwayListener,
  Dialog,
  FormControlLabel,
  Grow,
  Hidden,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Radio,
  RadioGroup,
} from '@material-ui/core';

// MUI Icons
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

// redux
import { useSelector } from 'react-redux';

// styling
import styles from './style';

const CategorySelection = ({ classes }) => {
  const {
    product: { categoryList },
    listing: { params },
  } = useSelector((state) => state);

  const [showCategoryList, setShowCategoryList] = useState(false);
  const anchorRef = useRef();

  const handleShowCategoryList = () =>
    setShowCategoryList((currentValue) => {
      return !currentValue;
    });

  const handleCloseCategoryList = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setShowCategoryList(false);
  };

  const handleSelectCategory = (event, category) => {
    Router.push({
      pathname: '/products',
      query: {
        c1: category.parentId,
        c2: category.id,
      },
    });

    handleCloseCategoryList(event);
  };

  const level2List = categoryList.find((item) => item.id === params.c1)?.categories;

  const level2 = level2List?.find((item) => item.id === params.c2);

  if (!level2) return null;

  return (
    <>
      <Button
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.categoryButton}
        disableRipple
        onClick={handleShowCategoryList}
      >
        {level2.name}

        <KeyboardArrowDownIcon className={classes.arrowIcon} />
      </Button>

      {/* Desktop Category List */}
      <Hidden xsDown>
        <Popper
          anchorEl={anchorRef.current}
          className={classes.popper}
          disablePortal
          keepMounted
          open={showCategoryList}
          transition
          placement="bottom-start"
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom-start' ? 'center top' : 'center bottom',
              }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleCloseCategoryList}>
                  <MenuList className={classes.menuList}>
                    {level2List
                      .filter((cat2) => cat2.id !== params.c2)
                      .map((cat, index) => (
                        <MenuItem
                          className={classes.menuItem}
                          key={index}
                          onClick={(event) => handleSelectCategory(event, cat)}
                          value={cat.id}
                        >
                          {cat.name.toUpperCase()}
                        </MenuItem>
                      ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Hidden>

      {/* Mobile Category List */}
      <Hidden smUp>
        <Dialog onClose={handleCloseCategoryList} open={showCategoryList}>
          <RadioGroup
            aria-label="select sort by"
            name="selectSortBy"
            className={classes.radioGroup}
            value={level2.id}
          >
            {level2List.map((cat, index) => (
              <FormControlLabel
                className={classes.radioLabel}
                control={<Radio className={classes.radio} color="primary" />}
                key={index}
                label={cat.name.toUpperCase()}
                labelPlacement="start"
                value={cat.id}
                onClick={(event) => handleSelectCategory(event, cat)}
              />
            ))}
          </RadioGroup>
        </Dialog>
      </Hidden>
    </>
  );
};

export default withStyles(styles)(CategorySelection);
