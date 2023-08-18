import React, { useState } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';

// MUI Icons
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

// redux
import { useSelector } from 'react-redux';

// picture
import icon from 'public/assets/icons/expand.png';

// styling
import styles from './style';

const FilterFullCategory = ({ classes }) => {
  const {
    product: { categoryList },
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [expanded, setExpanded] = useState('');

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

  const handleSelectAllCategory = (cat2) => {
    const { c3, ...rest } = query;

    router.push({
      pathname,
      query: {
        ...rest,
        c1: cat2.parentId,
        c2: cat2.id,
      },
    });
  };

  const handleClickAll = () => {
    const { categoryIds, ...rest } = query;

    router.push({
      pathname,
      query: { ...rest },
    });
  };

  const categs = categoryList.filter(index => index.name !== 'Diamonds')

  const level2List = categs.reduce((pre, cur) => {
    return [...pre, ...cur.categories];
  }, []);

  return (
    <Accordion className={classes.layout} defaultExpanded>
      <AccordionSummary
        className={classes.headerUnit}
        expandIcon={<img className={classes.expandIcon} src={icon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.header}>Categories</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.list}>
        <Typography
          className={`${classes.listItemText} ${
            !params.c1 && !params.c2 ? classes.listItemTextActive : ''
          }`}
          onClick={handleClickAll}
        >
          All Products
        </Typography>

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
                  <RemoveIcon className={classes.listExpandIcon} />
                ) : (
                  <AddIcon className={classes.listExpandIcon} />
                )
              }
            >
              <Typography className={classes.listItemText}>{lvl2.name}</Typography>
            </AccordionSummary>

            <AccordionDetails className={classes.listExpandDetails}>
              <Typography
                className={`${classes.innerListItemText} ${
                  params.c2 === lvl2.id && !params.c3 ? classes.listItemTextActive : ''
                }`}
                onClick={() => handleSelectAllCategory(lvl2)}
              >{`All ${lvl2.name} Products`}</Typography>

              {lvl2.categories.map((lvl3) => {
                return (
                  <Typography
                    className={`${classes.innerListItemText} ${
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
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterFullCategory);
