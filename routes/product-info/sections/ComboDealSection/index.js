import React, { useEffect, useState, useCallback } from 'react';

// MUI Stuff
import { withStyles, Typography, Divider } from '@material-ui/core';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { product } from 'redux/actions';

// components
import { ProductCardSlider } from 'jumbogold/product';

// picture
import comboDealPic from 'public/assets/images/wizzo/shi.png';

// styling
import styles from './style';

const ComboDealSection = ({ classes }) => {
  const dispatch = useDispatch();
  const {
    product: { productDetails, promotionDetails },
  } = useSelector((state) => state);

  const [comboProductList, setComboProductList] = useState([]);

  const handleGetProductBreifs = useCallback(
    async (payload) => {
      const res = await dispatch(product.getProductBriefs(payload));
      const { success, data } = res;

      if (success) {
        setComboProductList(data);
      }
    },
    [dispatch],
  );

  const handleGetPromotionDetails = useCallback(
    async (productId) => {
      const res = await dispatch(product.getProductPromotionDetailsById(productId));
      const { success, data } = res;

      if (success) {
        const comboDeal = data.find((item) => item.type === 'COMBO');

        if (comboDeal) {
          const { rules } = comboDeal;

          const filterMainProduct = rules.filter((item) => item.productId !== productId);

          const formatProductIds = filterMainProduct.map((item) => item.productId);

          handleGetProductBreifs(formatProductIds);
        }
      }
    },
    [dispatch, handleGetProductBreifs],
  );

  useEffect(() => {
    if (productDetails.id) {
      handleGetPromotionDetails(productDetails.id);
    }

    return () => {
      setComboProductList([]);
    };
  }, [productDetails.id, handleGetPromotionDetails]);

  const handleShowComboDeal = () => {
    const filterComboDeal = promotionDetails.find((item) => item.type === 'COMBO');

    return filterComboDeal && filterComboDeal.active;
  };

  let renderer = null;

  if (handleShowComboDeal()) {
    renderer = (
      <>
        <section className={classes.section} id="_comboDealSection">
          <div className={classes.headerContainer}>
            <img src={comboDealPic} alt="combo deal" className={classes.comboDealIcon} />

            <div>
              <Typography className={classes.comboDeal}>Combo Deal</Typography>
              <Typography className={classes.comboDealText}>{promotionDetails.name}</Typography>
            </div>
          </div>

          <ProductCardSlider productList={comboProductList} comboDeal />
        </section>

        <Divider />
      </>
    );
  }

  return renderer;
};

export default withStyles(styles)(ComboDealSection);
