import React from 'react';

// MUI Stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// Picture
import tiFurnitureLogo from 'public/assets/images/article/article-4/ti-furniture-logo.png';
import mobileTiFurnitiBg from 'public/assets/images/article/article-4/mobile-ti-furniture-wizzo.png';
import coffeeTable from 'public/assets/images/article/article-4/ti-furniture-ascend-one-coffee-table.png';
import diningTable from 'public/assets/images/article/article-4/ti-furniture-stretch-one-dining-table.gif';
import wizzo from 'public/assets/images/article/article-4/ti-furniture-wizzo.png';

// Styling
import styles from './style';

const TiFurnitureSection = ({ classes }) => {
  const renderHeader = () => (
    <div className={classes.headerContainer}>
      <Typography className={classes.headerNumber}>3.</Typography>

      <Typography className={classes.header}>
        <span>11% off</span> Ti Furniture products
      </Typography>
    </div>
  );

  return (
    <div className={classes.section}>
      <Hidden smUp>{renderHeader()}</Hidden>

      <div className={classes.productContainer}>
        <div>
          <Hidden xsDown>{renderHeader()}</Hidden>

          <Typography className={classes.productName}>The Stretch One Dining Table</Typography>
          <div className={classes.productDesc}>
            Ti Furniture focuses on space-saving pieces that echo the Transformers’ ethos of being
            more than meets the eye. For an embodiment of that spirit, look no further than{' '}
            <a href="https://www.jumbogold.com/product/1265929495057121280">
              the Stretch One Dining Table
            </a>{' '}
            which starts off as a 50cm long console, but is able to extend in a pinch when required,
            to a maximum of <span>3 meters</span>! Just take a look at its transformation:
          </div>
        </div>
        <img src={diningTable} alt="The Stretch One Dining Table" className={classes.productGif} />
      </div>

      <div className={classes.productContainer}>
        <div>
          <Typography className={classes.productName}>The Ascend One Coffee Table</Typography>
          <Typography className={classes.productDesc}>
            <a href="https://www.jumbogold.com/product/1265929491575848960">
              The Ascend One Coffee Table
            </a>{' '}
            may be slightly less showy, but there’s no doubting its practicality either. When
            entirely retracted, it appears to be nothing more than a simple coffee table. With a
            nifty flip, the Ascend One increases to a height of 65cm, and can serve as a work desk
            or dining table. Additionally, the Ascend One comes with storage space as a quick fix to
            hide unsightly messes.
          </Typography>
        </div>
        <img src={coffeeTable} alt="The Ascend One Coffee Table" className={classes.productImage} />
      </div>

      <Hidden xsDown>
        <div className={classes.productFooterContainer}>
          <img src={tiFurnitureLogo} alt="Ti Furniture" className={classes.tiFurnitureLogo} />

          <div>
            <Typography>All of Ti Furniture’s items are going</Typography>

            <span>at 11% off for eGSS! </span>

            <div>
              Check out their items on{' '}
              <a href="https://www.jumbogold.com/merchant/merchantIds=1265925725543841792">
                Jumbo Gold and Diamonds
              </a>
            </div>
          </div>

          <img src={wizzo} alt="Wizzo" className={classes.wizzo} />
        </div>
      </Hidden>

      <Hidden smUp>
        <div className={classes.mobileProductFooterContainer}>
          <img src={mobileTiFurnitiBg} alt="Ti Furniture" />

          <div>
            <Typography>All of Ti Furniture’s items are going at</Typography>

            <span>11% off for eGSS! </span>

            <div>
              Check out their items
              <br />
              on{' '}
              <a href="https://www.jumbogold.com/merchant/merchantIds=1265925725543841792">
                Jumbo Gold and Diamonds
              </a>
            </div>
          </div>
        </div>
      </Hidden>
    </div>
  );
};

export default withStyles(styles)(TiFurnitureSection);
