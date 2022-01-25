import axios from "axios";

export const GET_COUNTRY = "getCountry";

export const getCountry = (code) => {
  return dispatch => {
    return axios.get(`http://localhost:3001/countries/${code}`)
      .then(res => {
        return dispatch({
          type: GET_COUNTRY,
          payload: res.data
        })
      })
  }
}