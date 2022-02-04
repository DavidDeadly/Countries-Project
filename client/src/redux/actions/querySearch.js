import axios from "axios";
import { GET_COUNTRIES } from "./getCountries.js";

export const QUERY_SEARCH = "querySearch";

export function querySearch (input) {
  
  return !input ? dispatch => {
    // Local
    // return axios.get("http://192.168.1.56:3001/countries")
    return axios.get("https://countries-svdb.herokuapp.com/countries")
      .then(response => dispatch({
          type: GET_COUNTRIES,
          payload: response.data
      }));
  }
  :  dispatch => {
    // Local
    // return axios.get(`http://192.168.1.56:3001/countries?name=${input}`)
    return axios.get(`https://countries-svdb.herokuapp.com/countries?name=${input}`)
      .then(response => dispatch({
          type: QUERY_SEARCH,
          payload: response.data
        })
      ).catch(err =>  dispatch({
        type: QUERY_SEARCH,
        payload: { countries: [] },
        queryError: true
      }))
  } 
}