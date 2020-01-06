import * as actionTypes from "../actionTypes";
export const nameSearchEatingPlaces = name => {
  console.log(name);
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
        console.log(response);
        const { matchingPlaces } = response;
        dispatch(searchedEatingPlaces(matchingPlaces));
      });
  };
};
export const searchedEatingPlaces = searchedEatingPlaces => {
  console.log(searchedEatingPlaces);
  return {
    type: actionTypes.SEARCHED_EATING_PLACES,
    searchedEatingPlaces: searchedEatingPlaces
  };
};
