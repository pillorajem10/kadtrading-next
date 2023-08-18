import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  Slider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
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

  const [widthRange, setWidthRange] = useState([0, 0]);
  const [heightRange, setHeightRange] = useState([0, 0]);
  const [depthRange, setDepthRange] = useState([0, 0]);

  useEffect(() => {
    setWidthRange([parseInt(params.minWidth, 10), parseInt(params.maxWidth, 10)]);
    setHeightRange([parseInt(params.minHeight, 10), parseInt(params.maxHeight, 10)]);
    setDepthRange([parseInt(params.minDepth, 10), parseInt(params.maxDepth, 10)]);
  }, [
    params.minWidth,
    params.maxWidth,
    params.minHeight,
    params.maxHeight,
    params.minDepth,
    params.maxDepth,
  ]);

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
    <Accordion className={classes.layout} defaultExpanded>
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Dimensions</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        <div className={classes.dimensionWrapper}>
          <Typography className={classes.dimensionHeader}>
            Width (cm): {widthRange[0] || 0} - {widthRange[1] || 999}
          </Typography>

          <Slider
            classes={{
              root: classes.sliderRoot,
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
              root: classes.sliderRoot,
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
              root: classes.sliderRoot,
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
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterDimensions);
