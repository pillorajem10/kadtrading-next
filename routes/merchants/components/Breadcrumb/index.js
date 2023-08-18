import React from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Breadcrumbs, Typography } from '@material-ui/core';

// MUI Icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Styling
import styles from './style';

const Breadcrumb = ({ classes }) => {
  return (
    <div className={classes.breadcrumb}>
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

        <Typography className={classes.breadcrumbText}>MERCHANTS</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default withStyles(styles)(Breadcrumb);
