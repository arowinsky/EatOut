import React from "react";
import styles from "./FollowingPlaces.module.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import Following from "../../OwnerEatingPlace/EatingPlaceProfile/EatingPlaceHeader/Following/Following";
const followingPlaces = ({ getFollowingPlaces, followingPlaces }) => {
  let z = localStorage.getItem("z");
  getFollowingPlaces(z);
  return (
    <div>
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
                <Following z={z} placeId={placeId} restaurantName={placeName} />
              </div>
            </div>
          );
        })
      ) : (
        <div>Nie obserwujesz jeszce zadnych lokali</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    followingPlaces: state.eatingPlaceProfile.followingPlaces
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getFollowingPlaces: z => dispatch(actions.getFollowingPlaces(z))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(followingPlaces);
