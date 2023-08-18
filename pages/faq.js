import React, { useState } from 'react';

// MUI Stuff
import { withStyles, Hidden, Typography } from '@material-ui/core';

// sections
import SearchFieldSection from 'routes/faq/sections/SearchFieldSection';
import FAQListSection from 'routes/faq/sections/FAQListSection';

// Utils
import { formatFaqs } from 'routes/faq/utils/utils';
import { faqs } from 'routes/faq/utils/const';

// Styling
import styles from 'routes/faq/style';

const FAQ = ({ classes }) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const searchList = formatFaqs(faqs);

  const handleScrollToFaq = (id) => {
    const selector = document.querySelector(id);

    if (selector) {
      selector.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSetSearch = (event) => {
    event.persist();

    const searchValue = event.target.value;

    setSearch(searchValue);

    const filterFaqSearchList = [...searchList].filter((list) =>
      list.question.toLowerCase().includes(searchValue.toLowerCase()),
    );

    setSearchResult(filterFaqSearchList);
  };

  const handleSelectSearch = (item) => {
    const { question, id } = item;

    setSearch(question);
    setSearchResult([]);
    setInputFocus(false);

    handleScrollToFaq(`#${id}`);
  };

  const handleSearch = () => {
    const filterList = [...searchList].filter(
      (list) => list.question.toLowerCase() === search.toLowerCase(),
    );

    if (filterList.length !== 0) {
      handleScrollToFaq(`#${filterList[0].id}`);
    }
  };

  return (
    <div className={classes.page}>
      <SearchFieldSection
        search={search}
        searchResult={searchResult}
        handleSelectSearch={handleSelectSearch}
        handleSetSearch={handleSetSearch}
        handleSearch={handleSearch}
        handleScrollToFaq={handleScrollToFaq}
        inputFocus={inputFocus}
        setInputFocus={setInputFocus}
      />

      <Hidden xsDown>
        <FAQListSection />
      </Hidden>

      <Hidden smUp>
        <div className={classes.mobileFaqSearchSection}>
          {search.length !== 0 && searchResult.length !== 0 && (
            <div className={classes.mobileFaqSearchList}>
              {searchResult.map((item) => (
                <div
                  className={classes.mobileFaqSearchListItem}
                  onClick={() => handleSelectSearch(item)}
                  key={item.id}
                >
                  <Typography>{item.question}</Typography>
                </div>
              ))}
            </div>
          )}
          <FAQListSection />
        </div>
      </Hidden>
    </div>
  );
};

export default withStyles(styles)(FAQ);
