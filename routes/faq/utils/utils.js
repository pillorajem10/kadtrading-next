export const formatFaqs = (faqList) => {
  const tempArr = [];

  for (let i = 0; i < faqList.length; i += 1) {
    for (let j = 0; j < faqList[i].sub.length; j += 1) {
      for (let k = 0; k < faqList[i].sub[j].list.length; k += 1) {
        tempArr.push(faqList[i].sub[j].list[k]);
      }
    }
  }

  return tempArr;
};
