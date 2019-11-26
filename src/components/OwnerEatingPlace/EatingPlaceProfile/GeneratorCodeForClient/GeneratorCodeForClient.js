import React from "react";
import styles from "./GeneratorCodeForClient.module.scss";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
const GeneratorCodeForClient = props => {
  const { haveEatingPlace, generationCodeForClient } = props;
  let eatingPlaceId;
  if (haveEatingPlace) {
    eatingPlaceId = haveEatingPlace.id;
  }
  const sendRequestToGenarateCode = () => {
    generationCodeForClient(eatingPlaceId);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        <p>
          Czy wygenerować kod dający dostęp Twojemu klientowi do wystawienia
          opinii o Twoim lokalu gastronomicznym?
        </p>
        <Button second type="submit" onClick={sendRequestToGenarateCode}>
          Tak wygeneruj
        </Button>
        <br />
        <Button second type="submit">
          <Link to="/eating-place-profile" className={styles.button}>
            Chcę powrócić do profilu tego lokalu
          </Link>
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    haveEatingPlace: state.auth.haveEatingPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    generationCodeForClient: eatingPlaceId =>
      dispatch(actions.generationCodeForClient(eatingPlaceId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneratorCodeForClient);
