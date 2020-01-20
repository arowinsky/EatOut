import * as actionTypes from "../actionTypes";
export const getUserData = z => {
  console.log(z);
  return dispatch => {
    const url = "http://localhost:8080/get-user-data";
    fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        ContentType: "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      referrer: "no-referrer",
      mode: "no-cors",
      body: `z=${z}`
    })
      .then(Response => Response.json())
      .then(response => {
        console.log(response);
      });
  };
};
