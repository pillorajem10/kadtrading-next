import React from 'react';

// MUI Stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// Picture
import melandasChair from 'public/assets/images/article/article-4/melandas-chair.png';

// Styling
import styles from './style';

const MelandasSection = ({ classes }) => {
  const renderProductImage = () => (
    <img src={melandasChair} alt="Melandas Office Chair" className={classes.melandasChair} />
  );

  return (
    <div className={classes.section}>
      <div className={classes.productContainer}>
        <div>
          <div className={classes.headerContainer}>
            <Typography className={classes.headerNumber}>7.</Typography>

            <Typography className={classes.header}>
              <span>$10 off</span> Melandas Office Chair
            </Typography>
          </div>

          <Hidden smUp>{renderProductImage()}</Hidden>

          <div className={classes.productDesc}>
            If you’re still working from home on that cheap plastic chair since the start of the
            Circuit Breaker, it’s high time you gave your hard-working back a break.{' '}
            <a href="https://www.jumbogold.com/product/1294297030418759680">
              Melandas’ Office chair
            </a>{' '}
            ($109) comes with an ergonomic back with tilting mechanism with recline tension control
            and lumbar support to ensure maximum comfort while you toil away on those endless
            reports.
            <br />
            <br />
            Use the promo code <span>MEL10OFF</span> for a nifty $10 off! Check out more of{' '}
            <a href="https://www.jumbogold.com/merchant/merchantIds=1293452954769293312">
              Melandas’ products
            </a>{' '}
            on their merchant page here.
          </div>

          <Typography className={classes.promoCodeTitle}>PROMO CODE</Typography>
          <div className={classes.promoCodeText}>
            <Typography>MEL10OFF</Typography>
          </div>
        </div>

        <Hidden xsDown>{renderProductImage()}</Hidden>
      </div>
    </div>
  );
};

export default withStyles(styles)(MelandasSection);
