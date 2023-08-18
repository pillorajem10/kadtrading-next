import React, { useState, Fragment, useMemo } from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Picture
import arrowDropdown from 'public/assets/icons/arrow-dropdown.svg';

// components
import MobileProductOptionsModal from '../../../MobileProductOptionsModal';

// Styling
import styles from './style';

const ProductOptions = ({
  classes,
  optionList,
  variantId,
  option,
  setOption,
  discountDetails,
  isError,
  isAdded,
}) => {
  const [showProductOptionsModal, setShowProductOptionsModal] = useState(false);

  const handleShowProductOptionsModal = () => setShowProductOptionsModal(true);

  const handleCloseProductOptionsModal = () => setShowProductOptionsModal(false);

  const handleSetProductOption = (option) => {
    setOption(option);
    handleCloseProductOptionsModal();
  };

  const filterProductOptionsList = useMemo(() => {
    return optionList ? optionList.filter((option) => option.variantIds.includes(variantId)) : [];
  }, [optionList, variantId]);

  return (
    <Fragment>
      {filterProductOptionsList.length !== 0 ? (
        <div
          className={isError ? classes.productOptionsError : classes.productOptions}
          onClick={() => (isAdded ? null : handleShowProductOptionsModal())}
          style={{ opacity: isAdded ? 0.6 : 1 }}
        >
          <Typography className={classes.productOptionText}>
            {Object.keys(option).length === 0 ? 'Select an options' : option.name}
          </Typography>
          <img
            src={arrowDropdown}
            alt="arrow dropdown"
            className={classes.productOptionsDropdownIcon}
          />
        </div>
      ) : (
        <div className={classes.emptyProductOptions} />
      )}

      <MobileProductOptionsModal
        open={showProductOptionsModal}
        onClose={handleCloseProductOptionsModal}
        optionList={filterProductOptionsList}
        discountDetails={discountDetails}
        option={option}
        setOption={handleSetProductOption}
      />
    </Fragment>
  );
};

export default withStyles(styles)(ProductOptions);
