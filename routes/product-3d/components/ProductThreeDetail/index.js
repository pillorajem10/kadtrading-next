import React from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// Component
import ThreeDViewer from 'jumbogold/view/Dialog3D/components/ThreeDViewer';

// Styling
import styles from './style';

const ProductThreeDetail = ({ classes }) => {
  const { productDetails } = useSelector((state) => state.product);

  if (Object.keys(productDetails).length === 0) return null;

  return (
    <div className={classes.layout}>
      <ThreeDViewer productId={productDetails.id} />
    </div>
  );
};

export default withStyles(styles)(ProductThreeDetail);
