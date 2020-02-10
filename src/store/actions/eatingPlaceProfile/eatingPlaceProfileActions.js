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
        const { code } = response;
        dispatch(returnCodeForClient(code));
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
export const getDataSingleEatingPlace = (z, placeId) => {
  return dispatch => {
    const url = `http://localhost:8080/get-data-place-single?z=${z}&placeId=${placeId}`;
    fetch(url, {
      method: "GET",
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
        const { place } = response;
        const { following } = place;
        dispatch(singleEatingPlace(place));
        dispatch(userFollowingPlace(following));
      });
  };
};

export const singleEatingPlace = singleEatingPlace => {
  return {
    type: actionTypes.SINGLE_EATING_PLACE,
    singleEatingPlace: singleEatingPlace
  };
};
export const userFollowingPlace = userFollowingPlace => {
  return {
    type: actionTypes.USER_FOLLOWING_PLACE,
    userFollowingPlace: userFollowingPlace
  };
};
export const checkFollowingPlaces = (z, placeId) => {
  return dispatch => {
    const url = `http://localhost:8080/check-following-places?z=${z}&placeId=${placeId}`;
    fetch(url, {
      method: "GET",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },

      mode: "cors"
    })
      .then(Response => Response.json())
      .then(response => {
        const { userFollowing } = response;
        dispatch(userFollowingPlace(userFollowing));
      });
  };
};

export const followPlace = (z, placeId, restaurantName) => {
  return dispatch => {
    const url = "http://localhost:8080/add-follow";
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
      body: `z=${z}&placeId=${placeId}&placeName=${restaurantName}`
    })
      .then(Response => Response.json())
      .then(response => {
        const { userFollowing } = response;
        dispatch(userFollowingPlace(userFollowing));
      });
  };
};

export const unfollowPlace = (z, placeId) => {
  return dispatch => {
    const url = `http://localhost:8080/remove-follow/${z}/${placeId}`;
    fetch(url, {
      method: "DELETE",
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
        const { deleteFollow } = response;
        if (deleteFollow) {
          let userFollowing = false;
          dispatch(userFollowingPlace(userFollowing));
        }
      });
  };
};

export const getFollowingPlaces = z => {
  return dispatch => {
    const url = `http://localhost:8080/get-following-places?z=${z}`;
    fetch(url, {
      method: "GET",
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
        const { follow } = response;
        dispatch(followingPlaces(follow));
      });
  };
};

export const followingPlaces = followingPlaces => {
  return {
    type: actionTypes.FOLLOWING_PLACE,
    followingPlaces: followingPlaces
  };
};
