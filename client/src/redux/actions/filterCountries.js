export const FILTER_COUNTRIES = "filterCountries";

export const filterCountries = ({ value, desfilter, key }) => {
  const filtering = key === "activities" ? (countries) => {
    return countries.map(c => {
      const act = c.activities.find(a => a.id === value);
      if(!act) c.filtered = true;
      else c.filtered = false;
      return c;
    });
  }
  : (countries) => {
    return countries.map(c => {
      if(c.continent !== value) c.filtered = true;
      else c.filtered = false;
      return c;
    })
  };
  const desfiltering = key === "activities" ? (countries) => {
    return countries.map(c => {
      const act = c.activities.find(a => a.id === value);
      if(!act) c.filtered = false;
      return c;
    });
  }
  : (countries) => {
    return countries.map(c => {
      if(c.continent !== value) c.filtered = false;
      return c;
    });
  };

  return {
    type: FILTER_COUNTRIES,
    payload: desfilter ? desfiltering : filtering
  }
}

// Expected Input:
// {
//    value: "Asia" / "Soccer"
//    desfilter: true / false:default
//    key: continent:default / actvities 
// }

//Reducer job:
//  action.parload(countries);