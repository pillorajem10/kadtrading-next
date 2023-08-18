import React, { useState, useRef, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  Typography,
  Tooltip,
} from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// picture
import expandIcon from 'public/assets/icons/expand.png';
import whiteCheckIcon from 'public/assets/icons/white-check.svg';
import blackCheckIcon from 'public/assets/icons/black-check.svg';

// utils
import { addPropToQuery } from 'utils/listing';
import { formatColorList } from 'utils/formatter';

// components
import EmptyFilter from '../../common/EmptyFilter';

// styling
import styles from './style';

const FilterColors = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [showColorList, setShowColorList] = useState(false);
  const anchorRef = useRef();

  const handleToggleColorList = () =>
    setShowColorList((currentValue) => {
      return !currentValue;
    });

  const handleCloseColorList = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setShowColorList(false);
  };

  const handleSelectColor = (selectedColor) => {
    router.push({
      pathname,
      query: addPropToQuery('colorGroups', selectedColor, query),
    });
  };

  const renderColorGroup = useCallback(() => {
    let colorGroup = <Typography>Colours</Typography>;

    if (params.colorGroups) {
      colorGroup = (
        <div className={classes.selectedTagWrapper}>
          {params.colorGroups?.map((color, index) => (
            <div key={index} className={classes.selectedTag}>
              <Typography>{decodeURIComponent(color)}</Typography>
            </div>
          ))}
        </div>
      );
    }

    return colorGroup;
  }, [params.colorGroups]);

  const colorList = useMemo(() => {
    return filter.ColorGroups && filter.ColorGroups.length > 0
      ? formatColorList(filter.ColorGroups)
      : [];
  }, [filter.ColorGroups]);

  return (
    <>
      <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterColors}
        onClick={handleToggleColorList}
        style={{
          border: showColorList || params.colorGroups ? '1px solid #000' : '1px solid #e4e4e4',
        }}
      >
        {renderColorGroup()}

        <img
          src={expandIcon}
          alt="expand icon"
          className={classes.expandIcon}
          style={{
            transform: showColorList ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      <Popper
        anchorEl={anchorRef.current}
        className={classes.popper}
        disablePortal
        keepMounted
        open={showColorList}
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
              <ClickAwayListener onClickAway={handleCloseColorList}>
                <div
                  className={classes.colorListWrapper}
                  style={{
                    display: colorList.length === 0 ? 'flex' : 'grid',
                    padding: colorList.length === 0 ? '9px 0' : 19,
                  }}
                >
                  {colorList.length === 0 ? (
                    <EmptyFilter />
                  ) : (
                    colorList.map((color, index) => (
                      <Tooltip
                        title={color.name}
                        placement="top"
                        key={index}
                        arrow
                        classes={{
                          tooltip: classes.tooltip,
                          arrow: classes.tooltipArrow,
                        }}
                      >
                        <div
                          className={classes.colorWrapper}
                          onClick={() => handleSelectColor(color.name)}
                        >
                          {color.code ? (
                            <div
                              className={classes.colorCode}
                              style={{
                                backgroundColor: color.code,
                                border:
                                  color.code === '#FFFFFF'
                                    ? '0.5px solid #d8d8d0'
                                    : '0.5px solid transparent',
                              }}
                            />
                          ) : (
                            <img src={color.icon} alt="multicolor" className={classes.colorIcon} />
                          )}

                          {params.colorGroups?.includes(encodeURIComponent(color.name)) && (
                            <img
                              src={color.name === 'White' ? blackCheckIcon : whiteCheckIcon}
                              alt="checked icon"
                              className={classes.colorCheckIcon}
                            />
                          )}
                        </div>
                      </Tooltip>
                    ))
                  )}
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default withStyles(styles)(FilterColors);
