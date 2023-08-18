import React from 'react';

// MUI Stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// Picture
import wizzo from 'public/assets/images/article/article-2/article-2-wizzo.png';

// Styling
import styles from './style';

const SofaShoppingSection = ({ classes }) => {
  return (
    <div className={classes.sofaShoppingSection}>
      <div className={classes.sofaShoppingContentWrapper}>
        <Hidden xsDown>
          <div className={classes.sofaShoppingContent}>
            <Typography className={classes.sofaShoppingHeaderText}>
              Sofa shopping made easy
            </Typography>

            <Typography className={classes.sofaShoppingContentText}>
              In most Singapore homes, the sofa tends to take centre stage, as modern HDB designs
              tend to emphasise the living room, and by extension, the largest piece in the room.
              However, first-time owners may face issues in choosing an appropriate sofa for their
              new home. After all, sofas come in a myriad of finishes, configurations, and sizes.
              How then, does one make the best choice in choosing a sofa?
            </Typography>
            <br />
            <br />
            <Typography className={classes.sofaShoppingContentText}>
              To help in the decision making process, we spoke to{' '}
              <a
                href="https://www.wtpstyle.com"
                className={classes.sofaShopingContentLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                WTP The Furniture
              </a>{' '}
              Company director Naazli Somjee, who had some tips for picking out a new sofa.
            </Typography>
          </div>
          <img src={wizzo} alt="wizzo" className={classes.sofaShoppingImage} />
        </Hidden>

        <Hidden smUp>
          <div className={classes.sofaShoppingContent}>
            <Typography className={classes.sofaShoppingHeaderText}>
              Sofa shopping made easy
            </Typography>

            <Typography className={classes.sofaShoppingContentText}>
              In most Singapore homes, the sofa tends to take centre stage, as mordern HDB designs
              tend to emphasise the living room, and by extension, the largest piece in the room.
              However, first-time owners may face issues in choosing an appropriate sofa for their
              new home. After all, sofas come in a myriad of finishes, configurations, and sizes.
              How then, does one make the best choice in choosing a sofa?
            </Typography>

            <img src={wizzo} alt="wizzo" className={classes.sofaShoppingImage} />

            <Typography className={classes.sofaShoppingContentText}>
              To help in the decision making process, we spoke to{' '}
              <a
                href="https://www.wtpstyle.com/"
                className={classes.sofaShopingContentLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                WTP The Furniture
              </a>{' '}
              Company director Naazli Somjee, who had some tips for picking out a new sofa.
            </Typography>
          </div>
        </Hidden>
      </div>
    </div>
  );
};

export default withStyles(styles)(SofaShoppingSection);
