import React from "react";
import styles from "./GeneratorCodeForClient.module.scss";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
const GeneratorCodeForClient = props => {
  const { eatingPlace, codeForClient, generationCodeForClient } = props;
  let eatingPlaceId;
  if (eatingPlace) {
    eatingPlaceId = eatingPlace.id;
  }
  const sendRequestToGenarateCode = () => {
    generationCodeForClient(eatingPlaceId);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.question}>Czy wygenerować kod dla klienta?</div>
        <div className={styles.items}>
          <Button second type="submit" onClick={sendRequestToGenarateCode}>
            Tak wygeneruj
          </Button>
          <br />
          <Button second type="submit">
            <Link to="/eating-place-profile" className={styles.button}>
              Chcę powrócić do profilu tego lokalu
            </Link>
          </Button>
          <br />
          {codeForClient ? (
            <div className={styles.items}>
              <h3>Wygenerowany kod to:</h3>
              <h1>{codeForClient}</h1>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    codeForClient: state.eatingPlaceProfile.codeForClient
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
