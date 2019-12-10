import React from "react";
import styles from "./OpinionItem.module.scss";
import { connect } from "react-redux";
import * as actions from "../../../../../../store/actions/index";
class OpinionItem extends React.Component {
  render() {
    const { eatingPlace } = this.props;
    console.log(eatingPlace.id);
    let eatingPlaceId;
    let clientsOpinions;
    if (eatingPlace) {
      eatingPlaceId = eatingPlace.id;
      clientsOpinions = eatingPlace.clientsOpinions;
      console.log(eatingPlaceId);
      this.props.getClientsOpinions(eatingPlaceId);
    }
    const clientsOpinionsForCurrentEatingPlace = clientsOpinions.length
      ? clientsOpinions.map(clientsOpinions => {
          return (
            <div className={styles.wrapper}>
              <div className={styles.itemWrapper}>
                <div className={styles.commentOwner}>
                  <div className={styles.icon}>ikona</div>
                  <div className={styles.name}>{clientsOpinions.author}</div>
                  <div className={styles.date}>{clientsOpinions.data}</div>
                </div>

                <div className={styles.commentItem}>
                  <p>{clientsOpinions.clientOpinion}</p>
                </div>
              </div>
            </div>
          );
        })
      : null;
    return <div>{clientsOpinionsForCurrentEatingPlace}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getClientsOpinions: eatingPlaceId =>
      dispatch(actions.getClientsOpinions(eatingPlaceId))
  };
};

export default connect(null, mapDispatchToProps)(OpinionItem);
