import React, { useState } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  Dialog,
  // Divider,
  IconButton,
  Fab,
  List,
  ListItem,
  Slide,
  Typography,
  Button,
} from '@material-ui/core';

// MUI Icons
import CloseIcon from '@material-ui/icons/Close';
import TuneIcon from 'mdi-react/TuneIcon';

// redux
// import { useSelector } from 'react-redux';

// utils
// import regExp from 'utils/regExp';

// components
import {
  FilterPriceRange,
  FilterCaratRange,
  FilterSymmetryRange,
  FilterColorRange,
  FilterCutRange,
  FilterPolishRange,
  FilterClarityRange,
  FilterShape,
  FilterLabRange,
  FilterDepthRange,
  FilterTableRange
} from 'jumbogold/listing/OtherFilterComponentExpansion';

import {
  FilterGemstonePriceRange,
  FilterGemstoneCaratRange,
  FilterGemstoneSaturation,
  FilterGemstoneShape,
  FilterGemstoneVarieties,
  FilterGemstoneSpecialComments,
  FilterGemstoneColours,
  FilterGemstoneClarityRange
} from 'jumbogold/listing/GemstoneFilterComponentExp';

import {
  FilterSettingsPriceRange,
  FilterSettingsCategory,
  FilterSettingsFullCategory,
  FilterSettingsTags,
} from 'jumbogold/listing/SettingsFilterComponentExp';

// sections
// import ProductsTagSection from '../../sections/ProductsTagSection';

// styling
import styles from './style';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const MobileFilterSideBar = ({ classes, open, onClose, fullListing }) => {
  /*
  const {
    listing: { filter, filterCount, tagList },
  } = useSelector((state) => state);
  */

  const router = useRouter();
  const { pathname, query } = router;

  const [gatheredFilterVals, setGatheredFilterVals] = useState({});
  const [clearFilters, setClearFilters] = useState(undefined);
  const [triggerErrorForPrice, setTriggerErrorForPrice] = useState(false);
  const [triggerErrorForCarat, setTriggerErrorForCarat] = useState(false);
  const [triggerErrorForDepth, setTriggerErrorForDepth] = useState(false);
  const [triggerErrorForTable, setTriggerErrorForTable] = useState(false);

  let filterComponent;

  const handleClearAllFilter = () => {
    setGatheredFilterVals({});

    /*
    if (query.type === 'product' || query.type === 'gemstone') {
      router.push({
        pathname,
        query: {
          pageIndex: query.pageIndex,
          pageSize: query.pageSize,
          type: query.type
        },
      });
    } else {
      router.push({
        pathname,
        query: {
          c1: query.c1,
          c2: query.c2,
          type: query.type
        },
      });
    }
    */

    router.push({
      pathname,
      query: {
        pageIndex: query.pageIndex,
        pageSize: query.pageSize,
        type: query.type
      },
    });

    if (!clearFilters) {
      setClearFilters(true);
    } else if (clearFilters === true) {
      setClearFilters(false);
    } else {
      setClearFilters(true);
    }
  };

  const handleGatherValues = (values) => {
    setTriggerErrorForPrice(false);
    setTriggerErrorForCarat(false);
    setTriggerErrorForDepth(false);
    setTriggerErrorForTable(false);
    setGatheredFilterVals({ ...gatheredFilterVals, ...values });
  };

  Object.keys(gatheredFilterVals).forEach(key => gatheredFilterVals[key] === undefined && delete gatheredFilterVals[key]);


  const handleApplyFilters = () => {
    setClearFilters(undefined);
    setTriggerErrorForPrice(false);
    setTriggerErrorForCarat(false);
    setTriggerErrorForDepth(false);
    setTriggerErrorForTable(false);

    if (gatheredFilterVals.minimumPrice > gatheredFilterVals.maximumPrice) {
      setTriggerErrorForPrice(true);
    } else if (gatheredFilterVals.minimumCarat > gatheredFilterVals.maximumCarat) {
      setTriggerErrorForCarat(true);
    } else if (gatheredFilterVals.minimumDepth > gatheredFilterVals.maximumDepth) {
      setTriggerErrorForDepth(true);
    } else if (gatheredFilterVals.minimumTable > gatheredFilterVals.maximumTable) {
      setTriggerErrorForTable(true);
    } else {
      setTriggerErrorForPrice(false);
      setTriggerErrorForCarat(false);
      setTriggerErrorForDepth(false);
      setTriggerErrorForTable(false);
      onClose();
      router.push({
        pathname,
        query: {
          ...query,
          ...gatheredFilterVals
        },
      });
      setGatheredFilterVals({});
    }
  };

if (query.type === 'product') {
  filterComponent = (
    <List className={classes.list}>

      {/* Price Range */}
      <ListItem className={classes.listItem}>
        <FilterSettingsPriceRange/>
      </ListItem>

      {/* Category Filter */}
      <ListItem className={classes.listItem}>
        {fullListing ? <FilterSettingsFullCategory /> : <FilterSettingsCategory />}
      </ListItem>

      {/* Tags Filter */}
      <ListItem className={classes.listItem}>
        <FilterSettingsTags/>
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
  )
} else if (query.type === 'globald') {
  filterComponent = (
    <List className={classes.list}>
      {/*! regExp.isEmptyObject(tagList) && (
        <>
          {/* Product Tags }
          <ListItem className={classes.listItem}>
            <ProductsTagSection fullListing={fullListing} />
          </ListItem>

          <Divider />
        </>
      ) */}

      {/* Shape Filter */}
      <ListItem className={classes.listItem}>
        <FilterShape
         gatherFilterValues={handleGatherValues}
         clearFilters={clearFilters}
        />
      </ListItem>

      {/* Price Range */}
      <ListItem className={classes.listItem}>
        <FilterPriceRange
         gatherFilterValues={handleGatherValues}
         triggerError={triggerErrorForPrice}
         clearFilters={clearFilters}
        />
      </ListItem>

      {/* Carat Range */}
      <ListItem className={classes.listItem}>
        <FilterCaratRange
          gatherFilterValues={handleGatherValues}
          triggerError={triggerErrorForCarat}
          clearFilters={clearFilters}
        />
      </ListItem>

      {/* Symmetry Range */}
      <ListItem className={classes.listItem}>
        <FilterSymmetryRange
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
        />
      </ListItem>

      {/* Cut Range */}
      <ListItem className={classes.listItem}>
        <FilterCutRange
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
        />
      </ListItem>

      {/* Color Range */}
      <ListItem className={classes.listItem}>
        <FilterColorRange
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
          />
      </ListItem>

      {/* Polish Range */}
      <ListItem className={classes.listItem}>
        <FilterPolishRange
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
        />
      </ListItem>

      {/* Clarity Range */}
      <ListItem className={classes.listItem}>
        <FilterClarityRange
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
        />
      </ListItem>

      {/* Lab Range */}
      <ListItem className={classes.listItem}>
        <FilterLabRange
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
        />
      </ListItem>

      {/* Depth Range */}
      <ListItem className={classes.listItem}>
        <FilterDepthRange
           gatherFilterValues={handleGatherValues}
           triggerError={triggerErrorForDepth}
           clearFilters={clearFilters}
        />
      </ListItem>

      {/* Lab Range */}
      <ListItem className={classes.listItem}>
        <FilterTableRange
           gatherFilterValues={handleGatherValues}
           triggerError={triggerErrorForTable}
           clearFilters={clearFilters}
        />
      </ListItem>


      <ListItem className={classes.listItem}>
        <div style={{marginTop: '8%'}}>
          <Fab
            variant="extended"
            color="primary"
            className={classes.actionButton}
            onClick={handleApplyFilters}
          >
            Apply Filters
          </Fab>
        </div>
      </ListItem>

      <ListItem className={classes.listItem}>
        {/*<Button
          color="primary"
          variant="contained"
          className={classes.clearAllButton}
          onClick={handleClearAllFilter}
        >
          Clear all
        </Button>*/}
        <div style={{marginTop: '8%'}}>
          <Fab
            variant="extended"
            color="primary"
            className={classes.clearAllButton}
            onClick={handleClearAllFilter}
          >
            Clear all
          </Fab>
        </div>
      </ListItem>
    </List>
  )
} else if (query.type === 'inhouse') {
  filterComponent = (
    <List className={classes.list}>
      {/*! regExp.isEmptyObject(tagList) && (
        <>
          {/* Product Tags }
          <ListItem className={classes.listItem}>
            <ProductsTagSection fullListing={fullListing} />
          </ListItem>

          <Divider />
        </>
      ) */}

      {/* Shape Filter */}
      <ListItem className={classes.listItem}>
        <FilterShape
         gatherFilterValues={handleGatherValues}
         clearFilters={clearFilters}
        />
      </ListItem>

      {/* Price Range */}
      <ListItem className={classes.listItem}>
        <FilterPriceRange
         gatherFilterValues={handleGatherValues}
         triggerError={triggerErrorForPrice}
         clearFilters={clearFilters}
        />
      </ListItem>

      {/* Carat Range */}
      <ListItem className={classes.listItem}>
        <FilterCaratRange
          gatherFilterValues={handleGatherValues}
          triggerError={triggerErrorForCarat}
          clearFilters={clearFilters}
        />
      </ListItem>

      {/* Symmetry Range */}
      <ListItem className={classes.listItem}>
        <FilterSymmetryRange
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
        />
      </ListItem>

      {/* Cut Range */}
      <ListItem className={classes.listItem}>
        <FilterCutRange
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
        />
      </ListItem>

      {/* Color Range */}
      <ListItem className={classes.listItem}>
        <FilterColorRange
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
          />
      </ListItem>

      {/* Polish Range */}
      <ListItem className={classes.listItem}>
        <FilterPolishRange
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
        />
      </ListItem>

      {/* Clarity Range */}
      <ListItem className={classes.listItem}>
        <FilterClarityRange
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
        />
      </ListItem>

      {/* Lab Range */}
      <ListItem className={classes.listItem}>
        <FilterLabRange
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
        />
      </ListItem>

      {/* Depth Range */}
      <ListItem className={classes.listItem}>
        <FilterDepthRange
           gatherFilterValues={handleGatherValues}
           triggerError={triggerErrorForDepth}
           clearFilters={clearFilters}
        />
      </ListItem>

      {/* Lab Range */}
      <ListItem className={classes.listItem}>
        <FilterTableRange
           gatherFilterValues={handleGatherValues}
           triggerError={triggerErrorForTable}
           clearFilters={clearFilters}
        />
      </ListItem>


      <ListItem className={classes.listItem}>
        <div style={{marginTop: '8%'}}>
          <Fab
            variant="extended"
            color="primary"
            className={classes.actionButton}
            onClick={handleApplyFilters}
          >
            Apply Filters
          </Fab>
        </div>
      </ListItem>

      <ListItem className={classes.listItem}>
        {/*<Button
          color="primary"
          variant="contained"
          className={classes.clearAllButton}
          onClick={handleClearAllFilter}
        >
          Clear all
        </Button>*/}
        <div style={{marginTop: '8%'}}>
          <Fab
            variant="extended"
            color="primary"
            className={classes.clearAllButton}
            onClick={handleClearAllFilter}
          >
            Clear all
          </Fab>
        </div>
      </ListItem>
    </List>
  )
} else if (query.type === 'gemstone') {
  filterComponent = (
    <List className={classes.list}>
      {/*! regExp.isEmptyObject(tagList) && (
        <>
          {/* Product Tags }
          <ListItem className={classes.listItem}>
            <ProductsTagSection fullListing={fullListing} />
          </ListItem>

          <Divider />
        </>
      ) */}

      {/* Shape Filter */}
      <ListItem className={classes.listItem}>
        <FilterGemstoneShape
         gatherFilterValues={handleGatherValues}
         clearFilters={clearFilters}
        />
      </ListItem>

      {/* Price Range */}
      <ListItem className={classes.listItem}>
        <FilterGemstonePriceRange
         gatherFilterValues={handleGatherValues}
         triggerError={triggerErrorForPrice}
         clearFilters={clearFilters}
        />
      </ListItem>

      {/* Carat Range */}
      <ListItem className={classes.listItem}>
        <FilterGemstoneCaratRange
          gatherFilterValues={handleGatherValues}
          triggerError={triggerErrorForCarat}
          clearFilters={clearFilters}
        />
      </ListItem>

      {/* Clarity Range */}
      <ListItem className={classes.listItem}>
        <FilterGemstoneClarityRange
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
        />
      </ListItem>

      {/* Colours */}
      <ListItem className={classes.listItem}>
        <FilterGemstoneColours
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
          label="Primary Colour"
        />
      </ListItem>

      {/* Varieties */}
      <ListItem className={classes.listItem}>
        <FilterGemstoneVarieties
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
        />
      </ListItem>

      {/* Specical Comments */}
      <ListItem className={classes.listItem}>
        <FilterGemstoneSpecialComments
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
        />
      </ListItem>

      {/* Saturation */}
      <ListItem className={classes.listItem}>
        <FilterGemstoneSaturation
          gatherFilterValues={handleGatherValues}
          clearFilters={clearFilters}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <div style={{marginTop: '8%'}}>
          <Fab
            variant="extended"
            color="primary"
            className={classes.actionButton}
            onClick={handleApplyFilters}
          >
            Apply Filters
          </Fab>
        </div>
      </ListItem>

      <ListItem className={classes.listItem}>
        {/*<Button
          color="primary"
          variant="contained"
          className={classes.clearAllButton}
          onClick={handleClearAllFilter}
        >
          Clear all
        </Button>*/}
        <div style={{marginTop: '8%'}}>
          <Fab
            variant="extended"
            color="primary"
            className={classes.clearAllButton}
            onClick={handleClearAllFilter}
          >
            Clear all
          </Fab>
        </div>
      </ListItem>
    </List>
  )
} else {
  filterComponent = null;
}

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

          {/*
            filterCount > 0 && (
            <div className={classes.filterCount}>
              <Typography>{filterCount}</Typography>
            </div>
          )
          */}
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
      {filterComponent}
    </Dialog>
  );
};

export default withStyles(styles)(MobileFilterSideBar);
