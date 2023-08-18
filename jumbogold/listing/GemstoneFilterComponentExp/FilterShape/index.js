import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
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
  const [otherShapes, setOtherShapes] = useState('');

  const handleShapes = (value) => {
    if (!shapesArray.includes(value)) {
      setShapesArray([...shapesArray, value]);
    } else {
      const filtered = shapesArray.filter(shape => value !== shape);
      setShapesArray(filtered);
    }
  };

  /*
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
 */

 useEffect(() => {
  if (shapesArray) {
    if(shapesArray.length < 1 && otherShapes === '') {
      const values = { shapes: undefined }
      gatherFilterValues(values);
    } else if (shapesArray.length < 1 && otherShapes !== '') {
      const values = {
        shapes: otherShapes
      }
      gatherFilterValues(values);
    } else {
      if (otherShapes === '') {
        const values = {
          shapes: shapesArray.join(',')
        }
        gatherFilterValues(values);
      } else {
        const values = {
          shapes: `${shapesArray.join(',')},${otherShapes}`
        }
        gatherFilterValues(values);
      }
    }
  }
}, [shapesArray, otherShapes])

useEffect(() => {
  if(params.shapes) {
    if (arrayOfShapes.indexOf(decodeURIComponent(params.shapes).split(',').slice(-1)[0]) <= -1) {
      setShapesArray(
        decodeURIComponent(params.shapes).split(',').slice(
          0,
          decodeURIComponent(params.shapes).split(',').indexOf(decodeURIComponent(params.shapes).split(',').slice(-1)[0])
        )
      )
      setOtherShapes(decodeURIComponent(params.shapes).split(',').slice(-1)[0])
    } else {
      setShapesArray(decodeURIComponent(params.shapes).split(','))
    }

  } else {
    setShapesArray([]);
  }
}, [params]);

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
            {arrayOfShapes.map((i, idx) => <ShapesComponent key={idx} array={shapesArray} shape={i} commit={handleShapes}/>)}
          </div>
        </div>

        <form
          onKeyDown={(e) => e.stopPropagation()}
          className={classes.inputForm}
        >
          <div>
            <TextField
              className={classes.textField}
              variant="outlined"
              value={otherShapes}
              onChange={(e) => setOtherShapes(e.target.value)}
              size="small"
              placeholder="Input Other Shapes"
             />
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterShape);
