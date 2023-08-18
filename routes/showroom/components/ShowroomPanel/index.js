import React, { useState } from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// hooks
import useDisclosure from 'hooks/useDisclosure';

// styling
import styles from 'routes/showroom/style';

// components
import ShowroomComponent from '../ShowroomComponent';
import ShowroomProductModal from '../ShowroomProductModal';

const initialValues = {
  productTitle: '',
  productBrand: '',
  productMerchant: '',
  productWidth: '',
  productHeight: '',
  productDepth: '',
};

const ShowroomPanel = ({ productSet }) => {
  const [selected, setSelected] = useState(initialValues);

  const {
    isOpen: showProductModal,
    onOpen: handleShowProductModal,
    onClose: handleCloseProductModal,
  } = useDisclosure();

  const handleClose = () => {
    setSelected(initialValues);
    handleCloseProductModal();
  };

  const handleSelectProduct = (product) => {
    setSelected(product);
    handleShowProductModal();
  };

  return (
    <>
      <ShowroomProductModal open={showProductModal} product={selected} onClose={handleClose} />

      <ShowroomComponent productSet={productSet} onSelect={handleSelectProduct} />
    </>
  );
};

export default withStyles(styles)(ShowroomPanel);
