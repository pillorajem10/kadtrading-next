import React from 'react';

// MUI Stuff
import { Typography, withStyles, Hidden } from '@material-ui/core';

// Picture
import communeCoffeeTable from 'public/assets/images/article/article-4/commune-coffee-table.png';

// Styling
import styles from './style';

const CommuneSection = ({ classes }) => {
  const renderProductImage = () => (
    <img
      src={communeCoffeeTable}
      alt="Commune Coffee Table"
      className={classes.communeCoffeeTable}
    />
  );

  return (
    <div className={classes.section}>
      <div className={classes.productContainer}>
        <div>
          <div className={classes.headerContainer}>
            <Typography className={classes.headerNumber}>4.</Typography>

            <Typography className={classes.header}>
              <span>33% off</span> Commune <br />
              coffee table
            </Typography>
          </div>

          <Hidden smUp>{renderProductImage()}</Hidden>

          <div className={classes.productDesc}>
            A classy coffee table can serve as both a living room centrepiece and a dining surface.
            Thus, Commune&apos;s{' '}
            <a href="https://www.jumbogold.com/product/1303230810996191232">
              Trigg Coffee Table
            </a>
            , with its cool white Italian Carrara marble top and solid artisanal-crafted American
            oak legs offer a solid addition to any home!
            <br />
            <br />
            The best part? The coffee table is going at a 33% discount, which means it’s now going
            for <span className={classes.productPrice}>$354.50</span>, from the usual price of $529!{' '}
            <a href="https://www.jumbogold.com/product/1303230810996191232">
              The Trigg Coffee Table
            </a>{' '}
            here now!
            <br />
            <br />
            Check out more{' '}
            <a href="https://www.jumbogold.com/merchant/merchantIds=1225304256464625664">
              Commune deals
            </a>{' '}
            on their merchant minisite here.
          </div>
        </div>

        <Hidden xsDown>{renderProductImage()}</Hidden>
      </div>
    </div>
  );
};

export default withStyles(styles)(CommuneSection);
