import React from 'react';
import { useRouter } from 'next/router';

// Mui Stuff
import {
  withStyles,
  Checkbox,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// picture
import expandIcon from 'public/assets/icons/expand.png';

// utils
import { addPropToQuery } from 'utils/listing';

// styling
import styles from './style';

const FilterDisplay = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const processDisplayKey = (display) => {
    let displayKey = '';

    if (display === 'Sale') displayKey = 'sale';

    if (display === 'Featured') displayKey = 'featured';

    if (display === '3D') displayKey = 'enable3D';

    return displayKey;
  };

  const handleSelectDisplay = (key) => {
    const display = processDisplayKey(key);

    router.push({
      pathname,
      query: addPropToQuery(display, 'true', query),
    });
  };

  return (
    <Accordion className={classes.layout} defaultExpanded>
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Display</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        <div className={classes.listItem}>
          <Checkbox
            checked={!!params.enable3D}
            onChange={() => handleSelectDisplay('3D')}
            className={classes.checkbox}
            disableRipple
            color="primary"
          />
          <Typography
            className={classes.listItemText}
            style={{
              color: params.enable3D ? '#000000' : 'rgba(0, 0, 0, 0.6)',
            }}
          >
            3D
          </Typography>
        </div>

        {filter.Display?.map((display, index) => (
          <div className={classes.listItem} key={index}>
            <Checkbox
              checked={!!params[processDisplayKey(display)]}
              onChange={() => handleSelectDisplay(display)}
              className={classes.checkbox}
              disableRipple
              color="primary"
            />
            <Typography
              className={classes.listItemText}
              style={{
                color: params[processDisplayKey(display)] ? '#000000' : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              {display}
            </Typography>
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterDisplay);
