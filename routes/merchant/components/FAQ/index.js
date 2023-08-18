import React, { useState } from 'react';

// MUI Stuff
import { withStyles, Typography, IconButton } from '@material-ui/core';

// MUI Stuff
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// Redux
import { useSelector } from 'react-redux';

// Styling
import styles from './style';

const FAQ = ({ classes }) => {
  const { profile } = useSelector((state) => state.merchant);

  const [expand, setExpand] = useState(false);

  const faqList = expand ? [...profile.faqs] : [...profile.faqs].slice(0, 3);

  return (
    <>
      <Typography className={classes.header}>General Questions (FAQ)</Typography>

      <div className={classes.gridContainer}>
        {faqList.map(({ title, answer }, index) => (
          <div key={index}>
            <Typography className={classes.faqTitle}>{title}</Typography>
            <Typography className={classes.faqValue} dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        ))}
      </div>

      <IconButton
        className={classes.expandIconButton}
        disableRipple
        onClick={() =>
          setExpand((currentValue) => {
            return !currentValue;
          })
        }
      >
        {expand ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
    </>
  );
};

export default withStyles(styles)(FAQ);
