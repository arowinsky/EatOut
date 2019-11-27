import React from "react";
import styles from "./OwnerBox.module.scss";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import EatingPlaceProfileCard from "../EatingPlaceProfile/EatingPlaceProfileCard/EatingPlaceProfileCard";
import { connect } from "react-redux";

class OwnerBox extends React.Component {
  render() {
    const { haveEatingPlace, restaurantAvatar } = this.props;
    // let restaurantName;
    // let restaurantStreet;
    // let restaurantBuildingNumber;
    // let restaurantCity;
    // if (haveEatingPlace) {
    //   restaurantName = haveEatingPlace.restaurantName;
    //   restaurantStreet = haveEatingPlace.restaurantStreet;
    //   restaurantBuildingNumber = haveEatingPlace.restaurantBuildingNumber;
    //   restaurantCity = haveEatingPlace.restaurantCity;
    // }

    return haveEatingPlace ? (
      <div className={styles.box_wrapper}>
        Twoja restauracja to:
        <EatingPlaceProfileCard
          // restaurantAvatar={restaurantAvatar}
          // restaurantName={restaurantName}
          // restaurantStreet={restaurantStreet}
          // restaurantBuildingNumber={restaurantBuildingNumber}
          // restaurantCity={restaurantCity}
          eatingPlaces={haveEatingPlace}
        />
      </div>
    ) : (
      <div className={styles.box_wrapper}>
        Nie masz jeszcze restauracji
        <br />
        <Link to="/add-eating-place-first-form">
          <Button second>Dodaj swój lokal</Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurantAvatar: state.auth.restaurantAvatar,
    haveEatingPlace: state.auth.haveEatingPlace
  };
};

export default connect(mapStateToProps, null)(OwnerBox);
