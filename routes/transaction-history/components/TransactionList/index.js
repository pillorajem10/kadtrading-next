import React, { useCallback, useEffect, useState } from 'react';

// MUI Stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { transaction } from 'redux/actions';

// components
import { Pagination, HeaderName } from 'jumbogold/common';
import MobileFilterPageSize from '../MobileFilterPageSize';
import MobileFilterPeriod from '../MobileFilterPeriod';
import OrderList from '../OrderList';
import OrderCard from '../OrderCard';

// Styling
import styles from './style';

const TransactionList = ({ classes }) => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.transaction);

  const [transactionList, setTransactionList] = useState([]);
  const [pageDetails, setPageDetails] = useState({});
  const [pageIndex, setPageIndex] = useState(1);

  const handleGetTransactionByParams = useCallback(async () => {
    const params = {
      pageIndex,
      pageSize: filter.pageSize,
      startTime: filter.startTime,
      endTime: filter.endTime,
    };

    
    const res = await dispatch(transaction.getTransactionByParams(params));
    const { success, data } = res;

    
    if (success) {
      const mutated = data.docs.map(t => {
        return {
          ...t,
          id: t._id,
          orders: t.orders.map(o => {
            return { ...o, id: o._id };
          }),
        };
      })
      setTransactionList(mutated);
      setPageDetails({
        totalItem: data.totalDocs,
        pageSize: data.limit,
      });
    }
  }, [dispatch, pageIndex, filter.pageSize, filter.startTime, filter.endTime]);

  useEffect(() => {
    handleGetTransactionByParams();
  }, [handleGetTransactionByParams]);

  const handleChangePageIndex = (value) => {
    setPageIndex(value);
  };

  return (
    <div>
      <Hidden smUp>
        <Typography className={classes.header}>Transaction History</Typography>
      </Hidden>

      <HeaderName name="Recent Orders" sideBar />

      <Hidden xsDown>
        <div className={classes.listHeader}>
          <div className={classes.headerItem}>
            <Typography>Date</Typography>
          </div>
          <div className={classes.headerItem}>
            <Typography>Transaction #</Typography>
          </div>
          <div className={classes.headerItem}>
            <Typography>Total Paid</Typography>
          </div>
        </div>
      </Hidden>

      <Hidden smUp>
        <div className={classes.filterContainer}>
          <Typography>Period</Typography>
          <MobileFilterPeriod />
          <MobileFilterPageSize />
        </div>
      </Hidden>

      <div>
        <Hidden xsDown>
          {transactionList.map((order) => (
            <OrderList key={order.id} order={order} />
          ))}
        </Hidden>

        <Hidden smUp>
          {transactionList.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </Hidden>

        <Pagination page={pageDetails} onPageChange={handleChangePageIndex} />
      </div>
    </div>
  );
};

export default withStyles(styles)(TransactionList);
