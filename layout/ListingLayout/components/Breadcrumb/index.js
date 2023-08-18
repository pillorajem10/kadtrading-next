import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Breadcrumbs, Typography } from '@material-ui/core';

// MUI Icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Redux
import { useSelector } from 'react-redux';

// Styling
import styles from './style';

const Breadcrumb = ({ classes, fullListing }) => {
  const {
    product: { categoryList },
    listing: { params },
  } = useSelector((state) => state);

  const [level1, setLevel1] = useState({});
  const [level2, setLevel2] = useState({});

  useEffect(() => {
    if (params.c2 !== '') {
      const lvl1 = categoryList.find((cat) => cat.id === params.c1);

      const lvl2 = lvl1?.categories.find((cat) => cat.id === params.c2);

      setLevel1(lvl1);
      setLevel2(lvl2);
    }
  }, [params.c1, params.c2, categoryList]);

  const handleGoCategory = () => {
    Router.push('/category/[categoryId]', `/category/${params.c1}`);
  };

  return (
    <div className={classes.breadcrumb}>
      {fullListing ? (
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<ChevronRightIcon className={classes.breadcrumbIcon} />}
        >
          <Link href="/">
            <a>
              <Typography className={`${classes.breadcrumbText} ${classes.breadcrumbLink}`}>
                Home
              </Typography>
            </a>
          </Link>

          <Typography className={classes.breadcrumbText}>All Products</Typography>
        </Breadcrumbs>
      ) : (
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<ChevronRightIcon className={classes.breadcrumbIcon} />}
        >
          <Link href="/">
            <a>
              <Typography className={`${classes.breadcrumbText} ${classes.breadcrumbLink}`}>
                Home
              </Typography>
            </a>
          </Link>

          {level1 && (
            <Typography
              className={`${classes.breadcrumbText} ${classes.breadcrumbLink}`}
              onClick={handleGoCategory}
            >
              {level1.name}
            </Typography>
          )}

          {level2 && <Typography className={classes.breadcrumbText}>{level2.name}</Typography>}
        </Breadcrumbs>
      )}
    </div>
  );
};

export default withStyles(styles)(Breadcrumb);
