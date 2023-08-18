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
  Checkbox,
  MenuItem,
  MenuList,
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

const FilterStyles = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [showStylesList, setShowStylesList] = useState(false);
  const anchorRef = useRef();

  const handleToggleStylesList = () =>
    setShowStylesList((currentValue) => {
      return !currentValue;
    });

  const handleCloseStylesList = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setShowStylesList(false);
  };

  const handleSelectStyle = (selectedStyle) => {
    router.push({
      pathname,
      query: addPropToQuery('styles', selectedStyle, query),
    });
  };

  const renderStyles = useCallback(() => {
    let renderer = <Typography>Styles</Typography>;

    if (params.styles) {
      renderer = (
        <div className={classes.selectedTagWrapper}>
          {params.styles.map((item, index) => (
            <div key={index} className={classes.selectedTag}>
              <Typography>{decodeURIComponent(item)}</Typography>
            </div>
          ))}
        </div>
      );
    }

    return renderer;
  }, [params.styles]);

  return (
    <>
      <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterStyles}
        onClick={handleToggleStylesList}
        style={{
          border: showStylesList || params.styles ? '1px solid #000' : '1px solid #e4e4e4',
        }}
      >
        {renderStyles()}

        <img
          src={expandIcon}
          alt="expand icon"
          className={classes.expandIcon}
          style={{
            transform: showStylesList ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      <Popper
        anchorEl={anchorRef.current}
        className={classes.popper}
        disablePortal
        keepMounted
        open={showStylesList}
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
              <ClickAwayListener onClickAway={handleCloseStylesList}>
                <MenuList className={classes.stylesListWrapper}>
                  {filter.Styles?.length === 0 ? (
                    <EmptyFilter />
                  ) : (
                    filter.Styles?.map((item, index) => {
                      const isInclude = params.styles?.includes(encodeURIComponent(item));

                      return (
                        <MenuItem
                          className={classes.menuItem}
                          key={index}
                          onClick={() => handleSelectStyle(item)}
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
                            {item}
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

export default withStyles(styles)(FilterStyles);
