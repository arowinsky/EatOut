import React from "react";
import styles from "./EatingPlaceProfileCard.module.scss";
import { connect } from "react-redux";
const EatingPlaceProfileCard = ({ restaurantAvatar }) => {
  console.log(restaurantAvatar);
  return (
    <div className={styles.card}>
      <img src={restaurantAvatar} alt="eatingPlaceAvatar" />
      <div className={styles.container}>
        <p>Poczekalnia</p>
        <p>Mickiewicza 38, Poznań</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    restaurantAvatar: state.auth.restaurantAvatar
  };
};
export default connect(mapStateToProps, null)(EatingPlaceProfileCard);
