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

const FilterMerchants = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [merchantList, setMerchantList] = useState([]);

  useEffect(() => {
    if (filter.Merchant) {
      setMerchantList(filter.Merchant);
    }
  }, [filter.Merchant]);

  const handleSelectMerchants = (merchantId) => {
    router.push({
      pathname,
      query: addPropToQuery('merchantIds', merchantId, query),
    });
  };

  const handleSearchMerchant = (event) => {
    event.persist();

    const searchText = event.target.value.toLowerCase();

    const tempList =
      searchText !== ''
        ? merchantList.filter((merchant) => merchant.name.toLowerCase().includes(searchText))
        : filter.Merchant;

    setMerchantList(tempList);
  };

  return (
    <Accordion
      className={classes.layout}
      defaultExpanded={filter.Merchant?.length !== 0}
      disabled={filter.Merchant?.length === 0}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Merchants</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        <div className={classes.searchFieldWrapper}>
          <InputBase
            className={classes.searchField}
            fullWidth
            onChange={handleSearchMerchant}
            placeholder="SEARCH BRAND"
            type="text"
          />
        </div>

        {merchantList.slice(0, 8).map((merchant, index) => (
          <div className={classes.listItem} key={index}>
            <Checkbox
              checked={params.merchantIds?.includes(merchant.id)}
              onChange={() => handleSelectMerchants(merchant.id)}
              className={classes.checkbox}
              disableRipple
              color="primary"
            />
            <Typography
              className={classes.listItemText}
              style={{
                color: params.merchantIds?.includes(merchant.id) ? '#000000' : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              {merchant.name}
            </Typography>
          </div>
        ))}
      </AccordionDetails>

      {merchantList.length > 8 && (
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
              {merchantList.slice(8).map((merchant, index) => (
                <div className={classes.listItem} key={index}>
                  <Checkbox
                    checked={params.merchantIds?.includes(merchant.id)}
                    onChange={() => handleSelectMerchants(merchant.id)}
                    className={classes.checkbox}
                    disableRipple
                    color="primary"
                  />
                  <Typography
                    className={classes.listItemText}
                    style={{
                      color: params.merchantIds?.includes(merchant.id)
                        ? '#000000'
                        : 'rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    {merchant.name}
                  </Typography>
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        </>
      )}
    </Accordion>
  );
};

export default withStyles(styles)(FilterMerchants);
