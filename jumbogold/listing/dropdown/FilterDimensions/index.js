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
  Slider,
} from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// picture
import expandIcon from 'public/assets/icons/expand.png';

// styling
import styles from './style';

const FilterDimensions = ({ classes }) => {
  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [selectedList, setSelectedList] = useState([]);
  const [widthRange, setWidthRange] = useState([0, 0]);
  const [heightRange, setHeightRange] = useState([0, 0]);
  const [depthRange, setDepthRange] = useState([0, 0]);
  const [showDimensionsList, setShowDimensionsList] = useState(false);
  const anchorRef = useRef();

  useEffect(() => {
    setSelectedList([]);
    setWidthRange([0, 0]);
    setHeightRange([0, 0]);
    setDepthRange([0, 0]);

    if (params.minWidth || params.maxWidth) {
      setWidthRange([parseInt(params.minWidth, 10), parseInt(params.maxWidth, 10)]);
      setSelectedList((currentValue) => {
        return [...currentValue, `W: ${params.minWidth}-${params.maxWidth}`];
      });
    }

    if (params.minHeight || params.maxHeight) {
      setHeightRange([parseInt(params.minHeight, 10), parseInt(params.maxHeight, 10)]);
      setSelectedList((currentValue) => {
        return [...currentValue, `H: ${params.minHeight}-${params.maxHeight}`];
      });
    }

    if (params.minDepth || params.maxDepth) {
      setDepthRange([parseInt(params.minDepth, 10), parseInt(params.maxDepth, 10)]);
      setSelectedList((currentValue) => {
        return [...currentValue, `D: ${params.minDepth}-${params.maxDepth}`];
      });
    }
  }, [
    params.minWidth,
    params.maxWidth,
    params.minHeight,
    params.maxHeight,
    params.minDepth,
    params.maxDepth,
  ]);

  const handleToggleDimensionsList = () =>
    setShowDimensionsList((currentValue) => {
      return !currentValue;
    });

  const handleCloseDimensionsList = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setShowDimensionsList(false);
  };

  const handleChangeWidthRange = (event, value) => {
    setWidthRange([value[0], value[1]]);
  };

  const handleChangeWidthRangeDone = (event, value) => {
    router.push({
      pathname,
      query: {
        ...query,
        minWidth: value[0],
        maxWidth: value[1],
      },
    });
  };

  const handleChangeHeightRange = (event, value) => {
    setHeightRange([value[0], value[1]]);
  };

  const handleChangeHeightRangeDone = (event, value) => {
    router.push({
      pathname,
      query: {
        ...query,
        minHeight: value[0],
        maxHeight: value[1],
      },
    });
  };

  const handleChangeDepthRange = (event, value) => {
    setDepthRange([value[0], value[1]]);
  };

  const handleChangeDepthRangeDone = (event, value) => {
    router.push({
      pathname,
      query: {
        ...query,
        minDepth: value[0],
        maxDepth: value[1],
      },
    });
  };

  return (
    <>
      <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterDimensions}
        onClick={handleToggleDimensionsList}
        style={{
          border:
            showDimensionsList || selectedList.length !== 0
              ? '1px solid #000'
              : '1px solid #e4e4e4',
        }}
      >
        {selectedList.length === 0 ? (
          <Typography>Dimensions</Typography>
        ) : (
          <div className={classes.selectedTagWrapper}>
            {selectedList.map((dimension, index) => (
              <div key={index} className={classes.selectedTag}>
                <Typography>{dimension}</Typography>
              </div>
            ))}
          </div>
        )}

        <img
          src={expandIcon}
          alt="expand icon"
          className={classes.expandIcon}
          style={{
            transform: showDimensionsList ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      <Popper
        anchorEl={anchorRef.current}
        className={classes.popper}
        disablePortal
        keepMounted
        open={showDimensionsList}
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
              <ClickAwayListener onClickAway={handleCloseDimensionsList}>
                <div className={classes.dimensionsListWrapper}>
                  <div className={classes.dimensionWrapper}>
                    <Typography className={classes.dimensionHeader}>
                      Width (cm): {widthRange[0] || 0} - {widthRange[1] || 999}
                    </Typography>

                    <Slider
                      classes={{
                        root: classes.root,
                        rail: classes.rail,
                        track: classes.track,
                        thumb: classes.thumb,
                        valueLabel: classes.valueLabel,
                      }}
                      min={0}
                      max={999}
                      onChange={handleChangeWidthRange}
                      onChangeCommitted={handleChangeWidthRangeDone}
                      value={[widthRange[0] || 0, widthRange[1] || 999]}
                    />
                  </div>

                  <div className={classes.dimensionWrapper}>
                    <Typography className={classes.dimensionHeader}>
                      Height (cm): {heightRange[0] || 0} - {heightRange[1] || 999}
                    </Typography>

                    <Slider
                      classes={{
                        root: classes.root,
                        rail: classes.rail,
                        track: classes.track,
                        thumb: classes.thumb,
                        valueLabel: classes.valueLabel,
                      }}
                      min={0}
                      max={999}
                      onChange={handleChangeHeightRange}
                      onChangeCommitted={handleChangeHeightRangeDone}
                      value={[heightRange[0] || 0, heightRange[1] || 999]}
                    />
                  </div>

                  <div className={classes.dimensionWrapper}>
                    <Typography className={classes.dimensionHeader}>
                      Depth (cm): {depthRange[0] || 0} - {depthRange[1] || 999}
                    </Typography>

                    <Slider
                      classes={{
                        root: classes.root,
                        rail: classes.rail,
                        track: classes.track,
                        thumb: classes.thumb,
                        valueLabel: classes.valueLabel,
                      }}
                      min={0}
                      max={999}
                      onChange={handleChangeDepthRange}
                      onChangeCommitted={handleChangeDepthRangeDone}
                      value={[depthRange[0] || 0, depthRange[1] || 999]}
                    />
                  </div>
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default withStyles(styles)(FilterDimensions);
