import React from "react";
import styles from "./EatingPlaceHeader.module.scss";
import Button from "../../../Button/Button";

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
    let following;
    if (eatingPlace) {
      restaurantAvatar = eatingPlace.avatar;
      restaurantHeader = eatingPlace.header;
      restaurantName = eatingPlace.info.restaurantName;
      restaurantStreet = eatingPlace.info.restaurantStreet;
      restaurantBuildingNumber = eatingPlace.info.restaurantBuildingNumber;
      restaurantCity = eatingPlace.info.restaurantCity;
      following = eatingPlace.following;
      console.log(following);
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
            {following ? (
              <Button second>Pzeestań obserwować</Button>
            ) : (
              <Button second>Obserwuj</Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default EatingPlaceHeader;
