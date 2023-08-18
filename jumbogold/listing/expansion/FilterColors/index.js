import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Tooltip,
} from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// Picture
import expandIcon from 'public/assets/icons/expand.png';
import whiteCheckIcon from 'public/assets/icons/white-check.svg';
import blackCheckIcon from 'public/assets/icons/black-check.svg';

// utils
import { addPropToQuery } from 'utils/listing';
import { formatColorList } from 'utils/formatter';

// styling
import styles from './style';

const FilterColors = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const handleSelectColor = (selectedColor) => {
    router.push({
      pathname,
      query: addPropToQuery('colorGroups', selectedColor, query),
    });
  };

  const colorList = useMemo(() => {
    return filter.ColorGroups && filter.ColorGroups.length > 0
      ? formatColorList(filter.ColorGroups)
      : [];
  }, [filter.ColorGroups]);

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={colorList.length !== 0}
      disabled={colorList.length === 0}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Colours</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        {colorList.map((color, index) => (
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
            <div className={classes.colorWrapper} onClick={() => handleSelectColor(color.name)}>
              {color.code ? (
                <div
                  className={classes.colorCode}
                  style={{
                    backgroundColor: color.code,
                    border:
                      color.code === '#FFFFFF' ? '0.5px solid #d8d8d0' : '0.5px solid transparent',
                  }}
                />
              ) : (
                <img src={color.icon} alt="multicolor" className={classes.colorIcon} />
              )}

              {params.colorGroups?.includes(color.name) && (
                <img
                  src={color.name === 'White' ? blackCheckIcon : whiteCheckIcon}
                  alt="checked icon"
                  className={classes.colorCheckIcon}
                />
              )}
            </div>
          </Tooltip>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterColors);
