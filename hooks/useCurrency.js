import React, { useEffect, useCallback, useMemo, useState } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';

// services
import { fetchCurrencyRates } from 'services/api/common';

const useCurrency = () => {
  const dispatch = useDispatch();
  const { common: { currency, currencyRates } } = useSelector((state) => state);
  const [rates, setRates] = useState(undefined);

  /*
  console.log('[USECURRENCY] ', currency, currencyRates);
  const rates = useMemo(() => {
    // console.log('[USE_MEMO RATES] ', currencyRates);      
    return currencyRates;
  }, [currency]);
  */
 
  const getExchangeRates = useCallback((v) => {
    // console.log('[USE_CALLBACK] ', v);
    if (v) setRates(v);
  }, [rates]);

  useEffect(() => {
    // console.log('[USE_EFFECT] ', currencyRates);    
    getExchangeRates(currencyRates);
  }, [currencyRates]);
  
  const handleUpdatePriceByCurrency = (v) => {
    if (rates) {
      // console.log('[handleUpdatePriceByCurrency price currency rate updated] ', v, currency, rates[currency], v * rates[currency]);
    }

    
    if (!rates) return v;
    if (rates) return v * rates[currency];    
  };

  return {
    updatePriceByCurrency: handleUpdatePriceByCurrency,
  };
};

export default useCurrency;
