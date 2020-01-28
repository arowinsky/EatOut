import React from "react";
import styles from "./EatingPlaceProfileCard.module.scss";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
import { Redirect } from "react-router-dom";

const EatingPlaceProfileCard = ({
  cardType,
  eatingPlaces,
  getDataEatingPlace,
  singleEatingPlace,
  removeSinglePlace
}) => {
  console.log(eatingPlaces);
  // const getDataPlace = id => {
  //   // console.log("wchodzi");
  //   getDataEatingPlace(id);
  //   if (singleEatingPlace) {
  //     console.log("chce przejsc");
  //     return (
  //       <Redirect
  //         to={{
  //           pathname: "/eating-place-profile",
  //           state: {
  //             eatingPlace: singleEatingPlace
  //           }
  //         }}
  //       />
  //     );
  //   }
  // };
  // this.removePlace = this.removePlace.bind(this);

  const removePlace = () => {
    let id = eatingPlaces.id;
    let z = localStorage.getItem("z");
    removeSinglePlace(z, id);
  };

  if (cardType === "ownerPlace") {
    console.log(eatingPlaces);
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
        <Button second onClick={removePlace}>
          Usuń ten profil
        </Button>
        <br />
      </div>
    );
  } else if (cardType === "searchedPlace") {
    console.log(eatingPlaces);
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
// const mapStateToProps = state => {
//   return {
//     singleEatingPlace: state.eatingPlaceProfile.singleEatingPlace
//   };
// };
const mapDispatchToProps = dispatch => {
  return {
    getDataEatingPlace: id => dispatch(actions.getDataEatingPlace(id)),
    removeSinglePlace: (z, id) => dispatch(actions.removeSinglePlace(z, id))
  };
};

export default connect(null, mapDispatchToProps)(EatingPlaceProfileCard);
