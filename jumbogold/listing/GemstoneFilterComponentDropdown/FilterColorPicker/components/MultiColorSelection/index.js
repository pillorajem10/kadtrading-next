import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
} from '@material-ui/core';

// utils
import { getColorDetails } from 'utils/colorDetect';

// styling
import styles from './style';

const MultiColorSelection = ({ classes, colors, defaultColors, onCircleClick }) => {

  return (
    <>
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        margin: '0px auto',
        paddingTop: 8,
        paddingLeft: 10,
        paddingBottom: 14,
        justifyContent: 'flex-start',
      }}>

        {defaultColors.map((c, idx) => (
          <div
            key={idx}
            className={classes.circle}
            style={{
              background: c,
              border: `${colors.includes(getColorDetails(c)[3]) ? '1px solid black': 'none'}`,
              boxShadow: `${colors.includes(getColorDetails(c)[3]) ? c + ' 0px 0px 0px 11px inset, ' + c + ' 0px 0px 5px': 'none'}`,
              transition: `${colors.includes(getColorDetails(c)[3]) ? 'box-shadow 100ms ease 0s': 'none'}`,  
            }}
            onClick={() => onCircleClick(getColorDetails(c)[3])} />
        ))}
      </div>
    </>
  );
};

export default withStyles(styles)(MultiColorSelection);

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

const MultiColorSelection = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [showStylesList, setShowStylesList] = useState(false);
  const [coloursArray, setColoursArray] = useState(undefined);
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

  const handleColours = (value) => {
    if (!coloursArray.includes(value)) {
      setColoursArray([...coloursArray, value]);
    } else {
      const filtered = coloursArray.filter(shape => value !== shape);
      setColoursArray(filtered);
    }

    if(!params.colours) {
      router.push({
        pathname,
        query: addPropToQuery('colours', value, query),
      });
    }
  };

  useEffect(() => {
    if (coloursArray) {
      if (coloursArray.length >= 1) {
        if(query.colours) {
          router.push({
            pathname,
            query: {
              ...query,
              colours: coloursArray.join(','),
            },
          });
        }
      }

      if (coloursArray.length <= 0) {
        if (query.colours && query.colours.split(',').length === 1) {
          router.push({
            pathname,
            query: addPropToQuery('colours', query.colours, query),
          });
        }
      }
   }
 }, [coloursArray])

  useEffect(() => {
    setColoursArray([]);
    if(params.colours) {
      setColoursArray(decodeURIComponent(params.colours).split(','))
    }
  }, [params.colours]);

  const uriToArray = params.colours ? decodeURIComponent(params.colours).split(',') : [];

  const renderStyles = useCallback(() => {
    let renderer = <Typography>Colours</Typography>;

    if (params.colours) {
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
  }, [params.colours]);



  return (
    <>
      <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterStyles}
        onClick={handleToggleStylesList}
        style={{
          border: showStylesList || params.colours ? '1px solid #000' : '1px solid #e4e4e4',
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
                    onClick={() => handleColours("Blue")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Blue')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Blue
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleColours("Green")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Green')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Green
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleColours("Yellow")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Yellow')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Yellow
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleColours("Orange")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Orange')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Orange
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleColours("Red")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Red')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Red
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleColours("Pink")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Pink')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Pink
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleColours("Purple")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Purple')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Purple
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleColours("Violet")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Violet')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Violet
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleColours("Maroon")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Maroon')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Maroon
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleColours("Fancy Colors")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Fancy Colors')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Fancy Colors
                    </Typography>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default withStyles(styles)(MultiColorSelection);

*/