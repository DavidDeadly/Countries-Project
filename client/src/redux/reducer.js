import { GET_COUNTRIES, SORT_COUNTRIES, FILTER_SORT } from "./actions";

const initialState = {
  countries: [],
  activities: [],
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
    default:
      return state;
  }
};

export default reducer;