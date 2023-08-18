import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, IconButton, Button, InputBase, Typography, Hidden } from '@material-ui/core';

// MUI Icons
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { buildring, ui } from 'redux/actions';

// hooks
import useProduct from 'hooks/useProduct';
import useCart from '../../../../hooks/useCart';

// utils
import regExp from 'utils/regExp';
import { useDebounce } from 'utils/methods';

// styling
import styles from './style';

const BuildRing = ({ classes }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { updateRingCart } = useCart();
  const { quantity, addQuantity, reduceQuantity, addToCart } = useProduct();
  const { 
      buildring: { diamond, setting, final },
      product: { productDetails, variant },
  }= useSelector((state) => state);

  
  const readyBuildRing = useMemo(() => {    
    /*
    if (diamond && setting) {
      // console.log('[1BUILD A RING READDDDDDYYYY!] ', diamond && setting);
      const payload = {
        productId: `BUNDLE-D${diamond.id}-S${setting.id}`,
        productName: `Build A Ring: ${diamond.name} in ${setting.name}`,
        image: diamond.image,
        bundleImage: [diamond.image,setting.image].join(','),
        // variantId: variant.id,
        type: '',
        represent: '',
        price: diamond.retailPrice + setting.retailPrice,
        qty: 1,
        optionId: '',
        itemReplace: false,
        isBundle: true,
      };
      updateRingCart(payload);
    }
    */

    return diamond && setting;
  }, [diamond, setting]);

  const handleRedirect = (v) => {
    if (v === 'diamond') {
      router.push({
        pathname: '/category',
        query: { categoryId: '602b8321818fe44698ddcf2b' },
      });
    }

    if (v === 'gemstone') {
      router.push({
        pathname: '/category',
        query: { categoryId: '6155dbeb745e33800b7bb722' },
      });
    }

    if (v === 'setting') {
      router.push({
        pathname: '/category',
        query: { categoryId: '6067479b6ac0e48b78d50a5d' },
      });
    }
    if (v === 'final') {
      router.push({
        pathname: '/products',
        query: {
          c1: '6067479b6ac0e48b78d50a5d',
          c2: '606747a96ac0e48b78d50a5e',
          type: 'globald',
        },
      });      
    }
  }

  const disableCondition = useMemo(() => {
    let buildRingOk = false;
    if (productDetails.represent === 'setting') {
      if (productDetails.tags !== '') {
        buildRingOk = productDetails.tags.split(',').includes('buildring');
      }
      return !buildRingOk;      
    } else {
      return (
        (regExp.isDefaultNumber(productDetails.price) &&
          regExp.isDefaultNumber(productDetails.salePrice)) ||
        variant.qtyAvailable === 0
      );
    }
  }, [productDetails.represent, productDetails.tags, productDetails.price, productDetails.salePrice, variant.qtyAvailable]);

  const addToBuildRing = () => {
    let res;
    // http://localhost:3002/category/6067479b6ac0e48b78d50a5d

    // diamond or product
    if (productDetails.type === 'product') {
      res = dispatch(buildring.setBuildRingSetting(productDetails));
      dispatch(ui.successNotification({ message: 'Build a Ring: Added Setting.' }));
      if (diamond) {
        handleRedirect('final');
      } else {
        handleRedirect('setting');
      }
    }

    if (productDetails.type === 'diamond' || productDetails.type === 'gemstone') {
      res = dispatch(buildring.setBuildRingDiamond(productDetails));
      dispatch(ui.successNotification({ message: 'Build a Ring: Added Diamond.' }));
      if (setting) {
        handleRedirect('final');
      } else {
        handleRedirect('diamond');
      }
    }
  };

  if (disableCondition) return null;

  return (
    <div className={classes.buildRingWrapper}>

      {/* build ring Button */}
      <Button
        onClick={useDebounce(addToBuildRing, 500)}
        className={classes.buildRingButton}
        color="primary"
        variant="contained"
      >
        {productDetails.type === 'diamond' && 'Select Diamond'}
        {productDetails.type === 'product' && 'Select Setting'}
        {productDetails.type === 'gemstone' && 'Select Gemstone'} 
</Button>      

    </div>
  );
};

export default withStyles(styles)(BuildRing);
