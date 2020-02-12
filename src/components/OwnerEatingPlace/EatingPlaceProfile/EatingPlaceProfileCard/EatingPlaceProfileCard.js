import React from "react";
import styles from "./EatingPlaceProfileCard.module.scss";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";

const EatingPlaceProfileCard = ({
  cardType,
  eatingPlaces,
  removeSinglePlace
}) => {
  const removePlace = () => {
    let id = eatingPlaces.id;
    let z = localStorage.getItem("z");
    removeSinglePlace(z, id);
  };

  if (cardType === "ownerPlace") {
    return (
      <div className={styles.card}>
        <img
          className={styles.restaurantAvatar}
          src={eatingPlaces.avatar}
          alt="eatingPlaceAvatar"
        />
        <div className={styles.container}>
          <p>{eatingPlaces.info.restaurantName}</p>
          <p>
            {eatingPlaces.info.restaurantStreet}
            {eatingPlaces.info.restaurantBuildingNumber}
          </p>
          <p>{eatingPlaces.info.restaurantCity}</p>
        </div>
        <Button second>
          <Link
            className={styles.button}
            to={{
              pathname: "/eating-place-profile",
              state: {
                eatingPlace: eatingPlaces
              }
            }}
          >
            Przejdź do profilu
          </Link>
        </Button>
        <Button second>Edytuj ten profil</Button>
        <Button second onClick={removePlace}>
          Usuń ten profil
        </Button>
        <br />
      </div>
    );
  } else if (cardType === "searchedPlace") {
    return (
      <div className={styles.card}>
        <img
          className={styles.restaurantAvatar}
          src={eatingPlaces.avatar}
          alt="eatingPlaceAvatar"
        />
        <div className={styles.container}>
          <p>{eatingPlaces.info.restaurantName}</p>
          <p>
            {eatingPlaces.info.restaurantStreet}{" "}
            {eatingPlaces.info.restaurantBuildingNumber}
          </p>
          <p>{eatingPlaces.info.restaurantCity}</p>
        </div>
        <Button second>
          <Link
            className={styles.button}
            to={{
              pathname: "/loading-data-place",
              state: {
                placeId: eatingPlaces.id,
                eatingPlace: null
              }
            }}
          >
            Przejdź do profilu
          </Link>
        </Button>
        <br />
      </div>
    );
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getDataEatingPlace: id => dispatch(actions.getDataEatingPlace(id)),
    removeSinglePlace: (z, id) => dispatch(actions.removeSinglePlace(z, id))
  };
};

export default connect(null, mapDispatchToProps)(EatingPlaceProfileCard);
