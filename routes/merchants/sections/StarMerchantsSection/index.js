import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// components
import { Image } from 'jumbogold/common';

// Redux
import { useDispatch } from 'react-redux';
import { merchant } from 'redux/actions';

// Styling
import styles from './style';

const StarMerchantsSection = ({ classes }) => {
  const dispatch = useDispatch();

  const [starMerchantsList, setStarMerchantsList] = useState([]);

  const handleGetStarMerchant = useCallback(async () => {
    const params = { starred: true };

    const res = await dispatch(merchant.getMerchantsByParams(params));
    const { success, data } = res;

    if (success) {
      setStarMerchantsList(data);
    }
  }, [dispatch]);

  useEffect(() => {
    handleGetStarMerchant();
  }, [handleGetStarMerchant]);

  return (
    <div className={classes.sections}>
      <Typography className={classes.header}>Star Merchants</Typography>

      <div className={classes.merchantsContainer}>
        {starMerchantsList.map(({ id, logo }) => (
          <div className={classes.merchantItem} key={id}>
            <Link href={`/merchant?merchantIds=${id}`}>
              <a>
                <Image src={logo} alt="" className={classes.merchantImage} />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(StarMerchantsSection);
