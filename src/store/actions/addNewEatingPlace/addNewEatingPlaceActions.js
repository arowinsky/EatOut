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
    data.append("places", dataNewEatingPlace);
    data.append("z", z);
    const url = "http://localhost:8080/add-new-eating-place";
    fetch(url, {
      method: "POST",
      body: data
    })
      .then(Response => Response.json())
      .then(response => {
        const {
          uploadFail,
          invalidFormatFile,
          noAllImagesSended,
          addedEatingPlace
        } = response;
        console.log(response);
        if (uploadFail) {
          dispatch(uploadFailImagesEatingPlace(uploadFail));
          console.log("TCL: uploadFail", uploadFail);
        }
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

export const uploadFailImagesEatingPlace = uploadFailImagesEatingPlace => {
  return {
    type: actionTypes.UPLOAD_IMAGES_EATING_PLACE_IS_FAIL,
    uploadFailImagesEatingPlace: uploadFailImagesEatingPlace
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
