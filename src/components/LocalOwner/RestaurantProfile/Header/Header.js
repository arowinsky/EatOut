import React from "react";
import styles from "./Header.module.scss";
import { connect } from "react-redux";

class RestaurantHeader extends React.Component {
  render() {
    const { haveEatingPlace } = this.props;
    let restaurantName;
    let restaurantStreet;
    if (haveEatingPlace) {
      restaurantName = haveEatingPlace.restaurantName;
      restaurantStreet = haveEatingPlace.restaurantStreet;
    }
    return (
      <div>
        <div className={styles.headerWrapper}></div>
        <div className={styles.iconWrapper}></div>
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
    haveEatingPlace: state.auth.haveEatingPlace
  };
};

export default connect(mapStateToProps)(RestaurantHeader);
