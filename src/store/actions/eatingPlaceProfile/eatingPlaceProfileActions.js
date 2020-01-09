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

export const blockOpinionForm = blockedOpinionForm => {
  console.log(blockedOpinionForm);
  return {
    type: actionTypes.BLOCKED_OPINION_FORM,
    blockOpinonForm: blockedOpinionForm
  };
};
export const addOwnerPost = (post, eatingPlaceName, eatingPlaceId) => {
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
        console.log(response.postsForCurrentProfile);
        const { addedPost, postsForCurrentProfile } = response;
        dispatch(addedOwnerPost(addedPost));
        dispatch(updatedOwnerPosts(postsForCurrentProfile));
      });
  };
};
export const addedOwnerPost = addedOwnerPost => {
  return {
    type: actionTypes.ADDED_OWNER_POST,
    addedOwnerPost: addedOwnerPost
  };
};

export const updatedOwnerPosts = updatedOwnerPosts => {
  return {
    type: actionTypes.UPDATED_OWNER_POST,
    updatedOwnerPosts: updatedOwnerPosts
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
        console.log(response.opinionsForCurrentProfile);
        blockedOpinionForm = true;
        const { opinionsForCurrentProfile } = response;
        dispatch(blockOpinionForm(blockedOpinionForm));
        dispatch(updatedClientsOpinions(opinionsForCurrentProfile));
      });
  };
};
export const updatedClientsOpinions = updatedClientsOpinions => {
  return {
    type: actionTypes.UPDATED_CLIENTS_OPINIONS,
    updatedClientsOpinions: updatedClientsOpinions
  };
};
export const getDataEatingPlace = placeId => {
  console.log(placeId);
  return dispatch => {
    const url = "http://localhost:8080/get-data-place-single";
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
      body: `placeId=${placeId}`
    })
      .then(Response => Response.json())
      .then(response => {
        console.log(response);
        dispatch(singleEatingPlace(response.place));
      });
  };
};

export const singleEatingPlace = singleEatingPlace => {
  console.log(singleEatingPlace);
  return {
    type: actionTypes.SINGLE_EATING_PLACE,
    singleEatingPlace: singleEatingPlace
  };
};
