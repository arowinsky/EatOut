import React from "react";
import styles from "./Opinion.module.scss";
import OpinionItem from "./OpinionItem/OpinionItem";
import OpinionForm from "./OpinionForm/OpinionForm";
import { connect } from "react-redux";
class Opinion extends React.Component {
  render() {
    const { userId, haveEatingPlace } = this.props;
    console.log(haveEatingPlace);
    let owner;
    if (haveEatingPlace) {
      owner = haveEatingPlace.owner;
    }
    return (
      <div className={styles.commentsWrapper}>
        <div className={styles.commentsContent}>
          {userId !== owner ? <OpinionForm /> : null}
          <OpinionItem />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    haveEatingPlace: state.auth.haveEatingPlace
  };
};

export default connect(mapStateToProps)(Opinion);
