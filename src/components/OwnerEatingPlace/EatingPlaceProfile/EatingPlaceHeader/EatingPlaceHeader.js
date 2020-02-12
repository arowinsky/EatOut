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
        <div>
          {userId === owner ? (
            <div className={styles.headerContent}>
              <div className={styles.infoPlaceWrapper}>
                <div className={styles.title}>{restaurantName}</div>
                <div className={styles.adress}>
                  {restaurantStreet} {restaurantBuildingNumber}
                </div>
                <div className={styles.adress}>{restaurantCity}</div>
              </div>
              <div className={styles.ownerButtons}>
                <div className={styles.editProfile}>
                  <Button second>Edytuj ten profil</Button>
                </div>
                <div className={styles.generatorCode}>
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
                      Wygeneruj kod dla klienta
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.clientHeaderContent}>
              <div className={styles.adressWrapper}>
                <div className={styles.title}>{restaurantName}</div>
                <div className={styles.adress}>
                  {restaurantStreet} {restaurantBuildingNumber}
                </div>
                <div className={styles.adress}>{restaurantCity}</div>
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
          )}
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
