import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { removePropFromQuery } from 'utils/listing';

// MUI Stuff
import { withStyles, InputBase } from '@material-ui/core';

// MUI Icons
import SearchIcon from '@material-ui/icons/Search';

// styling
import styles from './style';

// useDebounce
import { useDebounce } from 'utils/methods' ;

const SearchKeyword = ({ classes }) => {
  const router = useRouter();

  const { query, pathname } = router;

  const onSearch = useDebounce((event) => {
    if (query.type === 'product') {
      router.push({
        pathname,
        query: {
          ...query,
          name: event.target.value,
        },
      });
    }
  }, 500);

  useEffect(() => {
    if (query.name === '') {
      router.push({
        pathname,
        query: removePropFromQuery('name', '', query),
      });
    }
  }, [query.name])

  return (
    <div className={classes.searchKeyword}>
      <SearchIcon className={classes.searchKeywordIcon} />
      <InputBase
        className={classes.searchKeywordField}
        placeholder="Enter keywords"
        type="text"
        onChange={onSearch}
      />
    </div>
  );
};

export default withStyles(styles)(SearchKeyword);
