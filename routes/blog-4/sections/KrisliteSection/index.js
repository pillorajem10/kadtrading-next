import React from 'react';

// MUI Stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// Picture
import krisliteLogo from 'public/assets/images/article/article-4/krislite-logo.png';
import tableLamp from 'public/assets/images/article/article-4/krislite-table-lamp.jpg';
import pendantLamp from 'public/assets/images/article/article-4/krislite-pendant-lamp.jpg';

// Styling
import styles from './style';

const KrisliteSection = ({ classes }) => {
  const renderTableLampDesc = () => (
    <div className={classes.tableLampDesc}>
      The{' '}
      <a href="https://www.jumbogold.com/product/1266301436956790784">C040021 Table Lamp</a>{' '}
      ($50, usual price $100) is ideal for both the work desk and bedside table.
    </div>
  );

  const renderPendantLampDesc = () => (
    <div className={classes.pendantLampDesc}>
      The{' '}
      <a href="https://www.jumbogold.com/product/1266301419265216512">
        C20251 005 Pendant lamp
      </a>{' '}
      ($37, usual price $74) comes with an futuristic chrome finish, making it perfect for
      illuminating the dining table.
    </div>
  );

  return (
    <div className={classes.section}>
      <div className={classes.headerContainer}>
        <div className={classes.headerInnerContainer}>
          <Typography className={classes.headerNumber}>2.</Typography>

          <Typography className={classes.header}>
            <span>50% off ALL</span> Krislite lights
            <br />
            and lamps
          </Typography>
        </div>

        <Hidden xsDown>
          <img src={krisliteLogo} alt="Krislite Logo" className={classes.krisliteLogo} />
        </Hidden>
      </div>

      <Typography className={classes.description}>
        Lights can add a lot to the overall character of a room, and are an indispensable part of
        any interior design. Krislite’s lights and lamps are distinctive and are equally adept as
        part of an overall theme, or as a centrepiece of their own.
      </Typography>

      <div className={classes.productContainer}>
        <Hidden smUp>{renderTableLampDesc()}</Hidden>

        <div className={classes.tableLampContainer}>
          <img src={tableLamp} alt="Krislite Table Lamp" className={classes.tableLamp} />

          <div className={classes.productDescContainer}>
            <Typography className={classes.tableLampName}>Table Lamp</Typography>

            <Hidden xsDown>{renderTableLampDesc()}</Hidden>
          </div>
        </div>

        <Hidden smUp>{renderPendantLampDesc()}</Hidden>

        <div className={classes.pendantLampContainer}>
          <img src={pendantLamp} alt="Krislite Pendant Lamp" className={classes.pendantLamp} />

          <div className={classes.productDescContainer}>
            <Typography className={classes.pendantLampName}>Pendant Lamp</Typography>

            <Hidden xsDown>{renderPendantLampDesc()}</Hidden>
          </div>
        </div>
      </div>

      <div className={classes.checkoutHere}>
        Check out more of{' '}
        <a href="https://www.jumbogold.com/merchant/merchantIds=1265929146560790528">
          Krislite’s products
        </a>{' '}
        here
      </div>
    </div>
  );
};

export default withStyles(styles)(KrisliteSection);
