import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, IconButton, Button, InputBase, Typography, Hidden } from '@material-ui/core';

// MUI Icons
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { listing, ui } from 'redux/actions';

// hooks
import useProduct from 'hooks/useProduct';

// utils
import regExp from 'utils/regExp';
import { useDebounce } from 'utils/methods';

// styling
import styles from './style';

const CompareProduct = ({ classes }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { quantity, addQuantity, reduceQuantity, addToCart } = useProduct();
  const { productDetails, variant } = useSelector((state) => state.product);
  const { productComparisonList } = useSelector((state) => state.listing);  
  const disableCondition = useMemo(() => {
    return productDetails.represent === 'setting';
  }, [productDetails.represent]);

  const existing = productComparisonList.find(p => p.id === productDetails.id);
  
  const addToCompareList = () => {
    let res;
    
    if (existing) {
      router.push('/diamondcompare');
      /*
        res = dispatch(listing.removeToCompareList(productComparisonList, productDetails));
        dispatch(ui.successNotification({ message: 'Removed to compare list.' }));    
      */
    } else {
      res = dispatch(listing.addToCompareList(productDetails));
      dispatch(ui.successNotification({ message: 'Added to compare list.' }));    
    }
  };

  if (disableCondition) return null;

  return (
    <div className={classes.buildRingWrapper}>

      {/* build ring Button */}
      <Button
        onClick={useDebounce(addToCompareList, 500)}
        className={classes.buildRingButton}
        color="primary"
        variant="contained"
      >
        {existing ? 'View in Compare List' : 'Add to Compare List'}
      </Button>
    </div>
  );
};

export default withStyles(styles)(CompareProduct);
