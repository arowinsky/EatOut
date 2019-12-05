import React from "react";
import styles from "./OwnerBox.module.scss";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import EatingPlaceProfileCard from "../EatingPlaceProfile/EatingPlaceProfileCard/EatingPlaceProfileCard";
import { connect } from "react-redux";

class OwnerBox extends React.Component {
  render() {
    const { haveEatingPlace } = this.props;
    const startCreatingNewEatingPlace = true;
    return haveEatingPlace ? (
      <div className={styles.box_wrapper}>
        <div className={styles.header}>O to Twoje lokale gastronomiczne:</div>
        <EatingPlaceProfileCard eatingPlaces={haveEatingPlace} />
      </div>
    ) : (
      <div className={styles.box_wrapper}>
        Nie masz jeszcze restauracji
        <br />
        <Link
          to={{
            pathname: "/add-eating-place-first-form",
            state: {
              startCreatingNewEatingPlace: startCreatingNewEatingPlace
            }
          }}
        >
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
