import React from "react";
import styles from "./OwnerBox.module.scss";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import EatingPlaceProfileCard from "../RestaurantProfile/EatingPlaceProfileCard/EatingPlaceProfileCard";
import { connect } from "react-redux";

class OwnerBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isRestaurant: true };
  }
  render() {
    const { restaurantAvatar, restaurantName, restaurantStreet } = this.props;
    console.log(restaurantAvatar, restaurantName, restaurantStreet);
    return this.state.isRestaurant ? (
      <div className={styles.box_wrapper}>
        Twoja restauracja to:
        <EatingPlaceProfileCard
          restaurantAvatar={restaurantAvatar}
          restaurantName={restaurantName}
          restaurantStreet={restaurantStreet}
        />
      </div>
    ) : (
      <div className={styles.box_wrapper}>
        Nie masz jeszcze restauracji
        <br />
        <Link to="/add-new-local-1">
          <Button second>Dodaj swój lokal</Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurantAvatar: state.auth.restaurantAvatar,
    restaurantName: state.auth.haveEatingPlace.restaurantName,
    restaurantStreet: state.auth.haveEatingPlace.restaurantStreet
  };
};

export default connect(mapStateToProps, null)(OwnerBox);
