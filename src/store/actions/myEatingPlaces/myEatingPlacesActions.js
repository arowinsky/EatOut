import * as actionTypes from "../actionTypes";
export const removeSinglePlace = (z, id) => {
  return dispatch => {
    const url = "http://localhost:8080/remove-single-place";
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
      body: `z=${z}&id=${id}`
    })
      .then(Response => Response.json())
      .then(response => {
        console.log(response);
      });
  };
};
