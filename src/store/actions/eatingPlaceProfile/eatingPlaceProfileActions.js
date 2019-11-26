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
