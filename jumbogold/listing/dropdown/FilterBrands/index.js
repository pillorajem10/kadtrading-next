import React, { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  Typography,
  MenuList,
  MenuItem,
  Checkbox,
} from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// utils
import { addPropToQuery } from 'utils/listing';

// picture
import expandIcon from 'public/assets/icons/expand.png';

// components
import EmptyFilter from '../../common/EmptyFilter';

// styling
import styles from './style';

const FilterBrands = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [showBrandsList, setShowBrandsList] = useState(false);
  const anchorRef = useRef();

  const handleToggleBrandsList = () =>
    setShowBrandsList((currentValue) => {
      return !currentValue;
    });

  const handleCloseBrandsList = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setShowBrandsList(false);
  };

  const handleSelectBrand = (selectedBrand) => {
    router.push({
      pathname,
      query: addPropToQuery('brands', selectedBrand, query),
    });
  };

  const renderBrands = useCallback(() => {
    let renderer = <Typography>Brands</Typography>;

    if (params.brands) {
      renderer = (
        <div className={classes.selectedTagWrapper}>
          {params.brands.map((brand, index) => (
            <div key={index} className={classes.selectedTag}>
              <Typography>{decodeURIComponent(brand)}</Typography>
            </div>
          ))}
        </div>
      );
    }

    return renderer;
  }, [params.brands]);

  return (
    <>
      <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterBrands}
        onClick={handleToggleBrandsList}
        style={{
          border: showBrandsList || params.brands ? '1px solid #000' : 'solid 1px #e4e4e4',
        }}
      >
        {renderBrands()}

        <img
          src={expandIcon}
          alt="expand icon"
          className={classes.expandIcon}
          style={{
            transform: showBrandsList ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      <Popper
        anchorEl={anchorRef.current}
        className={classes.popper}
        disablePortal
        keepMounted
        open={showBrandsList}
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
              <ClickAwayListener onClickAway={handleCloseBrandsList}>
                <MenuList className={classes.brandsListWrapper}>
                  {filter.Brand?.length === 0 ? (
                    <EmptyFilter />
                  ) : (
                    filter.Brand?.map((brand, index) => {
                      const isInclude = params.brands?.includes(encodeURIComponent(brand));

                      return (
                        <MenuItem
                          className={classes.menuItem}
                          key={index}
                          onClick={() => handleSelectBrand(brand)}
                        >
                          <Checkbox
                            checked={!!isInclude}
                            className={classes.checkbox}
                            disableRipple
                            color="primary"
                            size="small"
                          />
                          <Typography
                            style={{
                              color: isInclude ? '#000000' : 'rgba(0, 0, 0, 0.6)',
                              fontWeight: isInclude ? 500 : 'normal',
                            }}
                          >
                            {brand}
                          </Typography>
                        </MenuItem>
                      );
                    })
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

export default withStyles(styles)(FilterBrands);
