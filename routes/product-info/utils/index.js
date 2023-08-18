export const formatAttributeList = (list) => {
  let tempAttributeList = [];

  const formatEmptyGroupList = [...list].map((item) =>
    item.group?.trim() === '' || item.group === null
      ? { ...item, group: null }
      : { ...item, group: item.group.trim() },
  );

  for (let i = 0; i < formatEmptyGroupList.length; i += 1) {
    if (!tempAttributeList.includes(formatEmptyGroupList[i].group)) {
      tempAttributeList.push(formatEmptyGroupList[i].group);
    }
  }

  tempAttributeList = tempAttributeList.map((item) => {
    return {
      name: item,
      list: [],
    };
  });

  for (let i = 0; i < tempAttributeList.length; i += 1) {
    const tempList = [...formatEmptyGroupList].filter(
      (item) => item.group === tempAttributeList[i].name,
    );

    tempAttributeList[i] = {
      name: tempAttributeList[i].name,
      list: tempList,
    };
  }

  return tempAttributeList;
};
