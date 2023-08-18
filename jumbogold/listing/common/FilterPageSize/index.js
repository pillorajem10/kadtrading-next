import React, { useState, useRef, useEffect } from 'react';

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

// picture
import expandIcon from 'public/assets/icons/grey-expand.svg';

// styling
import styles from './style';

const FilterPageSize = ({ classes, pageSize, setPageSize }) => {
  const [selected, setSelected] = useState('');
  const [showPageSizeList, setShowPageSizeList] = useState(false);
  const anchorRef = useRef();

  useEffect(() => {
    if (pageSize) {
      setSelected(pageSize);
    }
  }, [pageSize]);

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
    setPageSize(selectedPageSize);

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

    return renderer;
  };

  return (
    <>
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
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default withStyles(styles)(FilterPageSize);
