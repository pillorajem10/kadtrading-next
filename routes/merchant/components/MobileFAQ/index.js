import React from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// Styling
import styles from './style';

const MobileFAQ = ({ classes }) => {
  const { profile } = useSelector((state) => state.merchant);

  return (
    <>
      <Typography className={classes.header}>General Questions (FAQ)</Typography>

      <div className={classes.merchantList}>
        {profile.faqs.map(({ title, answer }, index) => (
          <div key={index}>
            <Typography className={classes.faqTitle}>{title}</Typography>
            <Typography className={classes.faqValue} dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default withStyles(styles)(MobileFAQ);
