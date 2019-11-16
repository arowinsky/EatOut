import React from "react";
import styles from "./EatingPlaceProfileCard.module.scss";
import { connect } from "react-redux";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";
const EatingPlaceProfileCard = ({ restaurantAvatar }) => {
  console.log(restaurantAvatar);
  return (
    <div className={styles.card}>
      <img
        className={styles.restaurantAvatar}
        src={restaurantAvatar}
        alt="eatingPlaceAvatar"
      />
      <div className={styles.container}>
        <p>Poczekalnia</p>
        <p>Mickiewicza 38, Poznań</p>
      </div>
      <Button second>
        <Link className={styles.button} to="/restaurant-profile">
          Przejdź do profilu
        </Link>
      </Button>
      <br />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    restaurantAvatar: state.auth.restaurantAvatar
  };
};
export default connect(mapStateToProps, null)(EatingPlaceProfileCard);
