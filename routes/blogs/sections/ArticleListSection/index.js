import React from 'react';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// components
import { Pagination } from 'jumbogold/common';
import ArticleCard from '../../components/ArticleCard';

// Utils
import { mockArticleList } from '../../utils/mock';

const styles = (theme) => ({
  articleListWrapper: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    [theme.breakpoints.only('xs')]: {
      width: '100%',
      display: 'flex',
    },
  },
  articleListGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '20px',
    rowGap: '30px',

    [theme.breakpoints.only('xs')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '13px',
      rowGap: '25px',
    },
  },
});

const ArticleListSection = ({ classes }) => {
  return (
    <div className={classes.articleListWrapper}>
      <div className={classes.articleListGrid}>
        {mockArticleList.map((article, index) => (
          <ArticleCard article={article} key={index} />
        ))}
      </div>

      <Pagination page={{ pageSize: 30, totalItem: 5 }} handleChangePage={() => {}} />
    </div>
  );
};

export default withStyles(styles)(ArticleListSection);
