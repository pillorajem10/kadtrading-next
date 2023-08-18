import React from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Breadcrumbs, Typography } from '@material-ui/core';

// MUI Icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Redux
import { useSelector } from 'react-redux';

// Styling
import styles from './style';

const Breadcrumb = ({ classes }) => {
  const { profile } = useSelector((state) => state.merchant);

  return (
    <div className={classes.breadcrumb}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<ChevronRightIcon className={classes.breadcrumbIcon} />}
      >
        <Link href="/merchants">
          <a>
            <Typography className={`${classes.breadcrumbText} ${classes.breadcrumbLink}`}>
              MERCHANTS
            </Typography>
          </a>
        </Link>

        <Typography className={classes.breadcrumbText}>{profile.displayName}</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default withStyles(styles)(Breadcrumb);
