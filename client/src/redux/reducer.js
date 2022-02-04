import { GET_COUNTRIES, SORT_COUNTRIES, FILTER_SORT, QUERY_SEARCH, GET_DETAILED, SORT_COUNTRIES_DESC, filtering } from "./actions";

const initialState = {
  countries: [],
  activities: [],
  filteredState: [],
  country: null,
  queryError: false
}

const reducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      payload.countries.forEach(c => c.filtered = false);
      return {
        ...state,
        activities: payload.activities,
        countries: payload.countries,
        queryError: false
      }
    case GET_DETAILED:
      return {
        ...state,
        country: payload
      }
    case SORT_COUNTRIES: 
      return {
        ...state,
        countries: state.countries.sort((a, b) => a[payload] > b[payload] ? 1 : -1)
      }
    case SORT_COUNTRIES_DESC:
      return {
        ...state,
        countries: state.countries.sort((a, b) => a[payload] > b[payload] ? -1 : 1)
      }
    case FILTER_SORT:
      const filteredCountries = filtering(state.countries, payload);
      return {
        ...state,
        countries: filteredCountries,
        filteredState: filteredCountries.reduce((a, b) => {
          if(b.filtered) a.push(b.code)
          return a
        }, [])
      }
    case QUERY_SEARCH:
      if(!payload.countries.length) {
        return {
          ...state,
          countries: payload.countries,
          queryError: true
        }
      }
      const updatedFetch = payload.countries.map(c => {
        if(state.filteredState.includes(c.code)) c.filtered = true;
        else c.filtered = false;
        return c;
      })
      return {
        ...state,
        countries: updatedFetch,
        queryError: false
      }
    default:
      return state;
  }
};

export default reducer;