import React, { useMemo } from 'react';

// MUI Stuff
import { withStyles, Typography } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// Utils
import { formatAttributeList } from '../../utils';

// picture
import gia from 'public/assets/jumbo/gia.png';

// Styling
import styles from './style';

const ProductSpecification = ({ classes }) => {
  const { productDetails } = useSelector((state) => state.product);

  const attributeList = useMemo(
    () => formatAttributeList(productDetails?.attributes || []),
    [productDetails.attributes],
  );

  /*
    rep: setting
    type: product
    
    rep: globald
    type: diamond

    rep: inhouse
    type: gemstone

    rep: inhouse
    type: diamond
  */
  return (
    <div
      className={
        attributeList.length > 1
          ? classes.productSpecification
          : classes.gridProductSpecification
      }>
      
      {productDetails.type === 'diamond' &&
        <>
          <div className={classes.specificationContainer}>
            {/* Dimensions Table */}
            <div className={classes.specificationHeader}>
              <Typography>Grading Results</Typography>
            </div>
            <div className={classes.attributeWrapper}>
              <Typography className={classes.attributeName}>Carat Weight</Typography>
              <Typography className={classes.attributeValue}>
                {productDetails.represent === 'inhouse' ? productDetails.weight : productDetails.size} carat
              </Typography>
            </div>
            <div className={classes.attributeWrapper}>
              <Typography className={classes.attributeName}>Color Grade</Typography>
              <Typography className={classes.attributeValue}>
                {productDetails.color}
              </Typography>
            </div>
            <div className={classes.attributeWrapper}>
              <Typography className={classes.attributeName}>Clarity Grade</Typography>
              <Typography className={classes.attributeValue}>
                {productDetails.clarity}
              </Typography>
            </div>

            {productDetails.represent === 'globald' && productDetails.has_cert_file &&
              <div 
                onClick={(event) => {
                  event.preventDefault();
                  window.open(`http://www.diamondselections.com/GetCertificate.aspx?diamondid=${productDetails.id}`, '_blank');
                }}
                className={classes.giaBox}>
                <img className={classes.giaImage} src={gia} alt="gia" />
                <Typography style={{ fontSize: '0.8rem' }}>View here</Typography>
              </div>            
            }

            {/*productDetails.type === 'diamond' && productDetails.represent === 'inhouse' && productDetails.lab &&
              <div 
                onClick={(event) => {
                  event.preventDefault();
                  window.open(`http://www.diamondselections.com/GetCertificate.aspx?diamondid=${productDetails.certificateNo}`, '_blank');
                }}
                className={classes.giaBox}>
                <img className={classes.giaImage} src={gia} alt="gia" />
                <Typography style={{ fontSize: '0.8rem' }}>View here</Typography>
              </div>            
            */}            
          </div>

          <div className={classes.specificationContainer}>
            {/* Dimensions Table */}
            <div className={classes.specificationHeader}>
              <Typography>Additional Grading Information</Typography>
            </div>

            <div className={classes.attributeWrapper}>
              <Typography className={classes.attributeName}>Polish</Typography>
              <Typography className={classes.attributeValue}>
                {productDetails.polish}
              </Typography>
            </div>
            <div className={classes.attributeWrapper}>
              <Typography className={classes.attributeName}>Symmetry</Typography>
              <Typography className={classes.attributeValue}>
                {productDetails.symmetry}
              </Typography>
            </div>
            <div className={classes.attributeWrapper}>
              <Typography className={classes.attributeName}>Flourescence</Typography>
              <Typography className={classes.attributeValue}>
                {productDetails.represent === 'inhouse' ? productDetails.fluorescenceIntensity : productDetails.fluor_intensity}
              </Typography>
            </div>
          </div>        
        </>
      }




      {productDetails.type === 'gemstone' &&
        <>
          <div className={classes.specificationContainer}>
            {/* Dimensions Table */}
            <div className={classes.specificationHeader}>
              <Typography>Grading Results</Typography>
            </div>
            <div className={classes.attributeWrapper}>
              <Typography className={classes.attributeName}>Carat Weight</Typography>
              <Typography className={classes.attributeValue}>
                {productDetails.weight} carat
              </Typography>
            </div>
            <div className={classes.attributeWrapper}>
              <Typography className={classes.attributeName}>Clarity Grade</Typography>
              <Typography className={classes.attributeValue}>
                {productDetails.clarity}
              </Typography>
            </div>
            <div className={classes.attributeWrapper}>
              <Typography className={classes.attributeName}>Clarity Description</Typography>
              <Typography className={classes.attributeValue}>
                {productDetails.clarityDescription}
              </Typography>
            </div>
          </div>




          <div className={classes.specificationContainer}>
            {/* Dimensions Table */}
            <div className={classes.specificationHeader}>
              <Typography>Additional Grading Information</Typography>
            </div>

            <div className={classes.attributeWrapper}>
              <Typography className={classes.attributeName}>Polish</Typography>
              <Typography className={classes.attributeValue}>
                {productDetails.polish}
              </Typography>
            </div>
            <div className={classes.attributeWrapper}>
              <Typography className={classes.attributeName}>Symmetry</Typography>
              <Typography className={classes.attributeValue}>
                {productDetails.symmetry}
              </Typography>
            </div>
            <div className={classes.attributeWrapper}>
              <Typography className={classes.attributeName}>Flourescence</Typography>
              <Typography className={classes.attributeValue}>
                {productDetails.represent === 'inhouse' ? productDetails.fluorescenceIntensity : productDetails.fluor_intensity}
              </Typography>
            </div>
          </div>        
        </>
      }






      {attributeList.map(({ name, list }, index) => (
        <div
          className={
            attributeList.length > 1
              ? classes.specificationContainer
              : classes.gridSpecificContainer
          }
          key={index}>
          <div className={classes.specificationHeader}>
            <Typography>{name || 'Product Details'}</Typography>
          </div>

          {list.map((attrList, number) => (
            <div key={number} className={classes.attributeWrapper}>
              <Typography className={classes.attributeName}>
                {attrList.name}
              </Typography>
              <Typography
                className={classes.attributeValue}
                dangerouslySetInnerHTML={{
                  __html: attrList.value,
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(ProductSpecification);
