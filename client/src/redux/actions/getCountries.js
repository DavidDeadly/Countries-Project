import axios from "axios";

export const GET_COUNTRIES = "getCountries";

export const getCountries = () => {
  return dispatch => {
    return (
      // Local
      // axios.get("http://192.168.1.56:3001/countries")
      axios.get("https://countries-svdb.herokuapp.com/countries")
        .then(response => dispatch({ 
            type: GET_COUNTRIES,
            payload: response.data
        }))
    )
  };
};
