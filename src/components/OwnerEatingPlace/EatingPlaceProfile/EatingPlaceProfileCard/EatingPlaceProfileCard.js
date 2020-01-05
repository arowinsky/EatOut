import React from "react";
import styles from "./EatingPlaceProfileCard.module.scss";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";
const EatingPlaceProfileCard = ({ cardType, eatingPlaces }) => {
  console.log(eatingPlaces);
  if (cardType === "ownerPlace") {
    const eatingPlacesProfilesCards = eatingPlaces
      ? eatingPlaces.map(eatingPlaces => {
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
                    pathname: "/eating-place-profile",
                    state: {
                      eatingPlace: eatingPlaces
                    }
                  }}
                >
                  Przejdź do profilu
                </Link>
              </Button>
              <br />
            </div>
          );
        })
      : null;
    return <div>{eatingPlacesProfilesCards}</div>;
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
              pathname: "/eating-place-profile",
              state: {
                eatingPlace: eatingPlaces
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

export default EatingPlaceProfileCard;
