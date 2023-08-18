import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

// MUI
import { withStyles } from '@material-ui/core';

// MUI Icon
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

// Styling
import styles from './style';

const Pagination = ({ classes, page, onPageChange }) => {
  const [goPageNumber, setGoPageNumber] = useState(0);

  const handleChangePage = (event) => {
    setGoPageNumber(event.selected);
    onPageChange(event.selected + 1);
  };

  return (
    <ReactPaginate
      previousLabel={<ChevronLeft className={classes.pageIcon} />}
      nextLabel={<ChevronRight className={classes.pageIcon} />}
      breakLabel="..."
      breakClassName="break-me"
      pageCount={page.totalItem / page.pageSize}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      forcePage={goPageNumber}
      onPageChange={handleChangePage}
      containerClassName={classes.pageUnit}
      pageClassName={classes.page}
      pageLinkClassName={classes.pageLink}
      activeClassName={classes.pageActive}
    />
  );
};

export default withStyles(styles)(Pagination);
