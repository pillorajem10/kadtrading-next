import { colorGroupList } from 'constant';

export const formatColorList = (list) => {
  const tempArr = [];

  for (let i = 0; i < list.length; i += 1) {
    for (let j = 0; j < colorGroupList.length; j += 1) {
      if (colorGroupList[j].name === list[i]) {
        tempArr.push(colorGroupList[j]);
      }
    }
  }

  return tempArr;
};
