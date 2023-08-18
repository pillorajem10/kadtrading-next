import React from 'react';

// MUI Stuff
import { Hidden, Typography, withStyles } from '@material-ui/core';

// Picture
import celliniPicOne from 'public/assets/images/article/article-4/cellini-pic-1.png';
import celliniPicTwo from 'public/assets/images/article/article-4/cellini-pic-2.png';

// Styling
import styles from './style';

const CelliniSection = ({ classes }) => {
  const handleHideBR = () => (
    <Hidden xsDown>
      <br />
    </Hidden>
  );

  return (
    <div className={classes.section}>
      <div>
        <div className={classes.headerContainer}>
          <Typography className={classes.headerNumber}>1.</Typography>

          <Typography className={classes.header}>
            <span>$500 off</span> Cellini’s <br />
            Float Natura Bed
          </Typography>
        </div>

        <Hidden smUp>
          <img src={celliniPicOne} alt="cellini product 1" className={classes.celliniPicOne} />
        </Hidden>

        <div className={classes.description}>
          This isn’t an ordinary bed. The{' '}
          <a href="https://www.jumbogold.com/product/1242381229794131968">
            Cellini Float Adjustable Bed
          </a>{' '}
          is designed for the modern Singaporean, featuring a Natura bamboo yarn mattress and USB
          ports so you can keep charging your device while using it on the bed. But that’s not all.
          The bed’s backrest and leg support can be adjusted to provide maximum comfort. I mean just
          look at it!
          <br />
          <br />
          Beneath the mattresses lie independent motors to customise the cushions to your unique
          sleeping position, while the other user remains unaffected. Talk about a smart design.
        </div>

        <a href="https://www.jumbogold.com/product/1242381229794131968">
          <Typography className={classes.productName}>
            Cellini’s Float
            {handleHideBR()}
            Adjustable Double Bed
          </Typography>
        </a>

        <br />

        {handleHideBR()}

        <Typography className={classes.productPrice}>$5,499</Typography>

        <Typography className={classes.deliveryOption}>(FREE delivery!)</Typography>

        <div className={classes.promotionCodeContainer}>
          <Typography>
            After the use of
            <br />
            promo code
            <br />
            CELLINI500OFF
          </Typography>
        </div>

        <Hidden smUp>
          <img src={celliniPicTwo} alt="cellini product 2" className={classes.celliniPicTwo} />
        </Hidden>

        <div className={classes.moreProduct}>
          Click here to see{' '}
          <a href="https://www.jumbogold.com/merchant/merchantIds=1238305728663629824">
            more Cellini products
          </a>
        </div>
      </div>

      <Hidden xsDown>
        <div className={classes.pictureContainer}>
          <img src={celliniPicOne} alt="cellini product 1" className={classes.celliniPicOne} />
          <img src={celliniPicTwo} alt="cellini product 2" className={classes.celliniPicTwo} />
        </div>
      </Hidden>
    </div>
  );
};

export default withStyles(styles)(CelliniSection);
