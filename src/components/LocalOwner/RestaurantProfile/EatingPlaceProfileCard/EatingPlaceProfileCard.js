import React from "react";
import styles from "./EatingPlaceProfileCard.module.scss";
const EatingPlaceProfileCard = () => {
  return (
    <div className={styles.card}>
      <img src="" alt="eatingPlaceAvatar" />
      <div className={styles.container}>
        <p>Poczekalnia</p>
        <p>Mickiewicza 38, Poznań</p>
      </div>
    </div>
  );
};
export default EatingPlaceProfileCard;
