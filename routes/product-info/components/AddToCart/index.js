import React, { useMemo } from 'react';

// MUI Stuff
import { withStyles, IconButton, Button, InputBase, Typography, Hidden } from '@material-ui/core';

// MUI Icons
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

// redux
import { useSelector } from 'react-redux';

// hooks
import useProduct from 'hooks/useProduct';

// utils
import regExp from 'utils/regExp';
import { useDebounce } from 'utils/methods';  

// styling
import styles from './style';

const AddToCart = ({ classes }) => {
  const { quantity, addQuantity, reduceQuantity, addToCart } = useProduct();

  const { productDetails, variant } = useSelector((state) => state.product);

  const disableCondition = useMemo(() => {
    return (
      (regExp.isDefaultNumber(productDetails.price) &&
        regExp.isDefaultNumber(productDetails.salePrice)) ||
      variant.qtyAvailable === 0
    );
  }, [productDetails.price, productDetails.salePrice, variant.qtyAvailable]);

  return (
    <div className={classes.addToCartWrapper}>
      <Hidden xsDown>
        <div className={classes.quantityWrapper}>   
          <div>
          </div>
        </div>
      </Hidden>
      
        {/*
      <Hidden xsDown>

        <div className={classes.quantityWrapper}>
          <div className={classes.quantityActionsWrapper}>


            <IconButton
              onClick={reduceQuantity}
              disableRipple
              className={classes.quantityIconButton}
              aria-label="Minus"
              disabled={disableCondition}
            >
              <RemoveIcon className={classes.quantityIcon} />
            </IconButton>


            <InputBase className={classes.quantityText} inputProps={{ value: quantity }} />


            <IconButton
              onClick={addQuantity}
              disableRipple
              className={classes.quantityIconButton}
              aria-label="Add"
              disabled={disableCondition}
            >
              <AddIcon className={classes.quantityIcon} />
            </IconButton>
          </div>

                    {variant.qtyAvailable < 10 && (
            <Typography className={classes.quantityLeft}>
              {variant.qtyAvailable !== 0
                ? `Only ${variant.qtyAvailable} Stock left`
                : 'Out of stock'}
            </Typography>
          )}
        </div>
      </Hidden>
*/}

      {/* Add to cart Button */}
      <Button
        disabled={disableCondition}
        onClick={useDebounce(addToCart, 500)}
        className={classes.addToCartButton}
        color="primary"
        variant="contained"
      >
        Add to cart
      </Button>
    </div>
  );
};

export default withStyles(styles)(AddToCart);
