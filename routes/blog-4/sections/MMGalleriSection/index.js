import React from 'react';

// MUI Stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// Picture
import mmGalleriTable from 'public/assets/images/article/article-4/mm-galleri-table.png';

// Styling
import styles from './style';

const MMGalleriSection = ({ classes }) => {
  const renderProductImage = () => (
    <img src={mmGalleriTable} alt="MM Galleri" className={classes.mmGalleriTable} />
  );

  return (
    <div className={classes.section}>
      <div className={classes.productContainer}>
        <div>
          <div className={classes.headerContainer}>
            <Typography className={classes.headerNumber}>5.</Typography>

            <Typography className={classes.header}>
              <span>10% off</span> MM Galleri
            </Typography>
          </div>

          <Hidden smUp>{renderProductImage()}</Hidden>

          <div className={classes.productDesc}>
            Established in 1992, MM Galleri specialises in stone products - especially marble - and
            uses the material to cap a finishing touch on timeless pieces. Take{' '}
            <a href="https://www.jumbogold.com/product/1301723164038553600">
              the Classic Dinette Rattan Table Set
            </a>{' '}
            for example. The classic rattan chair and table combo is given a touch of elegance with
            the Bianco Carrara Italian marble table top. With a storewide 10% discount, the rattan
            set is priced at <span>$972</span>, from a usual price of $1080.
            <br />
            <br />
            Check out more{' '}
            <a href="https://www.jumbogold.com/merchant/merchantIds=1301105100188180480">
              MM Galleri
            </a>{' '}
            products on their merchant page here.
          </div>
        </div>

        <Hidden xsDown>{renderProductImage()}</Hidden>
      </div>
    </div>
  );
};

export default withStyles(styles)(MMGalleriSection);
