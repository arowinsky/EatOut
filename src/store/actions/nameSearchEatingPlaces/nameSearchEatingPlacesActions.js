export const nameSearchEatingPlaces = name => {
  console.log(name);
  return dispatch => {
    const url = `http://localhost:8080/verification-email?name=${name}`;
    fetch(url, {
      method: "GET",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      mode: "cors"
    })
      .then(Response => Response.json())
      .then(response => {
        console.log(response);
      });
  };
};
