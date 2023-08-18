import React from 'react';

// MUI Stuff
import { withStyles, IconButton, Typography } from '@material-ui/core';

// Styling
import styles from './style';

const ProductCardProductVariant = ({ classes, item }) => {
  const handleRenderProductVariant = (variant) => {
    let renderer = null;

    if (variant.label === 'COLOR')
      renderer = (
        <div
          className={classes.variantIcon}
          style={{ backgroundColor: `rgba(${variant.color})` }}
        />
      );

    if (variant.label === 'ICON')
      renderer = <img className={classes.variantIcon} src={variant.icon} alt="variant" />;

    return renderer;
  };

  return (
    <div className={classes.variantUnit}>
      {item.variants.slice(0, 2).map((variant, index) => {
        return (
          <IconButton className={classes.variantIconUnit} aria-label="select color" key={index}>
            {handleRenderProductVariant(variant)}
          </IconButton>
        );
      })}

      <Typography className={classes.variantText}>
        {item.variants.length > 3 ? `+${item.variants.slice(2).length}` : ''}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(ProductCardProductVariant);
