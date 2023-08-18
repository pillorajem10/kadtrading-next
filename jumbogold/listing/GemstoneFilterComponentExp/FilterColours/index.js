import React, { useState, useEffect } from 'react';
import { CirclePicker } from 'react-color';

// MUI Stuff
import {
  withStyles,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// constants
import { defaultPrimaryColors } from 'constant';

// picture
import expandIcon from 'public/assets/icons/expand.png';

// styling
import styles from './style';

// utils
import { getColorDetails, getColorDetailsByText } from 'utils/colorDetect';
import { addPropToQuery } from 'utils/listing';

// components
import MultiColorSelection from 'jumbogold/listing/GemstoneFilterComponentDropdown/FilterColorPicker/components/MultiColorSelection';

const FilterColours = ({ classes, gatherFilterValues, clearFilters, label, triggerError }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const [color, setColor] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedOriginColor, setSelectedOriginColor] = useState();
  const [coloursArray, setColoursArray] = useState([]);

  /*
  useEffect(() => {
    if (params.primaryColour) {
      const selected = getColorDetailsByText(params.primaryColour);
      setColor(selected);
      setSelectedColor(params.primaryColor);
    }
  }, [params.primaryColour]);

  useEffect(() => {
    if (color) {
      const selected = getColorDetails(color);
      setSelectedColor(selected[3]);
      gatherFilterValues({ primaryColour: selected[3] });
    }
  }, [color]);

  const handleColorChange = (e, v) => {
    const selected = getColorDetails(e.hex);
    setColor(e.hex);
    setSelectedColor(selected[3]);
    setSelectedOriginColor(selected[1]);
  };
  */

  const handleColours = (value) => {
    if (coloursArray) {
      if (!coloursArray.includes(value)) {
        setColoursArray([...coloursArray, value]);
      } else {
        const filtered = coloursArray.filter(cr => value !== cr);
        setColoursArray(filtered);
      }
    }

    if (!params.primaryColour) {
      gatherFilterValues(addPropToQuery('primaryColour', value, params));
    }
  };

  useEffect(() => {
    if (coloursArray) {
      if (coloursArray.length >= 1) {
        if (params.primaryColour) {
          gatherFilterValues({ primaryColour: coloursArray.join(',') });
          /*
          router.push({
            pathname,
            query: {
              ...query,
              primaryColour: coloursArray.join(','),
            },
          });
          */
        }
      }

      if (coloursArray.length <= 0) {
        if (params.primaryColour && params.primaryColour.split(',').length === 1) {
          gatherFilterValues(addPropToQuery('primaryColour', params.primaryColour, params));
        }
      }
    }
  }, [coloursArray])

  useEffect(() => {
    if (params.primaryColour) {
      setColoursArray(decodeURIComponent(params.primaryColour).split(','))
    }
    if (!params.primaryColour) {
      setColoursArray([]);
    }
  }, [params.primaryColour]);

  useEffect(() => {
    if (clearFilters) {
      setColor(undefined);
      setColoursArray([]);
    }
  }, [clearFilters]);

  return (
    <Accordion
    className={classes.layout}
    defaultExpanded={filter.primaryColour !== null && filter.saturation !== null}
    disabled={filter.primaryColour === null && filter.saturation === null}
  >
    <AccordionSummary
      className={classes.headerWrapper}
      expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
      aria-controls="toggle-panel-content"
      id="panel-header"
    >
      <Typography className={classes.headerText}>{ label }</Typography>
    </AccordionSummary>

    <AccordionDetails className={classes.content}>
      <MultiColorSelection
        colors={coloursArray}
        defaultColors={defaultPrimaryColors}
        onCircleClick={handleColours}
      />


      {/*<Typography hidden={!color} style={{ marginTop: 10 }} variant="caption">Color: { selectedColor }</Typography>*/}
      {/*<Typography variant="caption">Shade: { selectedOriginColor }</Typography>*/}
    </AccordionDetails>
  </Accordion>    
  );
};

export default withStyles(styles)(FilterColours);

      /*
      <CirclePicker
        circleSize={34}
        hex={color}
        colors={defaultPrimaryColors}
        onChangeComplete={handleColorChange}
        styles={{
          default: {
            card: {
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              margin: '0 auto'
            }
          }
        }}
      />      
      */