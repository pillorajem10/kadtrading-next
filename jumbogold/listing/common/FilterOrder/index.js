import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// picture
import expandIcon from 'public/assets/icons/grey-expand.svg';

// styling
import styles from './style';

const FilterOrder = ({ classes }) => {
  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [selected, setSelected] = useState('');
  const [showOrderList, setShowOrderList] = useState(false);
  const anchorRef = useRef();

  useEffect(() => {
    if (params.sort_by && params.sort_direction) {
      setSelected(`${params.sort_by} ${params.sort_direction}`);
    } else {
      setSelected('');
    }
  }, [params.sort_by, params.sort_direction]);

  const handleToggleOrderList = () =>
    setShowOrderList((currentValue) => {
      return !currentValue;
    });

  const handleCloseOrderList = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setShowOrderList(false);
  };

  const handleSelectOrder = (event, sortBy, sortOrder) => {
    router.push({
      pathname,
      query: {
        ...query,
        sort_by: sortBy,
        sort_direction: sortOrder,
      },
    });
  };

  const handleRenderSelectedResult = () => {
    let renderer = <Typography className={classes.filterOrderText}>Default</Typography>;

    if (selected === 'Size Asc')
      renderer = <Typography className={classes.filterOrderText}>Name: Ascending</Typography>;

    if (selected === 'Weight Asc')
      renderer = <Typography className={classes.filterOrderText}>Name: Ascending</Typography>;

    if (selected === 'name Asc')
      renderer = <Typography className={classes.filterOrderText}>Name: Ascending</Typography>;



    if (selected === 'Size Desc')
      renderer = <Typography className={classes.filterOrderText}>Name: Descending</Typography>;

    if (selected === 'Weight Desc')
      renderer = <Typography className={classes.filterOrderText}>Name: Descending</Typography>;

    if (selected === 'name Desc')
      renderer = <Typography className={classes.filterOrderText}>Name: Descending</Typography>;



    if (selected === 'Price Asc')
      renderer = <Typography className={classes.filterOrderText}>Price: Low - High</Typography>;

    if (selected === 'Inhouse%20Price Asc')
      renderer = <Typography className={classes.filterOrderText}>Price: Low - High</Typography>;

    if (selected === 'retailPrice Asc')
      renderer = <Typography className={classes.filterOrderText}>Price: Low - High</Typography>;



    if (selected === 'Price Desc')
      renderer = <Typography className={classes.filterOrderText}>Price: High - Low</Typography>;

    if (selected === 'Inhouse%20Price Desc')
      renderer = <Typography className={classes.filterOrderText}>Price: High - Low</Typography>;

    if (selected === 'retailPrice Desc')
      renderer = <Typography className={classes.filterOrderText}>Price: High - Low</Typography>;


    return renderer;
  };

  return (
    <>
      <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterOrder}
        onClick={handleToggleOrderList}
      >
        {handleRenderSelectedResult()}

        <img
          src={expandIcon}
          alt="expand icon"
          className={classes.filterOrderIcon}
          style={{
            transform: showOrderList ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      <Popper
        anchorEl={anchorRef.current}
        className={classes.popper}
        disablePortal
        keepMounted
        open={showOrderList}
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
              <ClickAwayListener onClickAway={handleCloseOrderList}>
                <MenuList className={classes.menuList}>
                  { query.type === "globald" && (
                    <div>
                      <MenuItem
                        className={classes.menuItem}
                        onClick={(event) => handleSelectOrder(event, 'Size', 'Asc')}
                      >
                        <Typography>Name: Ascending</Typography>
                      </MenuItem>
                      <MenuItem
                        className={classes.menuItem}
                        onClick={(event) => handleSelectOrder(event, 'Size', 'Desc')}
                      >
                        <Typography>Name: Descending</Typography>
                      </MenuItem>
                      <MenuItem
                        className={classes.menuItem}
                        onClick={(event) => handleSelectOrder(event, 'Price', 'Asc')}
                      >
                        <Typography>Price: Low - High</Typography>
                      </MenuItem>
                      <MenuItem
                        className={classes.menuItem}
                        onClick={(event) => handleSelectOrder(event, 'Price', 'Desc')}
                      >
                        <Typography>Price: High - Low</Typography>
                      </MenuItem>
                    </div>
                  )}

                  { query.type === "inhouse" && (
                    <div>
                      <MenuItem
                        className={classes.menuItem}
                        onClick={(event) => handleSelectOrder(event, 'Weight', 'Asc')}
                      >
                        <Typography>Name: Ascending</Typography>
                      </MenuItem>
                      <MenuItem
                        className={classes.menuItem}
                        onClick={(event) => handleSelectOrder(event, 'Weight', 'Desc')}
                      >
                        <Typography>Name: Descending</Typography>
                      </MenuItem>
                      <MenuItem
                        className={classes.menuItem}
                        onClick={(event) => handleSelectOrder(event, 'Inhouse Price', 'Asc')}
                      >
                        <Typography>Price: Low - High</Typography>
                      </MenuItem>
                      <MenuItem
                        className={classes.menuItem}
                        onClick={(event) => handleSelectOrder(event, 'Inhouse Price', 'Desc')}
                      >
                        <Typography>Price: High - Low</Typography>
                      </MenuItem>
                    </div>
                  )}

                  { query.type === "product" && (
                    <div>
                      <MenuItem
                        className={classes.menuItem}
                        onClick={(event) => handleSelectOrder(event, 'name', 'Asc')}
                      >
                        <Typography>Name: Ascending</Typography>
                      </MenuItem>
                      <MenuItem
                        className={classes.menuItem}
                        onClick={(event) => handleSelectOrder(event, 'name', 'Desc')}
                      >
                        <Typography>Name: Descending</Typography>
                      </MenuItem>
                      <MenuItem
                        className={classes.menuItem}
                        onClick={(event) => handleSelectOrder(event, 'retailPrice', 'Asc')}
                      >
                        <Typography>Price: Low - High</Typography>
                      </MenuItem>
                      <MenuItem
                        className={classes.menuItem}
                        onClick={(event) => handleSelectOrder(event, 'retailPrice', 'Desc')}
                      >
                        <Typography>Price: High - Low</Typography>
                      </MenuItem>
                    </div>
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

export default withStyles(styles)(FilterOrder);
