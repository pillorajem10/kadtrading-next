import React, { useEffect, useState } from 'react';

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

// picture
import expandIcon from 'public/assets/icons/expand.png';

// styling
import styles from './style';

// utils
import { getColorDetails } from 'utils/colorDetect';

const FilterSaturation = ({ classes, gatherFilterValues, clearFilters }) => {
  const {
    listing: { params },
  } = useSelector((state) => state);

  const defaultPrimaryColors = ["#D3D3D3", "#A9A9A9"];
  const [coloursArray, setColoursArray] = useState([]);

  const handleColours = (value) => {
    const satur = (value[1] === 'Light Grey') ? 'Pastel - Light Medium Colours' : 'Medium - Deep Colours';
    if (coloursArray) {
      if (!coloursArray.includes(value[0])) {
        setColoursArray([...coloursArray, value[0]]);
      } else {
        const filtered = coloursArray.filter(cr => value[0] !== cr);
        setColoursArray(filtered);
      }
    }

    if (!params.saturation) {
      gatherFilterValues({ saturation: satur });
    }
  };


  useEffect(() => {
    if (coloursArray) {
      if (coloursArray.length >= 1) {
        if (params.saturation) {
          const satur = coloursArray.map(c => {
            return c === '#D3D3D3' ? 'Pastel - Light Medium Colours' : 'Medium - Deep Colours';
          });
          gatherFilterValues({ saturation: satur.join(',') });
        }
      }

      if (coloursArray.length <= 0) {
        if (params.saturation && params.saturation.split(',').length === 1) {
          gatherFilterValues({ saturation: params.saturation });
        }
      }
   }
 }, [coloursArray])

  useEffect(() => {
    if (params.saturation) {
      const bathed = decodeURIComponent(params.saturation);
      const satur = bathed.split(',').map(s => {
        return decodeURIComponent(s) === 'Pastel - Light Medium Colours' ? '#D3D3D3' : '#A9A9A9';
      });
      setColoursArray(satur);
    }
    if (!params.saturation) {
      setColoursArray([]);
    }
  }, [params.saturation]);

  useEffect(() => {
    if (clearFilters !== undefined) {
      setColoursArray([]);
    }
  }, [clearFilters]);


  return (
    <Accordion
      className={classes.layout}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Saturation</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          margin: '0px auto',
          paddingTop: 8,
          paddingLeft: 10,
          paddingBottom: 14,
          justifyContent: 'space-between',
        }}>

          {defaultPrimaryColors.map((c, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <div
                className={classes.circle}
                onClick={() => handleColours(getColorDetails(c))}
                style={{
                  background: c,
                  border: `${coloursArray.includes(getColorDetails(c)[0]) ? '1px solid black': 'none'}`,
                  boxShadow: `${coloursArray.includes(getColorDetails(c)[0]) ? c + ' 0px 0px 0px 11px inset, ' + c + ' 0px 0px 5px': 'none'}`,
                  transition: `${coloursArray.includes(getColorDetails(c)[0]) ? 'box-shadow 100ms ease 0s': 'none'}`,
                }}/>
                <Typography style={{ fontSize: '0.65rem' }} variant="caption">{idx === 0 ? 'Pastel - Light Medium Colours' : 'Medium - Deep Colours'}</Typography>

            </div>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterSaturation);
