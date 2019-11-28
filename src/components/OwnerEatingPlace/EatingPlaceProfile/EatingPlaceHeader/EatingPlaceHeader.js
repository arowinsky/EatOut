import React from "react";
import styles from "./EatingPlaceHeader.module.scss";
import { connect } from "react-redux";

class EatingPlaceHeader extends React.Component {
  render() {
    const { eatingPlaces } = this.props;
    console.log(eatingPlaces);
    return (
      <div>
        <img
          className={styles.headerWrapper}
          src={eatingPlaces.header}
          alt="restaurantHeader"
        ></img>
        <img
          className={styles.iconWrapper}
          src={eatingPlaces.avatar}
          alt="restaurantAvatar"
        ></img>

        <div className={styles.adressWrapper}>
          <div className={styles.title}>{eatingPlaces.info.restaurantName}</div>
          <div>
            {eatingPlaces.info.restaurantStreet}{" "}
            {eatingPlaces.info.restaurantBuildingNumber}
          </div>
          <div>{eatingPlaces.info.restaurantCity}</div>
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
