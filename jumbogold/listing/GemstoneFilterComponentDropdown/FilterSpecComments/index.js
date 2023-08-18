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
import { useDebounce } from 'utils/methods' ;

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
  const [specialCommentsArray, setSpecialCommentsArray] = useState(undefined);
  const [showTextField, setShowTextField] = useState(false);
  const [otherGemStones, setOtherGemstones] = useState('');
  const anchorRef = useRef();

  const handleToggleStylesList = () => setShowStylesList(!showStylesList);

  const handleCloseStylesList = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setShowStylesList(false);
  };

  const handleSpecialComments = (value) => {
    if (!specialCommentsArray.includes(value)) {
      setSpecialCommentsArray([...specialCommentsArray, value]);
    } else {
      const filtered = specialCommentsArray.filter(shape => value !== shape);
      setSpecialCommentsArray(filtered);
    }

    if(!params.specialComments) {
      router.push({
        pathname,
        query: addPropToQuery('specialComments', value, query),
      });
    }
  };

  const handleKeyDown = useDebounce(e => {
    if (e.keyCode === 13) {
      if (!specialCommentsArray.includes(otherGemStones)) {
        setSpecialCommentsArray([...specialCommentsArray, otherGemStones]);
      } else {
        const filtered = specialCommentsArray.filter(shape => otherGemStones !== shape);
        setSpecialCommentsArray(filtered);
      }
  
      if(!params.specialComments) {
        router.push({
          pathname,
          query: addPropToQuery('specialComments', otherGemStones, query),
        });
      }
    }
  }, 500);

  const handleOtherGemsChange = (e) => {
    e.preventDefault();
    setOtherGemstones(e.target.value);
  };

  const handleShowTextField = () => setShowTextField(!showTextField);

  useEffect(() => {
    if (showTextField === false) {
      setOtherGemstones('');
      if (params.specialComments) {
        if (params.specialComments.split('%2C').includes(encodeURIComponent(otherGemStones))) {
          if (!specialCommentsArray.includes(otherGemStones)) {
            setSpecialCommentsArray([...specialCommentsArray, otherGemStones]);
          } else {
            const filtered = specialCommentsArray.filter(shape => otherGemStones !== shape);
            setSpecialCommentsArray(filtered);
          }
        }
      }      
    }
  }, [showTextField]);

  useEffect(() => {
    if (specialCommentsArray) {
      if (specialCommentsArray.length >= 1) {
        if(query.specialComments) {
          router.push({
            pathname,
            query: {
              ...query,
              specialComments: specialCommentsArray.join(','),
            },
          });
        }
      }

      if (specialCommentsArray.length <= 0) {
        if (query.specialComments && query.specialComments.split(',').length === 1) {
          router.push({
            pathname,
            query: addPropToQuery('specialComments', query.specialComments, query),
          });
        }
      }
   }
 }, [specialCommentsArray])

  useEffect(() => {
    setSpecialCommentsArray([]);
    if(params.specialComments) {
      setSpecialCommentsArray(decodeURIComponent(params.specialComments).split(','))
    }

    if (!params.specialComments) {
      setShowTextField(false)
      setOtherGemstones('');
    }
  }, [params.specialComments]);

  const uriToArray = params.specialComments ? decodeURIComponent(params.specialComments).split(',') : [];

  const renderStyles = useCallback(() => {
    let renderer = <Typography>Select from list</Typography>;

    if (params.specialComments) {
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
  }, [params.specialComments]);

  return (
    <>
      <div className={classes.filterContainer}>
        <b>Special Comments</b>
        <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterStyles}
        onClick={handleToggleStylesList}
        style={{
          border: showStylesList || params.specialComments ? '1px solid #000' : '1px solid #e4e4e4',
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
                    onClick={() => handleSpecialComments("Royal Blue")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Royal Blue')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Royal Blue
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleSpecialComments("Cornflower Blue")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Cornflower Blue')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Cornflower Blue
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleSpecialComments("Padparadscha")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Padparadscha')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Padparadscha
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleSpecialComments("Vivid")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Vivid')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Vivid
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleSpecialComments("Pigeon Blood")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Pigeon Blood')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Pigeon Blood
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleSpecialComments("Peach")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Peach')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Peach
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleSpecialComments("Teal")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Teal')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Teal
                    </Typography>
                  </MenuItem>

                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleSpecialComments("Bi-colour")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Bi-colour')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Bi-colour
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleSpecialComments("Colour Change")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Colour Change')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Colour Change
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
                      Other
                    </Typography>
                  </MenuItem>

                  {showTextField &&
                    <TextField
                      name="otherSpec"
                      className={classes.textField}
                      variant="outlined"
                      value={otherGemStones}
                      onChange={(e) => handleOtherGemsChange(e)}
                      onKeyDown={handleKeyDown}                      
                      size="small"
                      placeholder="Enter comment"
                    />
                  }
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
