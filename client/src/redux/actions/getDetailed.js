import axios from "axios";

export const GET_DETAILED = "getDetailed";

export const getDetailed = (code) => {
  return code ? (dispatch => {
    return axios.get(`http://localhost:3001/countries/${code}`)
      .then(res => dispatch({
        type: GET_DETAILED,
        payload: res.data
      }));
  }) : {
    type: GET_DETAILED,
    payload: null
  }
}