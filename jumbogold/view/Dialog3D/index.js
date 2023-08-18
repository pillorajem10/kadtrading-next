import React from 'react';
import dynamic from 'next/dynamic';

// MUI Stuff
import { Dialog } from '@material-ui/core';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateThreeDProductId } from 'redux/actions';

// components
const ThreeDView = dynamic(() => import('./components/ThreeDView'));

const Dialog3D = () => {
  const dispatch = useDispatch();
  const { threeDProductId } = useSelector((state) => state.ui);

  const handleClose3dDialog = () => dispatch(updateThreeDProductId(''));

  return (
    <Dialog fullScreen open={threeDProductId !== ''} onClose={handleClose3dDialog}>
      <ThreeDView productId={threeDProductId} handleClose={handleClose3dDialog} />
    </Dialog>
  );
};

export default Dialog3D;
