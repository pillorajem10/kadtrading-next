import React, { useState, useCallback, useEffect } from 'react';

// MUI Stuff
import { withStyles, Tabs, Tab, Typography, Button } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// Utils
import regExp from 'utils/regExp';

// Styling
import styles from './style';

const ProductInfoTabs = ({ classes }) => {
  const { product: { productDetails}} = useSelector((state) => state);

  const [tabValue, setTabValue] = useState(0);

  const handleSetTabDefaultValue = useCallback(() => {
    if (!regExp.isEmptyObject(productDetails)) {
      if (productDetails.description !== '') {
        setTabValue(0);
      }
    }
  }, [productDetails]);

  useEffect(() => {
    handleSetTabDefaultValue();

    return () => setTabValue(1);
  }, [productDetails, handleSetTabDefaultValue]);

  const handleChangeTab = (event, value) => setTabValue(value);

  const handleClickInfoButton = () =>
    document.querySelector('#_productDescriptionSection').scrollIntoView({
      behavior: 'smooth',
    });

  if (regExp.isEmptyObject(productDetails)) return null;

  return (
    <>
      <div className={classes.tabsWrapper}>
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          classes={{ indicator: classes.tabIndicator }}
        >
          <Tab
            style={{
              display: productDetails.description !== '' ? 'block' : 'none',
            }}
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Overview"
          />
          {productDetails.represent !== 'setting' &&
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Product Info"
            />          
          }

        </Tabs>

        {/* Information Icon */}
        <Button
          className={classes.moreInfoButton}
          color="default"
          onClick={handleClickInfoButton}
          variant="outlined"
        >
          MORE INFO
        </Button>
      </div>

      {/* Description */}
      {tabValue === 0 && (
        <div className={classes.descriptionWrapper}>
          <Typography dangerouslySetInnerHTML={{ __html: productDetails.name }} />
        </div>
      )}

      {/* Attributes */}
      {productDetails.type === 'diamond' && productDetails.represent === 'inhouse' && tabValue === 1 && (
        <div className={classes.attributesContainer}>
          <div className={classes.attributesWrapper}>
            <Typography className={classes.attributesName}>Stock Number</Typography>
            <Typography className={classes.attributesValue}>{productDetails.stockNo}</Typography>
          </div>

          <div className={classes.attributesWrapper}>
            <Typography className={classes.attributesName}>Grading Lab</Typography>
            <Typography className={classes.attributesValue}>{productDetails.lab}</Typography>
          </div>

          <div className={classes.attributesWrapper}>
            <Typography className={classes.attributesName}>Depth %</Typography>
            <Typography className={classes.attributesValue}>{productDetails.depth}</Typography>
          </div>

          <div className={classes.attributesWrapper}>
            <Typography className={classes.attributesName}>Table %</Typography>
            <Typography className={classes.attributesValue}>{productDetails.table}</Typography>
          </div>

          <div className={classes.attributesWrapper}>
            <Typography className={classes.attributesName}>Measurements</Typography>
            <Typography className={classes.attributesValue}>
              {productDetails.represent === 'inhouse'
              ? productDetails.measurements
              : `${productDetails.meas_length} x ${productDetails.meas_width} x ${productDetails.meas_depth} MM`
              }
            </Typography>
          </div>
        </div>
      )}

      {productDetails.type === 'gemstone' && productDetails.represent === 'inhouse' && tabValue === 1 && (
        <div className={classes.attributesContainer}>
          <div className={classes.attributesWrapper}>
            <Typography className={classes.attributesName}>Stock Number</Typography>
            <Typography className={classes.attributesValue}>{productDetails.stockNumber}</Typography>
          </div>

          <div className={classes.attributesWrapper}>
            <Typography className={classes.attributesName}>Grading Lab</Typography>
            <Typography className={classes.attributesValue}>{productDetails.lab}</Typography>
          </div>

          <div className={classes.attributesWrapper}>
            <Typography className={classes.attributesName}>Shape</Typography>
            <Typography className={classes.attributesValue}>{productDetails.shape}</Typography>
          </div>

          <div className={classes.attributesWrapper}>
            <Typography className={classes.attributesName}>Variety</Typography>
            <Typography className={classes.attributesValue}>{productDetails.variety}</Typography>
          </div>

          <div className={classes.attributesWrapper}>
            <Typography className={classes.attributesName}>Primary Colour</Typography>
            <Typography className={classes.attributesValue}>{productDetails.primaryColour}</Typography>
          </div>
        </div>
      )}


      {productDetails.represent === 'globald' && tabValue === 1 && (
        <div className={classes.attributesContainer}>
          <div className={classes.attributesWrapper}>
            <Typography className={classes.attributesName}>Stock Number</Typography>
            <Typography className={classes.attributesValue}>{productDetails.stock_num}</Typography>
          </div>

          <div className={classes.attributesWrapper}>
            <Typography className={classes.attributesName}>Grading Lab</Typography>
            <Typography className={classes.attributesValue}>{productDetails.lab}</Typography>
          </div>

          <div className={classes.attributesWrapper}>
            <Typography className={classes.attributesName}>Depth %</Typography>
            <Typography className={classes.attributesValue}>{productDetails.depth_percent}</Typography>
          </div>

          <div className={classes.attributesWrapper}>
            <Typography className={classes.attributesName}>Table %</Typography>
            <Typography className={classes.attributesValue}>{productDetails.table_percent}</Typography>
          </div>

          <div className={classes.attributesWrapper}>
            <Typography className={classes.attributesName}>Measurements</Typography>
            <Typography className={classes.attributesValue}>
              ${productDetails.meas_length} x ${productDetails.meas_width} x ${productDetails.meas_depth} MM
            </Typography>
          </div>
        </div>
      )}

    </>
  );
};

export default withStyles(styles)(ProductInfoTabs);
