import React from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Breadcrumbs, Typography } from '@material-ui/core';

// MUI Icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const styles = (theme) => ({
  breadcrumb: {
    margin: '47px 0 44px',

    [theme.breakpoints.only('xs')]: {
      margin: '32px 0',
    },
  },
  breadcrumbLink: {
    fontSize: 12,
    lineHeight: 1.34,
    letterSpacing: 2,
    color: 'rgba(0, 0, 0, 0.38)',
    textDecoration: 'none',

    [theme.breakpoints.only('xs')]: {
      color: 'rgba(0, 0, 0, 0.6)',
    },
  },
  breadcrumbIcon: {
    fontSize: 12,
    lineHeight: 1.34,
    letterSpacing: 2,
    color: 'rgba(0, 0, 0, 0.38)',

    [theme.breakpoints.only('xs')]: {
      color: 'rgba(0, 0, 0, 0.6)',
    },
  },
});

const Breadcrumb = ({ classes }) => {
  return (
    <div className={classes.breadcrumb}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<ChevronRightIcon className={classes.breadcrumbIcon} />}
      >
        <Link href="/">
          <a>
            <Typography className={classes.breadcrumbLink}>HOME</Typography>
          </a>
        </Link>

        <Typography className={classes.breadcrumbLink}>ARTICLE</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default withStyles(styles)(Breadcrumb);
