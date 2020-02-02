import React from "react";
import styles from "./EatingPlaceHeader.module.scss";
import Following from "./Following/Following";
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
    let placeId;
    let z = localStorage.getItem("z");
    let userLoggedIn;

    if (eatingPlace) {
      placeId = eatingPlace.id;
      restaurantAvatar = eatingPlace.avatar;
      restaurantHeader = eatingPlace.header;
      restaurantName = eatingPlace.info.restaurantName;
      restaurantStreet = eatingPlace.info.restaurantStreet;
      restaurantBuildingNumber = eatingPlace.info.restaurantBuildingNumber;
      restaurantCity = eatingPlace.info.restaurantCity;
    }
    if (z) {
      userLoggedIn = true;
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
        <div className={styles.headerContent}>
          <div className={styles.adressWrapper}>
            <div className={styles.title}>{restaurantName}</div>
            <div>
              {restaurantStreet} {restaurantBuildingNumber}
            </div>
            <div>{restaurantCity}</div>
          </div>
          <div className={styles.adressWrapper}>
            {userLoggedIn ? (
              <Following
                z={z}
                placeId={placeId}
                restaurantName={restaurantName}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default EatingPlaceHeader;
