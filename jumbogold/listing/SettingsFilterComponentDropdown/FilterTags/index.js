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
import tags from './style';

const FilterStyles = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [showStylesList, setShowStylesList] = useState(false);
  const [tagsArray, setTagsArray] = useState(undefined);
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

  const handleTags = (value) => {
    if (!tagsArray.includes(value)) {
      setTagsArray([...tagsArray, value]);
    } else {
      const filtered = tagsArray.filter(shape => value !== shape);
      setTagsArray(filtered);
    }

    if(!params.tags) {
      router.push({
        pathname,
        query: addPropToQuery('tags', value, query),
      });
    }
  };

  useEffect(() => {
    if (tagsArray) {
      if (tagsArray.length >= 1) {
        if(query.tags) {
          router.push({
            pathname,
            query: {
              ...query,
              tags: tagsArray.join(','),
            },
          });
        }
      }

      if (tagsArray.length <= 0) {
        if (query.tags && query.tags.split(',').length === 1) {
          router.push({
            pathname,
            query: addPropToQuery('tags', query.tags, query),
          });
        }
      }
   }
 }, [tagsArray])

  useEffect(() => {
    setTagsArray([]);
    if(params.tags) {
      setTagsArray(decodeURIComponent(params.tags).split(','))
    }
  }, [params.tags]);

  const uriToArray = params.tags ? decodeURIComponent(params.tags).split(',') : [];

  const renderStyles = useCallback(() => {
    let renderer = <Typography>Tags</Typography>;

    if (params.tags) {
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
  }, [params.tags]);



  return (
    <>
      <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterStyles}
        onClick={handleToggleStylesList}
        style={{
          border: showStylesList || params.tags ? '1px solid #000' : '1px solid #e4e4e4',
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
                    onClick={() => handleTags("4 Clove Marquise Bracelet")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('4 Clove Marquise Bracelet')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      4 Clove Marquise Bracelet
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleTags("B2 Bracelet")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('B2 Bracelet')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      B2 Bracelet
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleTags("Cathedral")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Cathedral')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Cathedral
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleTags("Round Halo Classic")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Round Halo Classic')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Round Halo Classic
                    </Typography>
                  </MenuItem> 


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleTags("Country")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Country')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Country
                    </Typography>
                  </MenuItem>


                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleTags("Middle Thin Satin & Sloped Half Eternity")}
                  >
                    <Checkbox
                      checked={uriToArray.includes('Middle Thin Satin & Sloped Half Eternity')}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                      size="small"
                    />
                    <Typography
                    >
                      Middle Thin Satin & Sloped Half Eternity
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

export default withStyles(tags)(FilterStyles);
