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
  TextField,
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
  const [varietiesArray, setVarietiesArray] = useState(undefined);
  const [showTextField, setShowTextField] = useState(false);
  const [otherGemStones, setOtherGemstones] = useState('');
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

  const handleVarieties = (value) => {
    if (!varietiesArray.includes(value)) {
      setVarietiesArray([...varietiesArray, value]);
    } else {
      const filtered = varietiesArray.filter(shape => value !== shape);
      setVarietiesArray(filtered);
    }

    if(!params.varieties) {
      router.push({
        pathname,
        query: addPropToQuery('varieties', value, query),
      });
    }
  };

  const handleSubmitOtherGems = (event) => {
    event.preventDefault();


    if (!varietiesArray.includes(otherGemStones)) {
      setVarietiesArray([...varietiesArray, otherGemStones]);
    } else {
      const filtered = varietiesArray.filter(shape => otherGemStones !== shape);
      setVarietiesArray(filtered);
    }

    if(!params.varieties) {
      router.push({
        pathname,
        query: addPropToQuery('varieties', otherGemStones, query),
      });
    }
  };

  const handleShowTextField = () => {
    if (showTextField === false) {
      setShowTextField(true);
    } else {
      setOtherGemstones('');
      setShowTextField(false);

      if (otherGemStones !== '') {
        if (params.varieties) {
          if (params.varieties.split('%2C').includes(otherGemStones)) {
            if (!varietiesArray.includes(otherGemStones)) {
              setVarietiesArray([...varietiesArray, otherGemStones]);
            } else {
              const filtered = varietiesArray.filter(shape => otherGemStones !== shape);
              setVarietiesArray(filtered);
            }
          }
        }
      }
    }
  };

  useEffect(() => {
    if (varietiesArray) {
      if (varietiesArray.length >= 1) {
        if(query.varieties) {
          router.push({
            pathname,
            query: {
              ...query,
              varieties: varietiesArray.join(','),
            },
          });
        }
      }

      if (varietiesArray.length <= 0) {
        if (query.varieties && query.varieties.split(',').length === 1) {
          router.push({
            pathname,
            query: addPropToQuery('varieties', query.varieties, query),
          });
        }
      }
   }
 }, [varietiesArray]);


  useEffect(() => {
    setVarietiesArray([]);
    if(params.varieties) {
      setVarietiesArray(decodeURIComponent(params.varieties).split(','))
    }

    if (!params.varieties) {
      setShowTextField(false)
      setOtherGemstones('');
    }
  }, [params.varieties]);

  const uriToArray = params.varieties ? decodeURIComponent(params.varieties).split(',') : [];

  const renderStyles = useCallback(() => {
    let renderer = <Typography>Select from list</Typography>;

    if (params.varieties) {
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
  }, [params.varieties]);

  return (
    <>
      <div className={classes.filterContainer}>
        <b>Varieties</b>
        <div
          ref={anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          className={classes.filterStyles}
          onClick={handleToggleStylesList}
          style={{
            border: showStylesList || params.varieties ? '1px solid #000' : '1px solid #e4e4e4',
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
                      onClick={() => handleVarieties("Sapphire")}
                    >
                      <Checkbox
                        checked={uriToArray.includes('Sapphire')}
                        className={classes.checkbox}
                        disableRipple
                        color="primary"
                        size="small"
                      />
                      <Typography
                      >
                        Sapphire
                      </Typography>
                    </MenuItem>


                    <MenuItem
                      className={classes.menuItem}
                      onClick={() => handleVarieties("Ruby")}
                    >
                      <Checkbox
                        checked={uriToArray.includes('Ruby')}
                        className={classes.checkbox}
                        disableRipple
                        color="primary"
                        size="small"
                      />
                      <Typography
                      >
                        Ruby
                      </Typography>
                    </MenuItem>


                    <MenuItem
                      className={classes.menuItem}
                      onClick={() => handleVarieties("Emerald")}
                    >
                      <Checkbox
                        checked={uriToArray.includes('Emerald')}
                        className={classes.checkbox}
                        disableRipple
                        color="primary"
                        size="small"
                      />
                      <Typography
                      >
                        Emerald
                      </Typography>
                    </MenuItem>


                    <MenuItem
                      className={classes.menuItem}
                      onClick={() => handleVarieties("Tsavorite")}
                    >
                      <Checkbox
                        checked={uriToArray.includes('Tsavorite')}
                        className={classes.checkbox}
                        disableRipple
                        color="primary"
                        size="small"
                      />
                      <Typography
                      >
                        Tsavorite
                      </Typography>
                    </MenuItem>


                    <MenuItem
                      className={classes.menuItem}
                      onClick={() => handleVarieties("Spinel")}
                    >
                      <Checkbox
                        checked={uriToArray.includes('Spinel')}
                        className={classes.checkbox}
                        disableRipple
                        color="primary"
                        size="small"
                      />
                      <Typography
                      >
                        Spinel
                      </Typography>
                    </MenuItem>


                    <MenuItem
                      className={classes.menuItem}
                      onClick={() => handleVarieties("Alexandrite")}
                    >
                      <Checkbox
                        checked={uriToArray.includes('Alexandrite')}
                        className={classes.checkbox}
                        disableRipple
                        color="primary"
                        size="small"
                      />
                      <Typography
                      >
                        Alexandrite
                      </Typography>
                    </MenuItem>


                    <MenuItem
                      className={classes.menuItem}
                      onClick={() => handleVarieties("Tourmaline")}
                    >
                      <Checkbox
                        checked={uriToArray.includes('Tourmaline')}
                        className={classes.checkbox}
                        disableRipple
                        color="primary"
                        size="small"
                      />
                      <Typography
                      >
                        Tourmaline
                      </Typography>
                    </MenuItem>


                    <MenuItem
                      className={classes.menuItem}
                      onClick={() => handleVarieties("Aquamarine")}
                    >
                      <Checkbox
                        checked={uriToArray.includes('Aquamarine')}
                        className={classes.checkbox}
                        disableRipple
                        color="primary"
                        size="small"
                      />
                      <Typography
                      >
                        Aquamarine
                      </Typography>
                    </MenuItem>


                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleShowTextField}
                    >
                      <Checkbox
                        checked={showTextField}
                        className={classes.checkbox}
                        disableRipple
                        color="primary"
                        size="small"
                      />
                      <Typography
                      >
                        Other Gem
                      </Typography>
                    </MenuItem>

                    <form
                      onKeyDown={(e) => e.stopPropagation()}
                      hidden={!showTextField}
                      className={classes.inputForm}
                      onSubmit={handleSubmitOtherGems}
                    >
                      <div>
                        <TextField
                          className={classes.textField}
                          variant="outlined"
                          value={otherGemStones}
                          onChange={(e) => setOtherGemstones(e.target.value)}
                          size="small"
                          placeholder="Input Other Vairieties"
                        />
                      </div>
                      <button type="submit" hidden/>
                    </form>

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
