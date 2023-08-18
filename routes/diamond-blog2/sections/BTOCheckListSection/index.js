import React, { Fragment, useState } from 'react';

// MUI Stuff
import {
  withStyles,
  Typography,
  Hidden,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';

// Picture
import expandIcon from 'public/assets/icons/arrow-dropdown.svg';

// Constant
import { btoCheckList } from '../../utils/const';

// Styling
import styles from './style';

const BTOCheckListSection = ({ classes }) => {
  const [expanded, setExpanded] = useState('panel0');

  const handleTogglePanel = (panel) => setExpanded(panel);

  return (
    <Fragment>
      <Typography className={classes.articleSecondHeader}>Diamond Blog #2</Typography>

      <Hidden xsDown>
        <div className={classes.btoCheckListWrapper}>
          {btoCheckList.map(({ image, title, content }, index) => (
            <div className={classes.btoCheckList} key={index}>
              <div className={classes.btoCheckListImageWrapper}>
                <img src={image} alt={title} className={classes.btoCheckListImage} />
              </div>

              <div className={classes.btoCheckListContentWrapper}>
                <Typography className={classes.btoCheckListTitle}>{title}</Typography>

                {content.map((item, number) => (
                  <Typography className={classes.btoCheckListContent} key={number}>
                    {item}
                  </Typography>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Hidden>

      <Hidden smUp>
        <div className={classes.btoCheckListWrapper}>
          {btoCheckList.map(({ title, content }, index) => (
            <Accordion
              classes={{
                root: classes.Accordion,
                expanded: classes.expanded,
              }}
              expanded={expanded === `panel${index}`}
              onChange={() => handleTogglePanel(`panel${index}`)}
              key={index}
            >
              <AccordionSummary
                className={classes.headerWrapper}
                aria-controls="toggle-panel-content"
                id="panel-header"
              >
                <img
                  src={expandIcon}
                  alt="arrow down"
                  className={
                    expanded === `panel${index}` ? classes.selectedExpandIcon : classes.expandIcon
                  }
                />

                <Typography className={classes.btoCheckListTitle}>{title}</Typography>
              </AccordionSummary>

              <AccordionDetails className={classes.contentWrapper}>
                {content.map((item, number) => (
                  <Typography className={classes.btoCheckListContent} key={number}>
                    {item}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Hidden>
    </Fragment>
  );
};

export default withStyles(styles)(BTOCheckListSection);
