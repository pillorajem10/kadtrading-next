import React from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
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

const FilterStyles = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const handleSelectStyle = (selectedStyle) => {
    router.push({
      pathname,
      query: addPropToQuery('styles', selectedStyle, query),
    });
  };

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={filter.Styles?.length !== 0}
      disabled={filter.Styles?.length === 0}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Styles</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        {filter.Styles?.map((item, index) => (
          <div className={classes.listItem} key={index}>
            <Checkbox
              checked={params.styles?.includes(encodeURIComponent(item))}
              onChange={() => handleSelectStyle(item)}
              className={classes.checkbox}
              disableRipple
              color="primary"
            />
            <Typography
              className={classes.listItemText}
              style={{
                color: params.styles?.includes(encodeURIComponent(item))
                  ? '#000000'
                  : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              {item}
            </Typography>
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterStyles);
