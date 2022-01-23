import { GET_COUNTRIES, SORT_COUNTRIES, FILTER_SORT, QUERY_SEARCH } from "./actions";

const initialState = {
  countries: [],
  activities: [],
  querySearch: []
}

const reducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      console.log(payload);
      payload.countries.forEach(c => c.filtered = false);
      return {
        ...state,
        activities: payload.activities,
        countries: payload.countries
      }
    case SORT_COUNTRIES: 
      return {
        ...state,
        countries: [...payload(state.countries)]
      }
    case FILTER_SORT:
      return {
        ...state,
        countries: payload(state.countries)
      }
    case QUERY_SEARCH:
      return {
        ...state,
        querySearch: payload.countries,
        activities: payload.activities
      }
    default:
      return state;
  }
};

export default reducer