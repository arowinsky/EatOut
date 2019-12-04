import React from "react";
import styles from "./OwnerBox.module.scss";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import EatingPlaceProfileCard from "../EatingPlaceProfile/EatingPlaceProfileCard/EatingPlaceProfileCard";
import { connect } from "react-redux";

class OwnerBox extends React.Component {
  render() {
    const { haveEatingPlace, clientsOpinions } = this.props;
    console.log(clientsOpinions);

    return haveEatingPlace ? (
      <div className={styles.box_wrapper}>
        <div className={styles.header}>O to Twoje lokale gastronomiczne:</div>
        <EatingPlaceProfileCard
          eatingPlaces={haveEatingPlace}
          clientsOpinions={clientsOpinions}
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
    haveEatingPlace: state.auth.haveEatingPlace,
    clientsOpinions: state.eatingPlaceProfile.clientsOpinions
  };
};

export default connect(mapStateToProps, null)(OwnerBox);
