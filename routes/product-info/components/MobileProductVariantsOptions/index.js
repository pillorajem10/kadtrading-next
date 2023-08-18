import React, { useState, useEffect, useMemo } from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { product } from 'redux/actions';

// components
import { MobileProductOptionsModal } from 'jumbogold/product';

// Picture
import downButton from 'public/assets/icons/arrow-dropdown.svg';

// Utils
import { formatPrice } from 'utils/methods';
import { calculateOptionPrice } from 'utils/calculator';

// Styling
import styles from './style';

const MobileProductVariantsOption = ({ classes }) => {
  const dispatch = useDispatch();
  const {
    productDetails,
    variant: { id },
    isDiscount,
    discountPercent,
    isPercentDiscount,
  } = useSelector((state) => state.product);

  const [openVariantsOptionModal, setOpenVariantsOptionModal] = useState(false);
  const [option, setOption] = useState('');
  const [variantOption, setVariantOption] = useState({});

  useEffect(() => {
    setOption('');
    setVariantOption({});
  }, [id]);

  const handleOpenVariantsOptionModal = () => setOpenVariantsOptionModal(true);

  const handleCloseVariantsOptionModal = () => setOpenVariantsOptionModal(false);

  const handleSelectVariantsOption = (selectedOption) => {
    const { price } = selectedOption;
    const optionId = selectedOption.id;

    const optionPrice = calculateOptionPrice(price, isDiscount, isPercentDiscount, discountPercent);

    const productOption = {
      optionId,
      optionOriginalPrice: price,
      optionPrice,
    };

    dispatch(product.setProductOption(productOption));

    setOption(optionId);
    setVariantOption(selectedOption);

    handleCloseVariantsOptionModal();
  };

  const renderVariantOption = (item) => {
    const optionPrice = calculateOptionPrice(
      item.price,
      isDiscount,
      isPercentDiscount,
      discountPercent,
    );

    let renderer = null;

    if (item.price !== 0 && isPercentDiscount) {
      renderer = (
        <div className={classes.listItemPriceWrapper}>
          <Typography className={classes.listItemText}>+{formatPrice(optionPrice)}</Typography>
          <Typography className={classes.listItemOriginalText}>
            +{formatPrice(item.price)}
          </Typography>
        </div>
      );
    }

    if (item.price !== 0 && !isPercentDiscount) {
      renderer = (
        <Typography className={classes.listItemText}>+{formatPrice(optionPrice)}</Typography>
      );
    }

    return (
      <div className={classes.listItemTextWrapper}>
        <Typography className={classes.listItemText}>{item.name}</Typography>
        {renderer}
      </div>
    );
  };

  const filterVariantsOptionsList = useMemo(
    () => productDetails.options?.filter((opt) => opt.variantIds.includes(id)) ?? [],
    [productDetails.options, id],
  );

  if (filterVariantsOptionsList.length === 0) return null;

  return (
    <>
      <Typography className={classes.productVariantsOptionTitle}>2.Select an option</Typography>

      <div className={classes.productVariantsOption} onClick={handleOpenVariantsOptionModal}>
        {option === '' ? (
          <Typography className={classes.variantOptionsText}>Select an options</Typography>
        ) : (
          renderVariantOption(variantOption)
        )}
        <img src={downButton} alt="down button" height={30} width={30} />
      </div>

      {/* Variants Option Modal */}
      <MobileProductOptionsModal
        open={openVariantsOptionModal}
        onClose={handleCloseVariantsOptionModal}
        optionList={filterVariantsOptionsList}
        discountDetails={{ isDiscount, isPercentDiscount, discountPercent }}
        setOption={handleSelectVariantsOption}
        option={variantOption}
      />
    </>
  );
};

export default withStyles(styles)(MobileProductVariantsOption);
