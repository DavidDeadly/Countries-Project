import axios from "axios";
import { GET_COUNTRIES } from "./getCountries.js";

export function querySearch (input) {
  
  return !input ? dispatch => {
    return axios.get("http://192.168.1.56:3001/countries")
      .then(response => dispatch({
          type: GET_COUNTRIES,
          payload: response.data
      }));
  }
  :  dispatch => {
    return axios.get(`http://192.168.1.56:3001/countries?name=${input}`)
      .then(response => dispatch({
          type: GET_COUNTRIES,
          payload: response.data
        })
      )
  } 
}