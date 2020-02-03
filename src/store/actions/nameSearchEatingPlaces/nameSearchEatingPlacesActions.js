import * as actionTypes from "../actionTypes";
export const nameSearchEatingPlaces = name => {
  return dispatch => {
    const url = `http://localhost:8080/name-search?name=${name}`;
    fetch(url, {
      method: "GET",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      mode: "cors"
    })
      .then(Response => Response.json())
      .then(response => {
        const { matchingPlaces } = response;
        dispatch(searchedEatingPlaces(matchingPlaces));
      });
  };
};
export const searchedEatingPlaces = searchedEatingPlaces => {
  return {
    type: actionTypes.SEARCHED_EATING_PLACES,
    searchedEatingPlaces: searchedEatingPlaces
  };
};
