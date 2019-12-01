import React from "react";
import EatingPlaceHeader from "./EatingPlaceHeader/EatingPlaceHeader";
import EatingPlaceBody from "./EatingPlaceBody/RestaurantBody";
import { connect } from "react-redux";
import Button from "../../Button/Button";
import styles from "./EatingPlaceProfile.module.scss";
import { Link } from "react-router-dom";

const EatingPlaceProfile = props => {
  const { userId } = props;
  const { eatingPlace } = props.location.state;
  let owner;
  console.log(eatingPlace);
  if (eatingPlace) {
    owner = eatingPlace.info.owner;
  }

  return (
    <div>
      {userId === owner ? (
        <div className={styles.wrapper}>
          <div className={styles.items}>
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
          </div>
        </div>
      ) : null}
      <EatingPlaceHeader eatingPlace={eatingPlace} />
      <EatingPlaceBody eatingPlace={eatingPlace} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.auth.userId
  };
};

export default connect(mapStateToProps)(EatingPlaceProfile);
