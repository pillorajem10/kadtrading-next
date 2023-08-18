import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, Hidden } from '@material-ui/core';

// sections
import ShopSection from 'routes/merchant/sections/ShopSection';
import AboutSection from 'routes/merchant/sections/AboutSection';

// components
import Banner from 'routes/merchant/components/Banner';
import MerchantHeader from 'routes/merchant/components/MerchantHeader';
import MobileMerchantHeader from 'routes/merchant/components/MobileMerchantHeader';
import Breadcrumb from 'routes/merchant/components/Breadcrumb';

// hooks
import useListing from 'hooks/useListing';

// redux
import { useDispatch } from 'react-redux';
import { merchant } from 'redux/actions';

// utils
import { formatQueryParams } from 'utils/listing';

// styling
import styles from 'routes/merchant/style';

const Merchant = ({ classes }) => {
  const dispatch = useDispatch();

  const {
    handleSearchKeyword,
    searchProductList,
    handleChangePageIndex,
    handleChangePageSize,
    pageSize,
  } = useListing({ type: 'merchant' });

  const router = useRouter();
  const { asPath } = router;

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const query = asPath.split('?').length > 1 ? formatQueryParams(asPath.split('?')[1]) : {};
    dispatch(merchant.getMerchantProfileById(query.merchantIds));
  }, [dispatch]);

  return (
    <div className={classes.merchant}>
      <Banner />

      <div className={classes.container}>
        <Hidden xsDown>
          <MerchantHeader tabIndex={tabIndex} setTabIndex={setTabIndex} />
        </Hidden>

        <Hidden smUp>
          <Breadcrumb />
          <MobileMerchantHeader tabIndex={tabIndex} setTabIndex={setTabIndex} />
        </Hidden>
      </div>

      {tabIndex === 0 && (
        <ShopSection
          onSearch={handleSearchKeyword}
          productList={searchProductList}
          setPageSize={handleChangePageSize}
          pageSize={pageSize}
          setPageIndex={handleChangePageIndex}
        />
      )}

      {tabIndex === 1 && <AboutSection />}
    </div>
  );
};

export default withStyles(styles)(Merchant);
