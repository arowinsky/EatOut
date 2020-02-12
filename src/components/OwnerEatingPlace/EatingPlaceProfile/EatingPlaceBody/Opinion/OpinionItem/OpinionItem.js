import React from "react";
import styles from "./OpinionItem.module.scss";
import { connect } from "react-redux";
class OpinionItem extends React.Component {
  render() {
    const { eatingPlace, updatedClientsOpinions } = this.props;
    console.log(eatingPlace.id);
    let eatingPlaceId;
    let clientsOpinions;
    if (updatedClientsOpinions) {
      const clientsOpinionsForCurrentEatingPlace = updatedClientsOpinions ? (
        updatedClientsOpinions.map(updatedClientsOpinions => {
          return (
            <div className={styles.wrapper}>
              <div className={styles.itemWrapper}>
                <div className={styles.commentOwner}>
                  <div className={styles.name}>
                    {updatedClientsOpinions.author}
                  </div>
                  <div className={styles.date}>
                    {updatedClientsOpinions.date}
                  </div>
                </div>
                <div className={styles.commentItem}>
                  <p>{updatedClientsOpinions.clientOpinion}</p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className={styles.commentItem}>
          <p>Ten lokal nie posiada jeszcze żadnej opinii</p>
        </div>
      );
      return <div>{clientsOpinionsForCurrentEatingPlace}</div>;
    } else if (eatingPlace) {
      eatingPlaceId = eatingPlace.id;
      clientsOpinions = eatingPlace.clientsOpinions;
      console.log(eatingPlaceId);
      const clientsOpinionsForCurrentEatingPlace = clientsOpinions.length ? (
        clientsOpinions.map(clientsOpinions => {
          return (
            <div className={styles.wrapper}>
              <div className={styles.itemWrapper}>
                <div className={styles.commentOwner}>
                  <div className={styles.name}>{clientsOpinions.author}</div>
                  <div className={styles.date}>{clientsOpinions.date}</div>
                </div>
                <div className={styles.commentItem}>
                  <p>{clientsOpinions.clientOpinion}</p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className={styles.commentItem}>
          <p>Ten lokal nie posiada jeszcze żadnej opinii</p>
        </div>
      );
      return <div>{clientsOpinionsForCurrentEatingPlace}</div>;
    }
  }
}
const mapStateToProps = state => {
  return {
    updatedClientsOpinions: state.eatingPlaceProfile.updatedClientsOpinions
  };
};
export default connect(mapStateToProps)(OpinionItem);
