import axios from "axios";

export const QUERY_SEARCH = "querySearch";

export function querySearch (input) {
  return dispatch => {
    return axios.get(`http://192.168.1.56:3001/countries?name=${input}`)
      .then(response => dispatch({
          type: QUERY_SEARCH,
          payload: response.data
        })
      )
  } 
}