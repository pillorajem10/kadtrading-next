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

const FilterMaterials = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const handleSelectMaterial = (selectedMaterial) => {
    router.push({
      pathname,
      query: addPropToQuery('materials', selectedMaterial, query),
    });
  };

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={filter.Material?.length !== 0}
      disabled={filter.Material?.length === 0}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Materials</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        {filter.Material?.map((material, index) => (
          <div className={classes.listItem} key={index}>
            <Checkbox
              checked={params.materials?.includes(encodeURIComponent(material))}
              onChange={() => handleSelectMaterial(material)}
              className={classes.checkbox}
              disableRipple
              color="primary"
            />
            <Typography
              className={classes.listItemText}
              style={{
                color: params.materials?.includes(encodeURIComponent(material))
                  ? '#000000'
                  : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              {material}
            </Typography>
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterMaterials);
