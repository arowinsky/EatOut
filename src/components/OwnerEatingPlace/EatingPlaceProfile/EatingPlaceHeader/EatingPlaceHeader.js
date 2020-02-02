import React from "react";
import styles from "./EatingPlaceHeader.module.scss";
import Button from "../../../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";

class EatingPlaceHeader extends React.Component {
  userWantFollowPlace = (placeId, restaurantName) => {
    let z = localStorage.getItem("z");
    console.log(
      "TCL: EatingPlaceHeader -> userWantFollowPlace -> z, placeId, restaurantName",
      z,
      placeId,
      restaurantName
    );
    this.props.followPlace(z, placeId, restaurantName);
  };
  render() {
    const { eatingPlace, following } = this.props;
    console.log(eatingPlace);
    let restaurantAvatar;
    let restaurantHeader;
    let restaurantName;
    let restaurantStreet;
    let restaurantBuildingNumber;
    let restaurantCity;
    let placeId;

    if (eatingPlace) {
      placeId = eatingPlace.id;
      restaurantAvatar = eatingPlace.avatar;
      restaurantHeader = eatingPlace.header;
      restaurantName = eatingPlace.info.restaurantName;
      restaurantStreet = eatingPlace.info.restaurantStreet;
      restaurantBuildingNumber = eatingPlace.info.restaurantBuildingNumber;
      restaurantCity = eatingPlace.info.restaurantCity;
      console.log(following);
    }
    return (
      <div>
        <img
          className={styles.headerWrapper}
          src={restaurantHeader}
          alt="restaurantHeader"
        ></img>
        <img
          className={styles.iconWrapper}
          src={restaurantAvatar}
          alt="restaurantAvatar"
        ></img>
        <div className={styles.headerContent}>
          <div className={styles.adressWrapper}>
            <div className={styles.title}>{restaurantName}</div>
            <div>
              {restaurantStreet} {restaurantBuildingNumber}
            </div>
            <div>{restaurantCity}</div>
          </div>
          <div className={styles.adressWrapper}>
            {following ? (
              <Button second>Pzeestań obserwować</Button>
            ) : (
              <Button
                second
                onClick={() => {
                  this.userWantFollowPlace(placeId, restaurantName);
                }}
              >
                Obserwuj
              </Button>
            )}
          </div>
        </div>
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
      dispatch(actions.followPlace(z, placeId, restaurantName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EatingPlaceHeader);
