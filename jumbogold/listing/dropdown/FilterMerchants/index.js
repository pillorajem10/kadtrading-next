import React, { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import {
  withStyles,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  Typography,
  MenuList,
  MenuItem,
  Checkbox,
} from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// utils
import { addPropToQuery } from 'utils/listing';

// picture
import expandIcon from 'public/assets/icons/expand.png';

// components
import EmptyFilter from '../../common/EmptyFilter';

// styling
import styles from './style';

const FilterMerchants = ({ classes }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const router = useRouter();
  const { query, pathname } = router;

  const [showMerchantsList, setShowMerchantsList] = useState(false);
  const anchorRef = useRef();

  const handleToggleMerchantsList = () =>
    setShowMerchantsList((currentValue) => {
      return !currentValue;
    });

  const handleCloseMerchantsList = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setShowMerchantsList(false);
  };

  const handleSelectMerchant = (merchantId) => {
    router.push({
      pathname,
      query: addPropToQuery('merchantIds', merchantId, query),
    });
  };

  const renderMerchant = useCallback(() => {
    let renderer = <Typography>Merchants</Typography>;

    if (params.merchantIds) {
      renderer = (
        <div className={classes.selectedTagWrapper}>
          {params.merchantIds.map((merchant, index) => (
            <div key={index} className={classes.selectedTag}>
              <Typography>{filter.Merchant?.find((item) => item.id === merchant).name}</Typography>
            </div>
          ))}
        </div>
      );
    }

    return renderer;
  }, [params.merchantIds, filter.Merchant]);

  return (
    <>
      <div
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        className={classes.filterMerchants}
        onClick={handleToggleMerchantsList}
        style={{
          border:
            showMerchantsList || params.merchantIds ? '1px solid #000' : '1px solid #e4e4e4',
        }}
      >
        {renderMerchant()}

        <img
          src={expandIcon}
          alt="expand icon"
          className={classes.expandIcon}
          style={{
            transform: showMerchantsList ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      <Popper
        anchorEl={anchorRef.current}
        className={classes.popper}
        disablePortal
        keepMounted
        open={showMerchantsList}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper id="menu-list-grow" className={classes.menuWrapper}>
              <ClickAwayListener onClickAway={handleCloseMerchantsList}>
                <MenuList className={classes.merchantsListWrapper}>
                  {filter.Merchant?.length === 0 ? (
                    <EmptyFilter />
                  ) : (
                    filter.Merchant?.map((merchant) => {
                      const isInclude = params.merchantIds?.includes(merchant.id);

                      return (
                        <MenuItem
                          className={classes.menuItem}
                          key={merchant.id}
                          onClick={() => handleSelectMerchant(merchant.id)}
                        >
                          <Checkbox
                            checked={!!isInclude}
                            className={classes.checkbox}
                            disableRipple
                            color="primary"
                            size="small"
                          />
                          <Typography
                            style={{
                              color: isInclude ? '#000000' : 'rgba(0, 0, 0, 0.6)',
                              fontWeight: isInclude ? 500 : 'normal',
                            }}
                          >
                            {merchant.name}
                          </Typography>
                        </MenuItem>
                      );
                    })
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default withStyles(styles)(FilterMerchants);
