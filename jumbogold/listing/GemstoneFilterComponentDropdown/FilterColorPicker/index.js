import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, Switch, Typography  } from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// constants
import { defaultPrimaryColors } from 'constant';

// styling
import styles from './style';

// utils
import { getColorDetails, getColorDetailsByText } from 'utils/colorDetect';
import { addPropToQuery } from 'utils/listing';

// components
import MultiColorSelection from './components/MultiColorSelection';
import SingleColorSelection from './components/SingleColorSelection';

const FilterColorPicker = ({ classes }) => {
  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;
  const [coloursArray, setColoursArray] = useState([]);

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
      router.push({
        pathname,
        query: addPropToQuery('primaryColour', value, query),
      });
    }
  };

  useEffect(() => {
    if (coloursArray) {
      if (coloursArray.length >= 1) {
        if (query.primaryColour) {
          router.push({
            pathname,
            query: {
              ...query,
              primaryColour: coloursArray.join(','),
            },
          });
        }
      }

      if (coloursArray.length <= 0) {
        if (query.primaryColour && query.primaryColour.split(',').length === 1) {
          router.push({
            pathname,
            query: addPropToQuery('primaryColour', query.primaryColour, query),
          });
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

  return (
    <>
      <div className={classes.filterContainer}>
        <b>Primary Colour</b>
        {/*isMulti ? <MultiColorSelection color={color} onChange={handleColorChange} /> : <SingleColorSelection color={color} onChange={handleColorChange} /> */}

        <MultiColorSelection
          colors={coloursArray}
          defaultColors={defaultPrimaryColors}
          onCircleClick={handleColours}
        />
        {/*
        <div style={{ display: 'flex', alignItems: 'center', padding: 5}}>
          <Switch size="small" color="warning" onChange={handleToggleMulti} />
          <Typography variant="caption">Multiple</Typography>
        </div>        
        */}
      </div>
    </>
  )
}
export default withStyles(styles)(FilterColorPicker);
