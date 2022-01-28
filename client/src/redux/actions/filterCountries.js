export const FILTER_SORT = "filterCountries";

export const filterCountries = (conditions) => {

  return {
    type: FILTER_SORT,
    payload: conditions
  }
}

export function filtering (countries, conditions) {
  const act = conditions.find(c => c[0] === "activities");

  return countries.map(c => {
    if(conditions.length === 0) {
      c.filtered = false;
      return c
    };

    if(act && c[act[0]].length) {
      c[act[0]].find(a => a.id === Number(act[1])) ? c.filtered = false : c.filtered = true;
      return c;
    }
    
    conditions.some(con => {
      if(c[con[0]] === con[1]) return true;
      return false;
    }) ? c.filtered = false : c.filtered = true;

    return c;
  })
}