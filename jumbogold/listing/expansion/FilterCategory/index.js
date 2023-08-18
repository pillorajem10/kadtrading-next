import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

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

const FilterCategory = ({ classes }) => {
  const {
    product: { categoryList },
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const handleSelectCategory = (id) => {
    router.push({
      pathname,
      query: {
        ...query,
        c3: id,
      },
    });
  };

  const level2List = categoryList.reduce((pre, cur) => {
    return [...pre, ...cur.categories];
  }, []);

  const category = level2List?.find((item) => item.id === params.c2);

  const catList = useMemo(() => {
    let list = [];

    if (params.c1 && params.c2) {
      list = categoryList
        .find((cat1) => cat1.id === params.c1)
        ?.categories.find((cat2) => cat2.id === params.c2).categories;
    }

    return list;
  }, [params.c1, params.c2, categoryList]);

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={catList?.length !== 0}
      disabled={catList?.length === 0}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Categories</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        <Typography
          className={`${classes.listItemText} ${
            params.c2 === '' ? classes.listItemTextActive : ''
          }`}
          onClick={() => handleSelectCategory(category.id)}
        >{`All ${category?.name} Products`}</Typography>

        {catList?.map(({ id, name }) => (
          <Typography
            className={`${classes.listItemText} ${
              params.c3 === id ? classes.listItemTextActive : ''
            }`}
            onClick={() => handleSelectCategory(id)}
            key={id}
          >
            {name}
          </Typography>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterCategory);
