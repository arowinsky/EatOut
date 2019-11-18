import React from "react";
import styles from "./EatingPlaceProfileCard.module.scss";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";
const EatingPlaceProfileCard = ({
  restaurantAvatar,
  restaurantName,
  restaurantStreet
}) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.restaurantAvatar}
        src={restaurantAvatar}
        alt="eatingPlaceAvatar"
      />
      <div className={styles.container}>
        <p>{restaurantName}</p>
        <p>{restaurantStreet}</p>
      </div>
      <Button second>
        <Link className={styles.button} to="/eating-place-profile">
          Przejdź do profilu
        </Link>
      </Button>
      <br />
    </div>
  );
};

export default EatingPlaceProfileCard;
