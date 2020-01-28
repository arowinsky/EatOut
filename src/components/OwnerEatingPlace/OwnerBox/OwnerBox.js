import React from "react";
import styles from "./OwnerBox.module.scss";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import EatingPlaceProfileCard from "../EatingPlaceProfile/EatingPlaceProfileCard/EatingPlaceProfileCard";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

class OwnerBox extends React.Component {
  state = {
    requestDataEatingPlaces: true
  };

  render() {
    const { requestDataEatingPlaces } = this.state;
    const { haveEatingPlace, getDataEatingPlace } = this.props;
    let z = localStorage.getItem("z");
    if (requestDataEatingPlaces) {
      getDataEatingPlace(z);
      this.setState(() => ({ requestDataEatingPlaces: null }));
    }

    const startCreatingNewEatingPlace = true;
    return haveEatingPlace ? (
      <div className={styles.box_wrapper}>
        <div className={styles.wrapper}>
          <div className={styles.items}>
            <Button second>
              <Link
                className={styles.button}
                to={{
                  pathname: "/add-eating-place-first-form",
                  state: {
                    startCreatingNewEatingPlace: startCreatingNewEatingPlace
                  }
                }}
              >
                Chcę dodać kolejny lokal gastronomiczny
              </Link>
            </Button>
          </div>
        </div>
        <br />
        <div className={styles.header}>Twoje lokale gastronomiczne:</div>
        {haveEatingPlace
          ? haveEatingPlace.map(eatingPlaces => (
              <EatingPlaceProfileCard
                cardType="ownerPlace"
                eatingPlaces={eatingPlaces}
              />
            ))
          : null}
      </div>
    ) : (
      <div className={styles.box_wrapper}>
        Nie masz jeszcze żadnego lokalu gastronomicznego
        <br />
        <Link
          to={{
            pathname: "/add-eating-place-first-form",
            state: {
              startCreatingNewEatingPlace: startCreatingNewEatingPlace
            }
          }}
        >
          <Button second>Dodaj swój lokal</Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurantAvatar: state.auth.restaurantAvatar,
    haveEatingPlace: state.ownerEatingPlaces.haveEatingPlace,
    clientsOpinions: state.eatingPlaceProfile.clientsOpinions
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDataEatingPlace: z => dispatch(actions.getDataEatingPlace(z))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OwnerBox);
