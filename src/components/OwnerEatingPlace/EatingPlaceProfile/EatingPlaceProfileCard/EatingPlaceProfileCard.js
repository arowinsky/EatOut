import React from "react";
import styles from "./EatingPlaceProfileCard.module.scss";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";
const EatingPlaceProfileCard = ({ eatingPlaces }) => {
  console.log(eatingPlaces);
  const eatingPlacesProfilesCards = eatingPlaces.length
    ? eatingPlaces.map(eatingPlaces => {
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
              <Link className={styles.button} to="/eating-place-profile">
                Przejdź do profilu
              </Link>
            </Button>
            <br />
          </div>
        );
      })
    : null;
  return <div>{eatingPlacesProfilesCards}</div>;
};

export default EatingPlaceProfileCard;
