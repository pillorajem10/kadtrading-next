import React from 'react';

// MUI Stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// Picture
import promotionIcon from 'public/assets/icons/promo.svg';
import giftIcon from 'public/assets/icons/gift.svg';

// Styling
import styles from './style';

const Promotion = ({ classes }) => {
  const { promotionDetails } = useSelector((state) => state.product);

  const handleGoComboDealSection = () => {
    document.querySelector('#_comboDealSection').scrollIntoView({
      behavior: 'smooth',
    });
  };

  if (promotionDetails.length === 0) return null;

  return (
    <div className={classes.promotionTagsContainer}>
      {promotionDetails.map((promotion) => (
        <div
          className={classes.promotionWrapper}
          onClick={() => (promotion.type === 'COMBO' ? handleGoComboDealSection() : null)}
          key={promotion.id}
          style={{ cursor: promotion.type === 'COMBO' ? 'pointer' : 'normal' }}
        >
          {promotion.type === 'FREE_GIFT' ? (
            <div className={classes.promotionTagWrapper} style={{ backgroundColor: '#6900ff' }}>
              <Hidden xsDown>
                <img src={giftIcon} alt="gift icon" className={classes.promotionIcon} />
              </Hidden>

              <Typography className={classes.promotionTag}>Free Gift!</Typography>
            </div>
          ) : (
            <div className={classes.promotionTagWrapper} style={{ backgroundColor: '#000' }}>
              <img src={promotionIcon} alt="promo icon" className={classes.promotionIcon} />

              <Typography className={classes.promotionTag}>Promo!</Typography>
            </div>
          )}

          <Typography
            className={promotion.type === 'FREE_GIFT' ? classes.giftText : classes.promotionText}
          >
            {promotion.name}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(Promotion);
