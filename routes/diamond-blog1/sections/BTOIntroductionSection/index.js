import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Styling
import styles from './style';

const BTOIntroductionSection = ({ classes }) => {
  return (
    <div className={classes.btoIntroductionSection}>
      <Typography className={classes.btoIntroductionHeader}>
        GOLD JEWELLERY
      </Typography>

      <Typography className={classes.btoIntroductionContent}>
        Our company buys gold jewellery and pays cash or instaneous bank transfer. 
      </Typography>

      <Typography className={classes.btoIntroductionContent}>
        Our team of experts will assess the purity (karat) of your gold jewellery using professional techniques. Your jewellery will be accurately weighed using jewellery scales. Thereafter, cash will be paid according to the live gold price.
      </Typography>

      <Typography className={classes.btoIntroductionHeader}>
        We Buy Gold Jewelry in Singapore
      </Typography>

      <Typography className={classes.btoIntroductionContent}>
      We buy gold jewelry in Singapore. We buy all types and sizes, be it 14k,18k,22k & 24k gold jewelry. Over at Jumbo Gold & Diamonds, you can be assured about prices as we offer you the best market price for your gold jewellery in Sg. Our team of experts will assess the purity (karat) of your gold jewellery using professional techniques. Your jewellery will be accurately weighed using the most advanced and precision jewellery scales. Thereafter, cash will be paid according to the live gold price.
      </Typography>
    </div>
  );
};

export default withStyles(styles)(BTOIntroductionSection);
