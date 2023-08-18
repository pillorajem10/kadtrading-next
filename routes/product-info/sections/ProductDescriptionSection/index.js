import React, { useState } from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// utils
import regExp from 'utils/regExp';

// components
import MerchantFAQ from '../../components/MerchantFAQ';
import ProductSpecification from '../../components/ProductSpecification';
import ProductReviews from '../../components/ProductReviews';

// styling
import styles from './style';

const ProductDescriptionSection = ({ classes }) => {
  const {
    merchant: { profile },
    product: { productDetails, reviewSummary },
  } = useSelector((state) => state);

  const [currentTab, setCurrentTab] = useState('Description');

  return (
    <section className={classes.section} id="_productDescriptionSection">
      <div className={classes.tabList}>
        <div
          className={classes.tabItem}
          style={{ color: currentTab === 'Description' ? '#000' : 'rgba(0, 0, 0, 0.38)' }}
          onClick={() => setCurrentTab('Description')}
        >
          <Typography>Description</Typography>
        </div>

        {!regExp.isDefaultNumber(reviewSummary.overallRating) && (
          <div
            className={classes.tabItem}
            style={{ color: currentTab === 'Ratings' ? '#000' : 'rgba(0, 0, 0, 0.38)' }}
            onClick={() => setCurrentTab('Ratings')}
          >
            <Typography>Ratings</Typography>
          </div>
        )}

        {profile.faqs?.length > 0 && (
          <div
            className={classes.tabItem}
            style={{ color: currentTab === 'FAQ' ? '#000' : 'rgba(0, 0, 0, 0.38)' }}
            onClick={() => setCurrentTab('FAQ')}
          >
            <Typography>FAQ</Typography>
          </div>
        )}

        {!regExp.isEmpty(productDetails.htmlCert) && (
          <div
            className={classes.tabItem}
            style={{ color: currentTab === 'Certifications' ? '#000' : 'rgba(0, 0, 0, 0.38)' }}
            onClick={() => setCurrentTab('Certifications')}
          >
            <Typography>Certifications</Typography>
          </div>
        )}
      </div>

      {/* Tab Items */}
      <>
        {productDetails.represent !== 'setting' && currentTab === 'Description' && (
          <div className={classes.tabContainer}>
            <ProductSpecification />

            <div dangerouslySetInnerHTML={{ __html: productDetails.htmlDesc }} />
          </div>
        )}

        {productDetails.represent === 'setting' && currentTab === 'Description' && (
          <div className={classes.tabContainer}>
            <div dangerouslySetInnerHTML={{ __html: productDetails.descriptions[0].content }} />
          </div>
        )}

        {currentTab === 'Ratings' && <ProductReviews />}

        {currentTab === 'FAQ' && <MerchantFAQ />}

        {currentTab === 'Certifications' && (
          <div className={classes.tabContainer}>
            <div dangerouslySetInnerHTML={{ __html: productDetails.htmlCert }} />
          </div>
        )}
      </>
    </section>
  );
};

export default withStyles(styles)(ProductDescriptionSection);
