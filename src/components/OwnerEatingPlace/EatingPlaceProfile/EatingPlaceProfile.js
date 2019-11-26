import React from "react";
import EatingPlaceHeader from "./EatingPlaceHeader/EatingPlaceHeader";
import EatingPlaceBody from "./EatingPlaceBody/RestaurantBody";
import { connect } from "react-redux";
import Button from "../../Button/Button";
import styles from "./EatingPlaceProfile.module.scss";
import { Link } from "react-router-dom";

const EatingPlaceProfile = props => {
  const { userId, haveEatingPlace } = props;
  let owner;
  if (haveEatingPlace) {
    owner = haveEatingPlace.info.owner;
  }

  return (
    <div>
      {userId === owner ? (
        <div className={styles.wrapper}>
          <div className={styles.items}>
            <Button second>
              <Link className={styles.button} to="/generator-code-for-client">
                Chcę wygenerować kod dla klienta
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
      <EatingPlaceHeader />
      <EatingPlaceBody />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    haveEatingPlace: state.auth.haveEatingPlace
  };
};

export default connect(mapStateToProps)(EatingPlaceProfile);
