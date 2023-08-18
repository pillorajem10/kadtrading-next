import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  Checkbox,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  InputBase,
  Divider,
} from '@material-ui/core';

// MUI Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// redux
import { useSelector } from 'react-redux';

// picture
import expandIcon from 'public/assets/icons/expand.png';

// utils
import { addPropToQuery } from 'utils/listing';

// styling
import styles from './style';

const FilterBrands = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    if (filter.Brand) {
      setBrandList(filter.Brand);
    }
  }, [filter.Brand]);

  const handleSelectBrands = (selectedBrand) => {
    router.push({
      pathname,
      query: addPropToQuery('brands', selectedBrand, query),
    });
  };

  const handleSearchBrand = (event) => {
    event.persist();

    const searchText = event.target.value.toLowerCase();
    const tempList =
      searchText !== ''
        ? brandList.filter((brand) => brand.toLowerCase().includes(searchText))
        : filter.Brand;

    setBrandList(tempList);
  };

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={filter.Brand?.length !== 0}
      disabled={filter.Brand?.length === 0}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Brands</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        <div className={classes.searchFieldWrapper}>
          <InputBase
            className={classes.searchField}
            fullWidth
            onChange={handleSearchBrand}
            placeholder="SEARCH BRAND"
            type="text"
          />
        </div>

        {brandList.slice(0, 8).map((brand, index) => {
          return (
            <div className={classes.listItem} key={index}>
              <Checkbox
                checked={params.brands?.includes(encodeURIComponent(brand))}
                onChange={() => handleSelectBrands(brand)}
                className={classes.checkbox}
                disableRipple
                color="primary"
              />
              <Typography
                className={classes.listItemText}
                style={{
                  color: params.brands?.includes(encodeURIComponent(brand))
                    ? '#000000'
                    : 'rgba(0, 0, 0, 0.6)',
                }}
              >
                {brand}
              </Typography>
            </div>
          );
        })}
      </AccordionDetails>

      {brandList.length > 8 && (
        <>
          <Divider className={classes.divider} />

          <Accordion className={classes.layout}>
            <AccordionSummary
              className={classes.showAllWrapper}
              expandIcon={<ExpandMoreIcon className={classes.showAllIcon} />}
              aria-controls="toggle-panel-content"
              id="panel-header"
            >
              <Typography className={classes.showAllText}>VIEW ALL</Typography>
            </AccordionSummary>

            <AccordionDetails className={classes.content} style={{ paddingBottom: 40 }}>
              {brandList.slice(8).map((brand, index) => {
                return (
                  <div className={classes.listItem} key={index}>
                    <Checkbox
                      checked={params.brands?.includes(encodeURIComponent(brand))}
                      onChange={() => handleSelectBrands(brand)}
                      className={classes.checkbox}
                      disableRipple
                      color="primary"
                    />

                    <Typography className={classes.listItemText}>{brand}</Typography>
                  </div>
                );
              })}
            </AccordionDetails>
          </Accordion>
        </>
      )}
    </Accordion>
  );
};

export default withStyles(styles)(FilterBrands);
