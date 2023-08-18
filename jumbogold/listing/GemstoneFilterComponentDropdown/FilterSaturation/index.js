import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, Switch, Typography  } from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// styling
import styles from './style';

// utils
import { getColorDetails } from 'utils/colorDetect';
import { addPropToQuery } from 'utils/listing';

const FilterSaturation = ({ classes }) => {
  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;
  const [coloursArray, setColoursArray] = useState([]);

  const defaultPrimaryColors = ["#D3D3D3", "#A9A9A9"];

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
      router.push({
        pathname,
        query: addPropToQuery('saturation', satur, query),
      });
    }
  };

  useEffect(() => {
    if (coloursArray) {
      if (coloursArray.length >= 1) {
        if (query.saturation) {
          const satur = coloursArray.map(c => {
            return c === '#D3D3D3' ? 'Pastel - Light Medium Colours' : 'Medium - Deep Colours';
          });
          
          router.push({
            pathname,
            query: {
              ...query,
              saturation: satur.join(','),
            },
          });
        }
      }

      if (coloursArray.length <= 0) {
        if (query.saturation && query.saturation.split(',').length === 1) {
          router.push({
            pathname,
            query: addPropToQuery('saturation', query.saturation, query),
          });
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

  return (
    <>
      <div className={classes.filterContainer}>
        <b>Saturation</b>
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
                <Typography variant="caption">{idx === 0 ? 'Pastel - Light Medium Colours' : 'Medium - Deep Colours'}</Typography>          

            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default withStyles(styles)(FilterSaturation);






/*
import React, { useState, useRef, useCallback, useEffect } from 'react';
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


// styling
import styles from './style';

const FilterStyles = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [showStylesList, setShowStylesList] = useState(false);
  const [saturationArray, setSaturationArray] = useState(undefined);
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

  const handleSaturation = (value) => {
    if (!saturationArray.includes(value)) {
      setSaturationArray([...saturationArray, value]);
    } else {
      const filtered = saturationArray.filter(shape => value !== shape);
      setSaturationArray(filtered);
    }

    if(!params.saturation) {
      router.push({
        pathname,
        query: addPropToQuery('saturation', value, query),
      });
    }
  };

  useEffect(() => {
    if (saturationArray) {
      if (saturationArray.length >= 1) {
        if(query.saturation) {
          router.push({
            pathname,
            query: {
              ...query,
              saturation: saturationArray.join(','),
            },
          });
        }
      }

      if (saturationArray.length <= 0) {
        if (query.saturation && query.saturation.split(',').length === 1) {
          router.push({
            pathname,
            query: addPropToQuery('saturation', query.saturation, query),
          });
        }
      }
   }
 }, [saturationArray])

  useEffect(() => {
    setSaturationArray([]);
    if(params.saturation) {
      setSaturationArray(decodeURIComponent(params.saturation).split(','))
    }
  }, [params.saturation]);

  const uriToArray = params.saturation ? decodeURIComponent(params.saturation).split(',') : [];

  const renderStyles = useCallback(() => {
    let renderer = <Typography>Select from list</Typography>;

    if (params.saturation) {
      renderer = (
        <div className={classes.selectedTagWrapper}>
          {uriToArray.map((item, index) => (
            <div key={index} className={classes.selectedTag}>
              <Typography>{decodeURIComponent(item)}</Typography>
            </div>
          ))}
        </div>
      );
    }

    return renderer;
  }, [params.saturation]);



  return (
    <>
      <div className={classes.filterContainer}>
        <b>Saturation</b>
        <div
          ref={anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          className={classes.filterStyles}
          onClick={handleToggleStylesList}
          style={{
            border: showStylesList || params.saturation ? '1px solid #000' : '1px solid #e4e4e4',
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
                    <MenuItem
                      className={classes.menuItem}
                      onClick={() => handleSaturation("Pastel - Light Medium Colours")}
                    >
                      <Checkbox
                        checked={uriToArray.includes('Pastel - Light Medium Colours')}
                        className={classes.checkbox}
                        disableRipple
                        color="primary"
                        size="small"
                      />
                      <Typography
                      >
                        Pastel - Light Medium Colours
                      </Typography>
                    </MenuItem>


                    <MenuItem
                      className={classes.menuItem}
                      onClick={() => handleSaturation("Medium - Deep Colours")}
                    >
                      <Checkbox
                        checked={uriToArray.includes('Medium - Deep Colours')}
                        className={classes.checkbox}
                        disableRipple
                        color="primary"
                        size="small"
                      />
                      <Typography
                      >
                        Medium - Deep Colours
                      </Typography>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </>
  );
};

export default withStyles(styles)(FilterStyles);
*/