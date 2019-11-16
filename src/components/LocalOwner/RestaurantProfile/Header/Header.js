import React from "react";
import styles from "./Header.module.scss";
import { connect } from "react-redux";

class RestaurantHeader extends React.Component {
  render() {
    const { haveEatingPlace, restaurantAvatar } = this.props;
    let restaurantName;
    let restaurantStreet;
    if (haveEatingPlace) {
      restaurantName = haveEatingPlace.restaurantName;
      restaurantStreet = haveEatingPlace.restaurantStreet;
    }
    return (
      <div>
        <div className={styles.headerWrapper}></div>
        <img
          className={styles.iconWrapper}
          src={restaurantAvatar}
          alt="restaurantAvatar"
        ></img>

        <div className={styles.adressWrapper}>
          <div className={styles.title}>{restaurantName}</div>
          <div>{restaurantStreet}</div>
          <div>dzielnica</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    haveEatingPlace: state.auth.haveEatingPlace,
    restaurantAvatar: state.auth.restaurantAvatar
  };
};

export default connect(mapStateToProps)(RestaurantHeader);
