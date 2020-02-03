import React from "react";
import Button from "../../../../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../../../../store/actions/index";
const Following = ({
  z,
  placeId,
  restaurantName,
  following,
  followPlace,
  unfollowPlace
}) => {
  const userWantFollowPlace = () => {
    followPlace(z, placeId, restaurantName);
  };
  const userWantUnfollowPlace = () => {
    unfollowPlace(z, placeId);
  };
  return (
    <div>
      {following ? (
        <Button second onClick={userWantUnfollowPlace}>
          Pzeestań obserwować
        </Button>
      ) : (
        <Button second onClick={userWantFollowPlace}>
          Obserwuj
        </Button>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    following: state.eatingPlaceProfile.userFollowingPlace
  };
};
const mapDispatchToProps = dispatch => {
  return {
    followPlace: (z, placeId, restaurantName) =>
      dispatch(actions.followPlace(z, placeId, restaurantName)),
    unfollowPlace: (z, placeId) => dispatch(actions.unfollowPlace(z, placeId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Following);
