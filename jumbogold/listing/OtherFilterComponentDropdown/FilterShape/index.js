import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles  } from '@material-ui/core';

// utils
import { addPropToQuery } from 'utils/listing';

// redux
import { useSelector } from 'react-redux';

// components
import ShapesComponent from './components/ShapesComponent'

// styling
import styles from './style';

// utils
import { arrayOfShapes } from './utils';

const FilterShape = ({ classes }) => {
  const {
    listing: { params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [shapesArray, setShapesArray] = useState(undefined);

  const handleShapes = (value) => {
    if (!shapesArray.includes(value)) {
      setShapesArray([...shapesArray, value]);
    } else {
      const filtered = shapesArray.filter(shape => value !== shape);
      setShapesArray(filtered);
    }

    if(!params.shapes) {
      router.push({
        pathname,
        query: addPropToQuery('shapes', value, query),
      });
    }
  };

  useEffect(() => {
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
 }, [shapesArray])

  useEffect(() => {
   if(params.shapes) {
     setShapesArray(decodeURIComponent(params.shapes).split(','))
   } else {
     setShapesArray([]);
   }
  }, [params]);


  return (
    <>
      <div className={classes.filterCaratRange}>
        <b>Shape</b>
          <div style={{marginBottom: 10}} className={classes.diamondsContainer}>
            {arrayOfShapes.map((i, idx) => <ShapesComponent key={idx} shape={i} commit={handleShapes}/>)}
          </div>
      </div>
    </>
  )
}
export default withStyles(styles)(FilterShape);
