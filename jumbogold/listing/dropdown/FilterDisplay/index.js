import React, { useState, useRef, useEffect } from 'react';
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

// styling
import styles from './style';

const FilterCategory = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [selectedList, setSelectedList] = useState([]);
  const [showDisplayList, setShowDisplayList] = useState(false);
  const anchorRef = useRef();

  useEffect(() => {
    const { featured, enable3D, sale } = params;

    setSelectedList([]);

    if (featured)
      setSelectedList((currentValue) => {
        return [...currentValue, 'Featured'];
      });

    if (enable3D)
      setSelectedList((currentValue) => {
        return [...currentValue, '3D'];
      });

    if (sale)
      setSelectedList((currentValue) => {
        return [...currentValue, 'Sale'];
      });
  }, [params]);

  const handleToggleDisplayList = () =>
    setShowDisplayList((currentValue) => {
      return !currentValue;
    });

  const handleCloseDisplayList = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setShowDisplayList(false);
  };

  const processDisplayKey = (display) => {
    let displayKey = '';

    if (display === 'Sale') displayKey = 'sale';

    if (display === 'Featured') displayKey = 'featured';

    if (display === '3D') displayKey = 'enable3D';

    return displayKey;
  };

  const handleSelectDisplay = (key) => {
    const display = processDisplayKey(key);

    router.push({
      pathname,
      query: addPropToQuery(display, 'true', query),
    });
  };

  const handleRenderSelectedResult = () => {
    let renderer = <Typography>Display</Typography>;

    if (selectedList.length === 1) {
      renderer = <Typography>{selectedList[0]}</Typography>;
    }

    if (selectedList.length > 1) {
      renderer = (
        <div className={classes.selectedTagWrapper}>
          {selectedList.map((display, index) => (
            <div key={index} className={classes.selectedTag}>
              <Typography>{display}</Typography>
            </div>
          ))}
        </div>
      );
    }

    return renderer;
  };

  return (
    <>
      <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterDisplay}
        onClick={handleToggleDisplayList}
        style={{
          border:
            showDisplayList || selectedList.length !== 0
              ? '1px solid #000'
              : '1px solid #e4e4e4',
        }}
      >
        {handleRenderSelectedResult()}

        <img
          src={expandIcon}
          alt="expand icon"
          className={classes.expandIcon}
          style={{
            transform: showDisplayList ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      <Popper
        anchorEl={anchorRef.current}
        className={classes.popper}
        disablePortal
        keepMounted
        open={showDisplayList}
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
              <ClickAwayListener onClickAway={handleCloseDisplayList}>
                <MenuList className={classes.displayListWrapper}>
                  <MenuItem className={classes.menuItem} onClick={() => handleSelectDisplay('3D')}>
                    <Checkbox
                      checked={!!params.enable3D}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                      style={{
                        color: params.enable3D ? '#000000' : 'rgba(0, 0, 0, 0.6)',
                        fontWeight: params.enable3D ? 500 : 'normal',
                      }}
                    >
                      3D
                    </Typography>
                  </MenuItem>

                  {filter.Display?.map((display, index) => (
                    <MenuItem
                      className={classes.menuItem}
                      key={index}
                      onClick={() => handleSelectDisplay(display)}
                    >
                      <Checkbox
                        checked={!!params[processDisplayKey(display)]}
                        className={classes.checkbox}
                        disableRipple
                        color="primary"
                        size="small"
                      />
                      <Typography
                        style={{
                          color: params[processDisplayKey(display)]
                            ? '#000000'
                            : 'rgba(0, 0, 0, 0.6)',
                          fontWeight: params[processDisplayKey(display)] ? 500 : 'normal',
                        }}
                      >
                        {display}
                      </Typography>
                    </MenuItem>
                  ))}
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
