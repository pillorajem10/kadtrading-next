import React from 'react';

// MUI Stuff
import { Typography, withStyles, Hidden } from '@material-ui/core';

// Picture
import decoFanLogo from 'public/assets/images/article/article-4/deco-fan-logo.png';

// Styling
import styles from './style';

const DecoFanSection = ({ classes }) => {
  const renderHeader = () => (
    <div className={classes.headerContainer}>
      <Typography className={classes.headerNumber}>6.</Typography>

      <Typography className={classes.header}>
        <span>Additional 15% discount</span>
        <br />
        on all Decor Fan products
      </Typography>
    </div>
  );

  const renderDescription = () => (
    <div className={classes.description}>
      While ceiling fans have fallen out of fashion somewhat, they can still be incorporated into
      many homes without sticking out like a sore thumb. Decor Fan’s{' '}
      <a href="https://www.jumbogold.com/product/1283385390763892736">
        F2FC Black Maple Oak Decor Fan
      </a>{' '}
      comes with an oak grain pattern to match most interiors.
      <br />
      <br />
      Usually priced at $638, the F2FC 46” fan is going at a 29% discount, and now costs{' '}
      <span>$456</span>, with free delivery for purchases above $350! In addition, you can use the
      promo code <span>DECORFAN15</span> for an additional 15% off the listed prices.
      <br />
      <br />
      Check out{' '}
      <a href="https://www.jumbogold.com/merchant/merchantIds=1282547738120577024">
        Decor Fan’s products
      </a>{' '}
      here
    </div>
  );

  const renderPromoCode = () => (
    <div className={classes.promotionCodeContainer}>
      <Typography className={classes.promoCodeTitle}>PROMO CODE</Typography>
      <div className={classes.promoCodeText}>
        <Typography>DECORFAN15</Typography>
      </div>
    </div>
  );

  return (
    <div className={classes.section}>
      <Hidden xsDown>
        <div className={classes.productContainer}>
          <img src={decoFanLogo} alt="Deco Fan" className={classes.decoFanLogo} />
          {renderHeader()}
          {renderDescription()}
          {renderPromoCode()}
        </div>
      </Hidden>

      <Hidden smUp>
        <>
          {renderHeader()}

          <div className={classes.mobileProductContainer}>
            <img src={decoFanLogo} alt="Deco Fan" className={classes.decoFanLogo} />
            {renderPromoCode()}
          </div>

          {renderDescription()}
        </>
      </Hidden>
    </div>
  );
};

export default withStyles(styles)(DecoFanSection);
