import React from "react";
import styles from "./Opinions.module.scss";
import OpinionItem from "./OpinionItem/OpinionItem";
import OpinionForm from "./OpinionForm/OpinionForm";
import { connect } from "react-redux";
import CodeForUnlockAddOpinion from "./CodeForUnlockAddOpinion/CodeForUnlockAddOpinion";
class Opinions extends React.Component {
  render() {
    const {
      userId,
      haveEatingPlace,
      clientCodeIsVerified,
      blockedOpinionForm
    } = this.props;
    console.log(haveEatingPlace);
    let owner;
    let canShow;
    let cantShow;
    if (haveEatingPlace) {
      owner = haveEatingPlace.info.owner;
    }
    return (
      <div className={styles.commentsWrapper}>
        <div className={styles.commentsContent}>
          {userId !== owner ? (canShow = true) : (cantShow = true)}
          {blockedOpinionForm === null && canShow && clientCodeIsVerified ? (
            <OpinionForm />
          ) : null}
          {cantShow ? null : <CodeForUnlockAddOpinion />}
          <OpinionItem />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    haveEatingPlace: state.auth.haveEatingPlace,
    clientCodeIsVerified: state.eatingPlaceProfile.clientCodeIsVerified,
    blockedOpinionForm: state.eatingPlaceProfile.blockedOpinionForm
  };
};

export default connect(mapStateToProps)(Opinions);
