export const filterTagList = (filter) => {
  const { sortBy, sortOrder, ...rest } = filter;

  return { ...rest };
};

export const removePropFromQuery = (key, value, query) => {
  const tempQuery = { ...query };

  if (typeof tempQuery[key] === 'string') {
    if (tempQuery[key] === value) {
      delete tempQuery[key];
    }
  } else {
    tempQuery[key] = tempQuery[key].filter((item) => item !== value);
  }

  return tempQuery;
};

export const addPropToQuery = (key, value, query) => {
  let tempQuery = { ...query };

  if (tempQuery[key]) {
    if (typeof tempQuery[key] === 'string') {
      if (tempQuery[key] === value) {
        delete tempQuery[key];
      } else {
        tempQuery = { ...tempQuery, [key]: [tempQuery[key], value] };
      }
    } else if (tempQuery[key].find((item) => item === value)) {
      tempQuery[key] = tempQuery[key].filter((item) => item !== value);
    } else {
      tempQuery[key] = [...tempQuery[key], value];
    }
  } else {
    tempQuery = { ...tempQuery, [key]: value.split(',') };
  }
  
  return tempQuery;
};

/**
 * format query params, for example:
 * from : c1=12345&c2=12345&colors=white&colors=black
 * to : { c1: "12345", c2: "12345", colors: ["white", "black"]}
 * @param {*} query
 */
export const formatQueryParams = (query) => {
  const entries = query
    .split('&')
    .map((item) => (item.split('=').length < 2 ? [item, ''] : item.split('=')));

  let params = {};

  for (let i = 0; i < entries.length; i += 1) {
    if (params[entries[i][0]] === undefined) {
      if (
        // entries[i][0] === 'labs' ||
        // entries[i][0] === 'shapes'
        // entries[i][0] === 'colorGroups' ||
        // entries[i][0] === 'materials' ||
        // entries[i][0] === 'labels' ||
        entries[i][0] === 'styles'
      ) {
        params = { ...params, [entries[i][0]]: [entries[i][1]] };
      } else {
        params = { ...params, [entries[i][0]]: entries[i][1] };
      }
    } else {
      params = {
        ...params,
        [entries[i][0]]: [...params[entries[i][0]], entries[i][1]],
      };
    }
  }

  return params;
};

export const formatCategoryIds = (params) => {
  if (params.c3) {
    const { c1, c2, c3, ...rest } = params;
    return { ...rest, c3 };
  }

  if (params.c2) {
    const { c1, c2, ...rest } = params;
    return { ...rest, c2 };
  }

  return params;
};
