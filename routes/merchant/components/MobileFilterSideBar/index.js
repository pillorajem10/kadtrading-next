import React, { Fragment } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItem,
  Slide,
  Typography,
  Button,
} from '@material-ui/core';

// MUI Icons
import CloseIcon from '@material-ui/icons/Close';
import TuneIcon from 'mdi-react/TuneIcon';

// Redux
import { useSelector } from 'react-redux';

// utils
import regExp from 'utils/regExp';

// components
import {
  FilterCategory,
  FilterColors,
  FilterDeliveryTime,
  FilterDimensions,
  FilterDisplay,
  FilterMaterials,
  FilterPriceRange,
  FilterStyles,
} from 'jumbogold/listing/expansion';

// sections
import ProductsTagSection from '../../sections/ProductsTagSection';

// Styling
import styles from './style';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const MobileFilterSideBar = ({ classes, open, onClose, fullListing }) => {
  const {
    listing: { filter, filterCount, tagList },
  } = useSelector((state) => state);

  const router = useRouter();
  const { pathname } = router;

  const handleClearAllFilter = () => {
    router.push(pathname);
  };

  return (
    <Dialog
      className={classes.mobileFilterSideBar}
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <div className={classes.headerWrapper}>
        <div>
          <TuneIcon className={classes.headerIcon} />
          <Typography className={classes.headerText}>Filter</Typography>
          {filterCount > 0 && (
            <div className={classes.filterCount}>
              <Typography>{filterCount}</Typography>
            </div>
          )}
        </div>

        <IconButton
          className={classes.headerButton}
          color="inherit"
          onClick={onClose}
          aria-label="close filter"
        >
          <CloseIcon />
        </IconButton>
      </div>

      {!regExp.isEmptyObject(filter) && (
        <List className={classes.list}>
          {!regExp.isEmptyObject(tagList) && (
            <Fragment>
              {/* Product Tags */}
              <ListItem className={classes.listItem}>
                <ProductsTagSection fullListing={fullListing} />
              </ListItem>

              <Divider />
            </Fragment>
          )}

          {/* Price Range */}
          <ListItem className={classes.listItem}>
            <FilterPriceRange />
          </ListItem>

          {/* Delivery Time Range */}
          <ListItem className={classes.listItem}>
            <FilterDeliveryTime />
          </ListItem>

          {/* Category */}
          <ListItem className={classes.listItem}>
            <FilterCategory />
          </ListItem>

          {/* Display */}
          <ListItem className={classes.listItem}>
            <FilterDisplay />
          </ListItem>

          {/* Color */}
          <ListItem className={classes.listItem}>
            <FilterColors />
          </ListItem>

          {/* Dimension */}
          <ListItem className={classes.listItem}>
            <FilterDimensions />
          </ListItem>

          {/* Styles */}
          <ListItem className={classes.listItem}>
            <FilterStyles />
          </ListItem>

          {/* Materials */}
          <ListItem className={classes.listItem}>
            <FilterMaterials />
          </ListItem>

          <ListItem className={classes.listItem}>
            <Button
              color="primary"
              variant="contained"
              className={classes.clearAllButton}
              onClick={handleClearAllFilter}
            >
              Clear all
            </Button>
          </ListItem>
        </List>
      )}
    </Dialog>
  );
};

export default withStyles(styles)(MobileFilterSideBar);
