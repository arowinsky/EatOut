import React from "react";
import styles from "./EatingPlaceHeader.module.scss";
import Following from "./Following/Following";
import { connect } from "react-redux";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";
class EatingPlaceHeader extends React.Component {
  render() {
    const { eatingPlace, userId } = this.props;
    let restaurantAvatar;
    let restaurantHeader;
    let restaurantName;
    let restaurantStreet;
    let restaurantBuildingNumber;
    let restaurantCity;
    let placeId;
    let z = localStorage.getItem("z");
    let userLoggedIn;
    let owner;

    if (eatingPlace) {
      placeId = eatingPlace.id;
      restaurantAvatar = eatingPlace.avatar;
      restaurantHeader = eatingPlace.header;
      restaurantName = eatingPlace.info.restaurantName;
      restaurantStreet = eatingPlace.info.restaurantStreet;
      restaurantBuildingNumber = eatingPlace.info.restaurantBuildingNumber;
      restaurantCity = eatingPlace.info.restaurantCity;
      owner = eatingPlace.info.owner;
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
            {userId === owner ? (
              <Button second>
                <Link
                  className={styles.button}
                  to={{
                    pathname: "/generator-code-for-client",
                    state: {
                      eatingPlace: eatingPlace
                    }
                  }}
                >
                  Chcę wygenerować kod dla klienta
                </Link>
              </Button>
            ) : null}
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
const mapStateToProps = state => {
  return {
    userId: state.auth.userId
  };
};
export default connect(mapStateToProps, null)(EatingPlaceHeader);
