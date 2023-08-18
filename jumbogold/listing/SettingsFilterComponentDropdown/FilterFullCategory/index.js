import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
} from '@material-ui/core';

// MUI Icons
import AddIcon from '@material-ui/icons/Add';
import MinusIcon from '@material-ui/icons/Remove';

// redux
import { useSelector } from 'react-redux';

// picture
import expandIcon from 'public/assets/icons/expand.png';

// styling
import styles from './style';

const FilterFullCategory = ({ classes }) => {
  const {
    product: { categoryList },
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [showCategoryList, setShowCategoryList] = useState(false);
  const [expanded, setExpanded] = useState('');
  const anchorRef = useRef();

  const handleToggleCategoryList = () =>
    setShowCategoryList((currentValue) => {
      return !currentValue;
    });

  const handleCloseCategoryList = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setShowCategoryList(false);
    setExpanded('');
  };

  const handleTogglePanel = (panel) => {
    const expandedPanel = expanded === panel ? '' : panel;

    setExpanded(expandedPanel);
  };

  const handleSelectCategory = (cat2, cat3) => {
    router.push({
      pathname,
      query: {
        ...query,
        c1: cat2.parentId,
        c2: cat2.id,
        c3: cat3.id,
      },
    });
  };

  const categs = categoryList.filter(index => index.name !== 'Diamonds')

  const level2List = categs.reduce((pre, cur) => {
    return [...pre, ...cur.categories];
  }, []);

  const level3List = [...level2List].reduce((pre, cur) => {
    return [...pre, ...cur.categories];
  }, []);

  return (
    <>
      <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterCategory}
        onClick={handleToggleCategoryList}
        style={{
          border:
            showCategoryList || params.categoryIds ? '1px solid #000' : 'solid 1px #e4e4e4',
        }}
      >
        <Typography>
          {params.categoryIds === undefined
            ? 'Categories'
            : level3List?.find((cat) => cat.id === params.categoryIds)?.name}
        </Typography>

        <img
          src={expandIcon}
          alt="expand icon"
          className={classes.expandIcon}
          style={{
            transform: showCategoryList ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      <Popper
        anchorEl={anchorRef.current}
        className={classes.popper}
        disablePortal
        keepMounted
        open={showCategoryList}
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
              <ClickAwayListener onClickAway={handleCloseCategoryList}>
                <div className={classes.categoryListWrapper}>
                  {level2List.map((lvl2, index) => (
                    <Accordion
                      className={classes.listItem}
                      expanded={expanded === `panel${index + 1}`}
                      key={index}
                      onChange={() => handleTogglePanel(`panel${index + 1}`)}
                    >
                      <AccordionSummary
                        classes={{
                          root: classes.listExpandSummary,
                          expanded: classes.listExpanded,
                          expandIcon: classes.listExpandIconRoot,
                        }}
                        expandIcon={
                          expanded === `panel${index + 1}` ? (
                            <MinusIcon className={classes.listExpandIcon} />
                          ) : (
                            <AddIcon className={classes.listExpandIcon} />
                          )
                        }
                      >
                        <Typography className={classes.listItemTitle}>{lvl2.name}</Typography>
                      </AccordionSummary>

                      <AccordionDetails className={classes.listExpandDetails}>
                        {lvl2.categories.map((lvl3) => {
                          return (
                            <Typography
                              className={`${classes.listItemText} ${
                                params.c3 === lvl3.id ? classes.listItemTextActive : ''
                              }`}
                              key={lvl3.id}
                              onClick={() => handleSelectCategory(lvl2, lvl3)}
                            >
                              {lvl3.name}
                            </Typography>
                          );
                        })}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default withStyles(styles)(FilterFullCategory);
