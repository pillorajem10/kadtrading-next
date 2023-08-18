import React, { useState, useRef, Fragment, useEffect } from 'react';

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

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { transaction } from 'redux/actions';

// Picture
import expandIcon from 'public/assets/icons/grey-expand.svg';

// Styling
import styles from './style';

const FilterPageSize = ({ classes }) => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.transaction);

  const [selected, setSelected] = useState('');
  const [showPageSizeList, setShowPageSizeList] = useState(false);
  const anchorRef = useRef();

  useEffect(() => {
    setSelected(filter.pageSize);
  }, [filter.pageSize]);

  const handleTogglePageSizeList = () =>
    setShowPageSizeList((currentValue) => {
      return !currentValue;
    });

  const handleClosePageSizeList = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setShowPageSizeList(false);
  };

  const handleSelectPageSize = (event, selectedPageSize) => {
    dispatch(transaction.updateTransactionFilter({ pageSize: selectedPageSize }));
    handleClosePageSizeList(event);
  };

  const handleRenderSelectedResult = () => {
    let renderer = <Typography className={classes.filterPageSizeText}>Default</Typography>;

    if (selected === 30)
      renderer = <Typography className={classes.filterPageSizeText}>30</Typography>;

    if (selected === 60)
      renderer = <Typography className={classes.filterPageSizeText}>60</Typography>;

    if (selected === 90)
      renderer = <Typography className={classes.filterPageSizeText}>90</Typography>;

    if (selected === 1000)
      renderer = <Typography className={classes.filterPageSizeText}>All</Typography>;

    return renderer;
  };

  return (
    <Fragment>
      <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterPageSize}
        onClick={handleTogglePageSizeList}
      >
        {handleRenderSelectedResult()}

        <img
          src={expandIcon}
          alt="expand icon"
          className={classes.filterPageSizeIcon}
          style={{
            transform: showPageSizeList ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      <Popper
        anchorEl={anchorRef.current}
        className={classes.popper}
        disablePortal
        keepMounted
        open={showPageSizeList}
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
              <ClickAwayListener onClickAway={handleClosePageSizeList}>
                <MenuList className={classes.menuList}>
                  <MenuItem
                    className={classes.menuItem}
                    onClick={(event) => handleSelectPageSize(event, 30)}
                  >
                    <Typography>30</Typography>
                  </MenuItem>
                  <MenuItem
                    className={classes.menuItem}
                    onClick={(event) => handleSelectPageSize(event, 60)}
                  >
                    <Typography>60</Typography>
                  </MenuItem>
                  <MenuItem
                    className={classes.menuItem}
                    onClick={(event) => handleSelectPageSize(event, 90)}
                  >
                    <Typography>90</Typography>
                  </MenuItem>

                  <MenuItem
                    className={classes.menuItem}
                    onClick={(event) => handleSelectPageSize(event, 1000)}
                  >
                    <Typography>All</Typography>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );
};

export default withStyles(styles)(FilterPageSize);
