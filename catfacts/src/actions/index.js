import axios from "axios";

export const fetchCat = () => dispatch => {
  dispatch({ type: "FETCHING_CAT_START" });
  axios 
    .get("https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts/random")
    .then(res => {
      console.log(res.data, "incoming cat fact");
      dispatch({ type: "FETCHING_CAT_SUCCESS", payload: res.data });
    })
    .catch(err => {
      dispatch({ type: "FETCHING_CAT_FAILURE", payload: err.response });
    });
};
