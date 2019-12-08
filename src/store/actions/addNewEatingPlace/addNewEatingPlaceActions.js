import * as actionTypes from "../actionTypes";
export const addNewEatingPlace = (
  dataNewEatingPlace,
  restaurantAvatar,
  restaurantHeader,
  restaurantMenu
) => {
  return dispatch => {
    const z = localStorage.getItem("z");
    console.log(restaurantAvatar, restaurantHeader, restaurantMenu);
    let data = new FormData();
    data.append("photo", restaurantAvatar);
    data.append("photo", restaurantHeader);
    data.append("photo", restaurantMenu);
    const url = "http://localhost:8080/add-new-eating-place";
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
      body: `dataNewEatingPlace=${dataNewEatingPlace}&data=${data}&z=${z}`
    })
      .then(Response => Response.json())
      .then(response => {
        const {
          addedEatingPlace,
          invalidFormatFile,
          noAllImagesSended
        } = response;

        if (invalidFormatFile) {
          dispatch(invalidFormatImagesEatingPlace(invalidFormatFile));
          console.log("TCL: invalidFormatFile", invalidFormatFile);
        }
        if (noAllImagesSended) {
          dispatch(unavailableAllImagesEatingPlace(noAllImagesSended));
          console.log("TCL: noAllImagesSended", noAllImagesSended);
        }
        dispatch(addedPlace(addedEatingPlace));
      });
  };
};

export const invalidFormatImagesEatingPlace = invalidFormatFile => {
  console.log(invalidFormatFile);
  return {
    type: actionTypes.INVALID_FORMAT_IMAGES_EATING_PLACE,
    invalidFormatFile: invalidFormatFile
  };
};

export const unavailableAllImagesEatingPlace = unavailableAllImageEatingPlace => {
  return {
    type: actionTypes.UNAVAILABLE_ALL_IMAGES_EATING_PLACE,
    unavailableAllImageEatingPlace: unavailableAllImageEatingPlace
  };
};
export const addedPlace = (addedEatingPlace, idPlace, idUser) => {
  console.log(addedEatingPlace, idPlace, idUser);
  return {
    type: actionTypes.ADDED_NEW_PLACE,
    addedPlace: addedEatingPlace
  };
};
