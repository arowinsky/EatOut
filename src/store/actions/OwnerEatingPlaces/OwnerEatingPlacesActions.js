import * as actionTypes from "../actionTypes";
export const getDataEatingPlace = z => {
  return dispatch => {
    const url = `http://localhost:8080/get-data-place?z=${z}`;
    fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow"
    })
      .then(Response => Response.json())
      .then(response => {
        const { places } = response;
        dispatch(ownerHaveEatingPlace(places));
      });
  };
};
export const removeSinglePlace = (z, id) => {
  return dispatch => {
    const url = "http://localhost:8080/remove-single-place";
    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: `z=${z}&id=${id}`
    })
      .then(Response => Response.json())
      .then(response => {
        const { removePlace, ownerPlaces } = response;
        if (removePlace) {
          dispatch(ownerHaveEatingPlace(ownerPlaces));
        }
      });
  };
};
export const removeAllPlaces = z => {
  return dispatch => {
    const url = `http://localhost:8080/remove-all-place-owner/${z}`;
    fetch(url, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow"
    })
      .then(Response => Response.json())
      .then(response => {
        const { removeAllPlace, ownerPlaces } = response;
        if (removeAllPlace) {
          dispatch(ownerHaveEatingPlace(ownerPlaces));
        }
      });
  };
};

export const ownerHaveEatingPlace = haveEatingPlace => {
  return {
    type: actionTypes.OWNER_HAVE_EATING_PLACE,
    haveEatingPlace: haveEatingPlace
  };
};
