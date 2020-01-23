import * as actionTypes from "../actionTypes";

export const getDataEatingPlace = z => {
  return dispatch => {
    let haveEatingPlace;
    const url = "http://localhost:8080/get-data-place";
    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: `z=${z}`
    })
      .then(Response => Response.json())
      .then(response => {
        console.log(response);
        haveEatingPlace = response.places;
        dispatch(ownerHaveEatingPlace(haveEatingPlace));
      });
  };
};

export const ownerHaveEatingPlace = haveEatingPlace => {
  return {
    type: actionTypes.OWNER_HAVE_EATING_PLACE,
    haveEatingPlace: haveEatingPlace
  };
};
