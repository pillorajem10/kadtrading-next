import React from 'react';

// MUI Stuff
import { withStyles, Divider } from '@material-ui/core';

// components
import Breadcrumb from 'routes/blogs/components/Breadcrumb';

// sections
import FilterSection from 'routes/blogs/sections/FilterSection';
import ArticleTagSection from 'routes/blogs/sections/ArticleTagSection';
import ArticleListSection from 'routes/blogs/sections/ArticleListSection';

// Styling
import styles from 'routes/blogs/style';

const Blogs = ({ classes }) => {
  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <Breadcrumb />

        {/* Filter */}
        <FilterSection />

        <Divider />

        <div className={classes.articleList}>
          {/* Article Tag */}
          <ArticleTagSection />

          {/* Article List */}
          <ArticleListSection />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Blogs);
