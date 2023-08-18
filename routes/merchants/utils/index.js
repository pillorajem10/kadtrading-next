export const destructingMerchantList = (merchantList) => {
  const tempArray = [];

  for (let i = 0; i < merchantList.length; i += 1) {
    for (let j = 0; j < merchantList[i].value.length; j += 1) {
      tempArray.push({
        label: merchantList[i].label,
        value: merchantList[i].value[j],
      });
    }
  }

  return tempArray;
};

export const structuringMerchantList = (merchantList) => {
  const headerList = [...merchantList].map((merchant) => merchant.label);
  const uniqueHeaderList = [...headerList].filter(
    (item, index) => headerList.indexOf(item) === index,
  );
  let merchants = [];

  for (let i = 0; i < uniqueHeaderList.length; i += 1) {
    const tempArray = [...merchantList]
      .filter((merchant) => merchant.label === uniqueHeaderList[i])
      .map((item) => item.value);

    merchants = [...merchants, { label: uniqueHeaderList[i], value: [...tempArray] }];
  }

  return merchants;
};
