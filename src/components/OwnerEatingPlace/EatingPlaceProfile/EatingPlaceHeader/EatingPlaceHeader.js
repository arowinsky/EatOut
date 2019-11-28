import React from "react";
import styles from "./EatingPlaceHeader.module.scss";

class EatingPlaceHeader extends React.Component {
  render() {
    const { eatingPlace } = this.props;
    console.log(eatingPlace);
    let restaurantAvatar;
    let restaurantHeader;
    let restaurantName;
    let restaurantStreet;
    let restaurantBuildingNumber;
    let restaurantCity;
    if (eatingPlace) {
      restaurantAvatar = eatingPlace.avatar;
      restaurantHeader = eatingPlace.header;
      restaurantName = eatingPlace.restaurantName;
      restaurantStreet = eatingPlace.restaurantStreet;
      restaurantBuildingNumber = eatingPlace.restaurantBuildingNumber;
      restaurantCity = eatingPlace.restaurantCity;
    }
    return (
      <div>
        <img
          className={styles.headerWrapper}
          src={restaurantHeader}
          alt="restaurantHeader"
        ></img>
        <img
          className={styles.iconWrapper}
          src={restaurantAvatar}
          alt="restaurantAvatar"
        ></img>

        <div className={styles.adressWrapper}>
          <div className={styles.title}>{restaurantName}</div>
          <div>
            {restaurantStreet} {restaurantBuildingNumber}
          </div>
          <div>{restaurantCity}</div>
        </div>
      </div>
    );
  }
}

export default EatingPlaceHeader;
