import React, { useState } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { withStyles, Hidden, IconButton, Badge, Typography } from '@material-ui/core';

// MUI Icons
import TuneIcon from 'mdi-react/TuneIcon';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { buildring } from 'redux/actions';

// components
import { MobileFilterPageSize, MobileFilterOrder } from 'jumbogold/listing/common';
import CategorySelection from '../../components/CategorySelection';
import MobileFilterSideBar from '../../components/MobileFilterSideBar';

// utils
import { formatPrice } from 'utils/methods.js';

// hooks
import useCart from '../../../../hooks/useCart';

// picture
import shi from 'public/assets/images/wizzo/shi.png';

// styling
import styles from './style';

const BuildRingSection = ({ classes, fullListing, pageSize, setPageSize }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { updateRingCart } = useCart();
  const {
    common: { currency },
    listing: { filterCount },
    buildring: { diamond, setting, final }
  } = useSelector((state) => state);

  const [showFilterSideBar, setShowFilterSideBar] = useState(false);

  const handleShowFilterSideBar = () => setShowFilterSideBar(true);

  const handleCloseFilterSideBar = () => setShowFilterSideBar(false);

  const handleRedirect = (v) => {
    if (v === 'final') {

      if (diamond && setting) {
        let diamondImage = diamond.image !== '' ? diamond.image : 'https://hapichair.com/error-pages/isabella-mendes.jpg';
        let settingImage = setting.image !== '' ? setting.image : 'https://hapichair.com/error-pages/isabella-mendes.jpg';

        const payload = {
          productId: `BUNDLE-D${diamond.id}-S${setting.id}`,
          productName: `Build A Ring: ${diamond.name} in ${setting.name}`,
          image: diamondImage,
          bundleImage: [diamondImage,settingImage].join(','),
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
    }

    if (v === 'diamond') {
      router.push({
        pathname: '/category',
        query: { categoryId: '6067479b6ac0e48b78d50a5d' },
      });

    }
    if (v === 'setting') {
      router.push({
        pathname: '/category',
        query: { categoryId: '602b8321818fe44698ddcf2b' },
      });
    }     
  }

  const handleViewProduct = (v) => {
    if (v.represent === 'globald') {
      router.push(`/globald/${v.id}`);
    }
    if (v.type === 'diamond' && v.represent === 'inhouse') {
      router.push(`/inhouse/${v.id}`);
    }
    if (v.represent = 'setting') {
      router.push(`/setting/${v.id}`);
    }
    if (v.type === 'gemstone' && v.represent === 'inhouse') {
      router.push(`/gemstone/${v.id}`);
    }
  };
  
  const handleRemoveProduct = (v) => {
    if (v === 'setting') {
      dispatch(buildring.setBuildRingSetting(undefined));
    }
    
    if (v === 'diamond') {
      dispatch(buildring.setBuildRingDiamond(undefined));
    }
  };

  return (
    <>
      <div className={classes.buildRingContainer}>

        <div className={setting ? classes.buildRingBox2 : classes.buildRingBox1}>
          <div onClick={() => handleRedirect('setting')} className={classes.buildRingText}>
            <Typography className={classes.buildRingText1}>CHOOSE A</Typography>
            <Typography className={classes.buildRingText2}>SETTING</Typography>              
          </div>
          
          {setting &&
            <div className={classes.buildRingImgBox}>
              <div className={classes.buildRingImgWrap}>
                <img className={classes.buildRingImg} src={setting.image} alt="ring" />
              </div>
              <div className={classes.buildRingImgText}>
                <Typography className={classes.buildRingPrice}>
                  {formatPrice(setting.retailPrice)}
                </Typography>
                <div style={{ display: 'flex' }}>
                  <Typography className={classes.buildRingAction} onClick={() => handleViewProduct(setting)}>VIEW</Typography>&nbsp;|&nbsp;
                  <Typography className={classes.buildRingAction} onClick={() => handleRemoveProduct('setting')}>REMOVE</Typography>                                
                </div>
              </div>
            </div>          
          }               
        </div>

        <div className={diamond ? classes.buildRingBox2 : classes.buildRingBox1}>
          <div onClick={() => handleRedirect('diamond')} className={classes.buildRingText}>
            <Typography className={classes.buildRingText1}>CHOOSE A</Typography>
            <Typography className={classes.buildRingText2}>DIAMOND/GEMSTONE</Typography>              
          </div>
          
          {diamond &&
            <div className={classes.buildRingImgBox}>
              <div className={classes.buildRingImgWrap}>
                <img className={classes.buildRingImg} src={diamond.image} alt="ring" />
              </div>
              <div className={classes.buildRingImgText}>
                <Typography className={classes.buildRingPrice}>
                  {formatPrice(diamond.retailPrice)}
                </Typography>
                <div style={{ display: 'flex' }}>
                  <Typography className={classes.buildRingAction} onClick={() => handleViewProduct(diamond)}>VIEW</Typography>&nbsp;|&nbsp;
                  <Typography className={classes.buildRingAction} onClick={() => handleRemoveProduct('diamond')}>REMOVE</Typography>                                
                </div>
              </div>
            </div>                        
          }
        </div>          

        <div className={(final.diamond && final.setting) ? classes.buildRingBox2 : classes.buildRingBox1}>
          <div onClick={() => handleRedirect('final')} className={classes.buildRingText}>
            <Typography className={classes.buildRingText1}>REVIEW</Typography>
            <Typography className={classes.buildRingText2}>COMPLETED RING</Typography>              
          </div>
          <div className={classes.buildRingImgBox}>  
          </div>              
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(BuildRingSection);
