import React from "react";
import styles from "./OpinionItem.module.scss";
import { connect } from "react-redux";
import * as actions from "../../../../../../store/actions/index";
class OpinionItem extends React.Component {
  render() {
    const { eatingPlace } = this.props;
    console.log(eatingPlace.id);

    let eatingPlaceId;
    if (eatingPlace) {
      eatingPlaceId = eatingPlace.id;
      console.log(eatingPlaceId);
      this.props.getClientsOpinions(eatingPlaceId);
    }
    return (
      <div className={styles.wrapper}>
        <div className={styles.itemWrapper}>
          <div className={styles.commentOwner}>
            <div className={styles.icon}>ikona</div>
            <div className={styles.name}>name</div>
            <div className={styles.date}>data</div>
          </div>

          <div className={styles.commentItem}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getClientsOpinions: eatingPlaceId =>
      dispatch(actions.getClientsOpinions(eatingPlaceId))
  };
};

export default connect(null, mapDispatchToProps)(OpinionItem);
