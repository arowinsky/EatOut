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
      body: `values=${dataNewEatingPlace}&data=${data}&z=${z}`
    })
      .then(Response => Response.json())
      .then(response => {
        const { added, idPlace, idUser } = response;
        dispatch(addedPlace(added, idPlace, idUser));
      });
  };
};
export const addedPlace = (added, idPlace, idUser) => {
  console.log(added, idPlace, idUser);
  return {
    type: actionTypes.ADDED_NEW_PLACE,
    addedPlace: added,
    idAddedPlace: idPlace,
    idOwnerAddedEatingPlace: idUser
  };
};
export const generationCodeForClient = eatingPlaceId => {
  return dispatch => {
    const url = "http://localhost:8080/generation-code-for-client";
    fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: `eatingPlaceId=${eatingPlaceId}`
    })
      .then(Response => Response.json())
      .then(response => {
        const codeForClient = response.code;
        dispatch(returnCodeForClient(codeForClient));
      });
  };
};

export const returnCodeForClient = codeForClient => {
  return {
    type: actionTypes.RETURN_CODE_FOR_CLIENT,
    codeForClient: codeForClient
  };
};

export const sendCodeToVerification = clientCode => {
  console.log(clientCode);
  return dispatch => {
    const url = "http://localhost:8080/verification-client-code";
    fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: `clientCode=${clientCode}`
    })
      .then(Response => Response.json())
      .then(response => {
        dispatch(clientCodeIsVerified(response.isVerified));
      });
  };
};

export const clientCodeIsVerified = clientCodeIsVerified => {
  return {
    type: actionTypes.CLIENT_CODE_IS_VERIFIED,
    clientCodeIsVerified: clientCodeIsVerified
  };
};

export const sendClientOpinion = (
  clientOpinion,
  eatingPlaceId,
  z,
  blockedOpinionForm
) => {
  return dispatch => {
    const url = "http://localhost:8080/add-client-opinion";
    fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: `clientOpinion=${clientOpinion}&eatingPlaceId=${eatingPlaceId}&z=${z}`
    })
      .then(Response => Response.json())
      .then(response => {
        console.log(response);
        blockedOpinionForm = true;
        dispatch(blockOpinionForm(blockedOpinionForm));
      });
  };
};

export const blockOpinionForm = blockedOpinionForm => {
  console.log(blockedOpinionForm);
  return {
    type: actionTypes.BLOCKED_OPINION_FORM,
    blockOpinonForm: blockedOpinionForm
  };
};

export const uploadImagesEatingPlace = (
  restaurantAvatar,
  restaurantHeader,
  restaurantMenu,
  idAddedPlace,
  idOwnerAddedEatingPlace
) => {
  return dispatch => {
    const url = "http://localhost:8080/upload-img";
    console.log(restaurantAvatar, restaurantHeader, restaurantMenu);
    let data = new FormData();
    data.append("photo", restaurantAvatar);
    data.append("photo", restaurantHeader);
    data.append("photo", restaurantMenu);
    data.append("user", idOwnerAddedEatingPlace);
    data.append("user", idAddedPlace);
    fetch(url, {
      method: "POST",
      body: data
    })
      .then(Response => Response.json())
      .then(response => {
        console.log(response);
        const {
          uploadSuccess,
          invalidFormatFile,
          noAllImagesSended
        } = response;
        console.log("TCL: uploadSuccess", uploadSuccess);
        if (invalidFormatFile) {
          dispatch(invalidFormatImagesEatingPlace(invalidFormatFile));
          console.log("TCL: invalidFormatFile", invalidFormatFile);
        }
        if (noAllImagesSended) {
          dispatch(unavailableAllImagesEatingPlace(noAllImagesSended));
          console.log("TCL: noAllImagesSended", noAllImagesSended);
        }
        dispatch(uploadedEatingPlaceImages(uploadSuccess));
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
export const uploadedEatingPlaceImages = uploadedEatingPlaceImages => {
  console.log(uploadedEatingPlaceImages);
  return {
    type: actionTypes.UPLOADED_EATING_PLACE_IMAGES,
    uploadedEatingPlaceImages: uploadedEatingPlaceImages
  };
};
export const sendOwnerPost = (post, eatingPlaceName, eatingPlaceId) => {
  return dispatch => {
    const url = "http://localhost:8080/add-owner-post";
    fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: `textOfPost=${post}&eatingPlaceName=${eatingPlaceName}&eatingPlaceId=${eatingPlaceId}`
    })
      .then(Response => Response.json())
      .then(response => {
        console.log(response);
      });
  };
};
