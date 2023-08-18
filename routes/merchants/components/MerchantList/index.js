import React from 'react';
import Link from 'next/link';

// MUI Stuff
import { Typography, withStyles } from '@material-ui/core';

// Styling
import styles from './style';

const MerchantList = ({ classes, merchantList }) => {
  if (merchantList.length === 0) return null;

  return (
    <div className={classes.merchantListContainer}>
      {merchantList.map(({ label, value }) => (
        <div key={label} className={classes.merchantList} id={`section-${label}`}>
          <Typography className={classes.charHeader}>{label}</Typography>

          {value.map(({ displayName, id }) => (
            <Link href={`/merchant?merchantIds=${id}`} key={id}>
              <a>
                <Typography className={classes.merchantName}>{displayName}</Typography>
              </a>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(MerchantList);
