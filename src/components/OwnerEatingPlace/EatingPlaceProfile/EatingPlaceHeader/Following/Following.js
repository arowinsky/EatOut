import React from "react";
import Button from "../../../../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../../../../store/actions/index";

class Following extends React.Component {
  state = {
    askFollowingPlaces: true
  };
  userWantFollowPlace = () => {
    const { z, placeId, restaurantName } = this.props;
    this.props.followPlace(z, placeId, restaurantName);
  };
  userWantUnfollowPlace = () => {
    const { z, placeId } = this.props;

    this.props.unfollowPlace(z, placeId);
  };
  render() {
    const { askFollowingPlaces } = this.state;
    const { checkFollowingPlaces, z, placeId, following } = this.props;
    if (askFollowingPlaces) {
      console.log(z, placeId);
      checkFollowingPlaces(z, placeId);
      this.setState(() => ({ askFollowingPlaces: null }));
      console.log(askFollowingPlaces);
    }

    return (
      <div>
        {following ? (
          <Button second onClick={this.userWantUnfollowPlace}>
            Przestań obserwować
          </Button>
        ) : (
          <Button second onClick={this.userWantFollowPlace}>
            Obserwuj
          </Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    following: state.eatingPlaceProfile.userFollowingPlace
  };
};
const mapDispatchToProps = dispatch => {
  return {
    followPlace: (z, placeId, restaurantName) =>
      dispatch(actions.followPlace(z, placeId, restaurantName)),
    unfollowPlace: (z, placeId) => dispatch(actions.unfollowPlace(z, placeId)),
    checkFollowingPlaces: (z, placeId) =>
      dispatch(actions.checkFollowingPlaces(z, placeId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Following);
