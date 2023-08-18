import React, { useCallback, useEffect, useState } from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// Redux
import { useDispatch } from 'react-redux';
import { merchant } from 'redux/actions';

// components
import SearchInput from '../../components/SearchInput';
import MerchantList from '../../components/MerchantList';
import AlphabetList from '../../components/AlphabetList';

// Utils
import { destructingMerchantList, structuringMerchantList } from '../../utils';

// Styling
import styles from './style';

const MerchantListSection = ({ classes }) => {
  const dispatch = useDispatch();

  const [merchantList, setMerchantList] = useState([]);
  const [search, setSearch] = useState('');

  const handleGetMerchandDirectory = useCallback(async () => {
    const res = await dispatch(merchant.getMerchantDirectory());
    const { success, data } = res;

    if (success) {
      const tempMerchantList = [];

      Object.keys(data).map((item) => {
        tempMerchantList.push({ label: item, value: data[item] });
        return null;
      });

      setMerchantList(tempMerchantList);
    }
  }, [dispatch]);

  useEffect(() => {
    handleGetMerchandDirectory();
  }, [handleGetMerchandDirectory]);

  const handleSearch = (event) => {
    event.persist();
    setSearch(event.target.value);
  };

  let merchants = [];
  let alphaList = [];

  if (search !== '') {
    const destructuredMerchantList = destructingMerchantList([...merchantList]);

    const tempArray = [];

    for (let i = 0; i < destructuredMerchantList.length; i += 1) {
      if (destructuredMerchantList[i].value.displayName.includes(search.toUpperCase())) {
        tempArray.push(destructuredMerchantList[i]);
      }
    }

    merchants = structuringMerchantList(tempArray);
    alphaList = [...merchants].map((item) => item.label);
  } else {
    merchants = [...merchantList];
    alphaList = [...merchants].map((item) => item.label);
  }

  return (
    <div className={classes.section}>
      <SearchInput onSearch={handleSearch} />

      <div className={classes.merchantList}>
        <MerchantList merchantList={merchants} />

        <AlphabetList alphaList={alphaList} />
      </div>
    </div>
  );
};

export default withStyles(styles)(MerchantListSection);
