import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// Styling
import styles from './style';

const MerchantFAQ = ({ classes }) => {
  const { profile } = useSelector((state) => state.merchant);

  return (
    <div className={classes.merchantFAQ}>
      {profile?.faqs.map(({ title, answer }, index) => (
        <div key={index} className={classes.faqContainer}>
          <Typography className={classes.faqTitle}>{title}</Typography>
          <Typography dangerouslySetInnerHTML={{ __html: answer }} className={classes.faqAnswer} />
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(MerchantFAQ);
