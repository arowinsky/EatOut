import React from "react";
import styles from "./FollowingPlaces.module.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import Following from "../../OwnerEatingPlace/EatingPlaceProfile/EatingPlaceHeader/Following/Following";

class FollowingPlaces extends React.Component {
  state = {
    askFollowingPlaces: true
  };
  render() {
    const { askFollowingPlaces } = this.state;
    const {
      getFollowingPlaces,
      followingPlaces,
      userUnfollowingPlace
    } = this.props;
    let z = localStorage.getItem("z");
    if (askFollowingPlaces) {
      getFollowingPlaces(z);
      this.setState(() => ({ askFollowingPlaces: null }));
    } else if (userUnfollowingPlace) {
      getFollowingPlaces(z);
    }
    return (
      <div className={styles.wrapper}>
        {followingPlaces ? (
          followingPlaces.map(followingPlace => {
            const { placeId, placeName, avatar } = followingPlace;
            return (
              <div className={styles.followingPlaces}>
                <div>
                  <img
                    className={styles.icon}
                    src={avatar}
                    alt="placeAvatar"
                  ></img>
                </div>
                <div className={styles.placeName}>{placeName}</div>

                <div className={styles.button}>
                  <Following
                    z={z}
                    placeId={placeId}
                    restaurantName={placeName}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div>Nie obserwujesz jeszcze żadnych lokali</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    followingPlaces: state.eatingPlaceProfile.followingPlaces,
    userUnfollowingPlace: state.eatingPlaceProfile.userUnfollowingPlace
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getFollowingPlaces: z => dispatch(actions.getFollowingPlaces(z))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowingPlaces);
