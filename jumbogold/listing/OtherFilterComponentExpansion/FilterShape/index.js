import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';

// components
import ShapesComponent from './components/ShapesComponent'

// redux
import { useSelector } from 'react-redux';

// picture
import expandIcon from 'public/assets/icons/expand.png';

// utils
import { arrayOfShapes } from './utils';

// styling
import styles from './style';

const FilterShape = ({ classes, gatherFilterValues, clearFilters }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  // const router = useRouter();
  // const { query, pathname } = router;

  const [shapesArray, setShapesArray] = useState(undefined);

  const handleShapes = (value) => {
    if (!shapesArray.includes(value)) {
      setShapesArray([...shapesArray, value]);
    } else {
      const filtered = shapesArray.filter(shape => value !== shape);
      setShapesArray(filtered);
    }
  };

  useEffect(() => {
    /*
    if (shapesArray) {
      if (shapesArray.length >= 1) {
        if(query.shapes) {
          router.push({
            pathname,
            query: {
              ...query,
              shapes: shapesArray.join(','),
            },
          });
        }
      }

      if (shapesArray.length <= 0) {
        if (query.shapes && query.shapes.split(',').length === 1) {
          router.push({
            pathname,
            query: addPropToQuery('shapes', query.shapes, query),
          });
        }
      }
   }
   */

   if (shapesArray) {
     if(shapesArray.length < 1) {
       const values = { shapes: undefined }
       gatherFilterValues(values);
     } else {
       const values = {
         shapes: shapesArray.join(',')
       }
       gatherFilterValues(values);
     }
   }
 }, [shapesArray])

  useEffect(() => {
    if(params.shapes) {
      setShapesArray(decodeURIComponent(params.shapes).split(','))
    } else {
      setShapesArray([]);
    }
  }, []);

  useEffect(() => {
    if (clearFilters !== undefined) {
      setShapesArray([]);
    }
  }, [clearFilters])

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={filter.maximumShapes !== null && filter.minimumShapes !== null}
      disabled={filter.maximumShapes === null && filter.minimumShapes === null}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Shapes</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        <div className={classes.filterCaratRange}>
          <div style={{marginBottom: 10}} className={classes.diamondsContainer}>
            {arrayOfShapes.map(index => {
              return (
                <ShapesComponent array={shapesArray} shape={index} commit={handleShapes}/>
              )
            })}
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterShape);
