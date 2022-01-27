export const FILTER_SORT = "filterCountries";

export const filterCountries = (conditions, And) => {
  function filteringAnd (countries) {
    return countries.map(c => {
      if(conditions.length === 0) {
        c.filtered = false;
        return c
      } 
      conditions.every(con => {
        if (c[con[0]] instanceof Array) {
          const x = c[con[0]].find(a => a.id === Number(con[1]))
          if(x) return true;
        }
        if(c[con[0]] === con[1]) return true;
        return false;
      }) ? c.filtered = false : c.filtered = true;
      return c;
    });
  }
  
  function filteringOr (countries) {
    return countries.map(c => {
      if(conditions.length === 0) {
        c.filtered = false;
        return c
      } 
      conditions.some(con => {
        if (c[con[0]] instanceof Array) {
          const x = c[con[0]].find(a => a.id === Number(con[1]))
          if(x) return true;
        }
        if(c[con[0]] === con[1]) return true;
        return false;
      }) ? c.filtered = false : c.filtered = true;
      return c;
    });
  }


  return {
    type: FILTER_SORT,
    payload: And ? filteringAnd : filteringOr
  }

}