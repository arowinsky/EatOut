import React from "react";
import styles from "./EatingPlaceHeader.module.scss";
import { connect } from "react-redux";

class EatingPlaceHeader extends React.Component {
  render() {
    const { haveEatingPlace, restaurantAvatar, restaurantHeader } = this.props;
    let restaurantName;
    let restaurantStreet;
    let restaurantBuildingNumber;
    let restaurantCity;
    if (haveEatingPlace) {
      restaurantName = haveEatingPlace.restaurantName;
      restaurantStreet = haveEatingPlace.restaurantStreet;
      restaurantBuildingNumber = haveEatingPlace.restaurantBuildingNumber;
      restaurantCity = haveEatingPlace.restaurantCity;
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
const mapStateToProps = state => {
  return {
    haveEatingPlace: state.auth.haveEatingPlace,
    restaurantAvatar: state.auth.restaurantAvatar,
    restaurantHeader: state.auth.restaurantHeader
  };
};

export default connect(mapStateToProps)(EatingPlaceHeader);
