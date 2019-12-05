import * as actionTypes from "../actionTypes";
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
        const { uploadSuccess } = response;
        console.log("TCL: uploadSuccess", uploadSuccess);

        dispatch(uploadedEatingPlaceImages(uploadSuccess));
      });
  };
};
export const uploadedEatingPlaceImages = uploadedEatingPlaceImages => {
  console.log(uploadedEatingPlaceImages);
  return {
    type: actionTypes.UPLOADED_EATING_PLACE_IMAGES,
    uploadedEatingPlaceImages: uploadedEatingPlaceImages
  };
};
