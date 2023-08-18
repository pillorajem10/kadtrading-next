import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// components
import { Image } from 'jumbogold/common';

// redux
import { useDispatch } from 'react-redux';
import { merchant } from 'redux/actions';

// styling
import styles from './style';

const StarMerchantSection = ({ classes }) => {
  const dispatch = useDispatch();

  const [starMerchantList, setStarMerchantList] = useState([]);

  const handleGetStarMerchant = useCallback(async () => {
    const params = { starred: true, pageSize: 16 };

    const res = await dispatch(merchant.getMerchantsByParams(params));
    const { success, data } = res;

    if (success) {
      setStarMerchantList(data);
    }
  }, [dispatch]);

  useEffect(() => {
    handleGetStarMerchant();
  }, [handleGetStarMerchant]);

  return (
    <section className={classes.section}>
      <div className={classes.headerContainer}>
        <Typography className={classes.header}>Star Merchants</Typography>
      </div>

      <div className={classes.starMerchantList}>
        {starMerchantList.map(({ id, logo, displayName }, index) => (
          <div className={classes.merchantItem} key={index}>
            <Link href={`/merchant?merchantIds=${id}`}>
              <a>
                <Image src={logo} alt={displayName} className={classes.merchantImage} />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default withStyles(styles)(StarMerchantSection);
