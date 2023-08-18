import React from 'react';
import { useRouter } from 'next/router';

// MUI Stuff
import { Hidden } from '@material-ui/core';

// layout
import UserLayout from 'layout/UserLayout';

// components
import TransactionList from 'routes/transaction-history/components/TransactionList';
import TransactionDetails from 'routes/transaction-history/components/TransactionDetails';
import MobileTransactionDetails from 'routes/transaction-history/components/MobileTransactionDetails';

const Transaction = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <UserLayout>
      {Object.keys(query).length === 0 ? (
        <TransactionList />
      ) : (
        <>
          <Hidden xsDown>
            <TransactionDetails id={query.id} />
          </Hidden>
          <Hidden smUp>
            <MobileTransactionDetails id={query.id} />
          </Hidden>
        </>
      )}
    </UserLayout>
  );
};

export default Transaction;
