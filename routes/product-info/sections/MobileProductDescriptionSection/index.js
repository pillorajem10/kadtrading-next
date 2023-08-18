import React from 'react';

// MUI Stuff
import {
  withStyles,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// picture
import expandIcon from 'public/assets/icons/arrow-dropdown.svg';

// utils
import regExp from 'utils/regExp';

// components
import ProductSpecification from '../../components/ProductSpecification';
import MobileProductReviews from '../../components/MobileProductReviews';
import MerchantFAQ from '../../components/MerchantFAQ';

// styling
import styles from './style';

const MobileProductDescriptionSection = ({ classes }) => {
  const {
    product: { productDetails, reviewSummary },
    merchant: { profile },
  } = useSelector((state) => state);

  return (
    <section className={classes.section} id="_productDescriptionSection">
      {/* Description */}
      <Accordion classes={{ root: classes.panelRoot }} defaultExpanded>
        <AccordionSummary
          aria-controls="toggle-panel-content"
          id="panel-header"
          classes={{
            root: classes.summaryRoot,
            expanded: classes.panelExpanded,
          }}
          expandIcon={<img src={expandIcon} alt="expand icon" />}
        >
          <Typography className={classes.header}>Description</Typography>
        </AccordionSummary>

        <AccordionDetails className={classes.panelDetailsWrapper}>
          {productDetails.represent !== 'setting' &&
              <ProductSpecification />
          }

          {productDetails.represent === 'setting' &&
              <div dangerouslySetInnerHTML={{ __html: productDetails.descriptions[0].content  }} />
          }
        </AccordionDetails>
      </Accordion>

      {/* Ratings */}
      {/*!regExp.isDefaultNumber(reviewSummary.overallRating) && (
        <Accordion classes={{ root: classes.panelRoot }}>
          <AccordionSummary
            aria-controls="toggle-panel-content"
            id="panel-header"
            classes={{
              root: classes.summaryRoot,
              expanded: classes.panelExpanded,
            }}
            expandIcon={<img src={expandIcon} alt="expand icon" />}
          >
            <Typography className={classes.header}>Ratings</Typography>
          </AccordionSummary>

          <AccordionDetails className={classes.reviewListWrapper}>
            <MobileProductReviews />
          </AccordionDetails>
        </Accordion>
      )*/}

      {/* Merchant FAQ */}
      {profile.faqs?.length > 0 && (
        <Accordion classes={{ root: classes.panelRoot }}>
          <AccordionSummary
            aria-controls="toggle-panel-content"
            id="panel-header"
            classes={{
              root: classes.summaryRoot,
              expanded: classes.panelExpanded,
            }}
            expandIcon={<img src={expandIcon} alt="expand icon" />}
          >
            <Typography className={classes.header}>FAQ</Typography>
          </AccordionSummary>

          <AccordionDetails className={classes.panelDetailsWrapper}>
            <MerchantFAQ />
          </AccordionDetails>
        </Accordion>
      )}

      {/* Certifications */}
      {!regExp.isEmpty(productDetails.htmlCert) && (
        <Accordion classes={{ root: classes.panelRoot }}>
          <AccordionSummary
            aria-controls="toggle-panel-content"
            id="panel-header"
            classes={{
              root: classes.summaryRoot,
              expanded: classes.panelExpanded,
            }}
            expandIcon={<img src={expandIcon} alt="expand icon" />}
          >
            <Typography className={classes.header}>Certifications</Typography>
          </AccordionSummary>

          <AccordionDetails className={classes.panelDetailsWrapper}>
            <div dangerouslySetInnerHTML={{ __html: productDetails.htmlCert }} />
          </AccordionDetails>
        </Accordion>
      )}
    </section>
  );
};

export default withStyles(styles)(MobileProductDescriptionSection);
