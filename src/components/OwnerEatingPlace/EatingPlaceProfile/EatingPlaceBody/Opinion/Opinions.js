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
      eatingPlace,
      clientCodeIsVerified,
      blockedOpinionForm
    } = this.props;
    console.log(eatingPlace);
    let owner;
    let canShow;
    let cantShow;
    if (eatingPlace) {
      owner = eatingPlace.info.owner;
    }
    return (
      <div className={styles.commentsWrapper}>
        <div className={styles.commentsContent}>
          {userId !== owner ? (canShow = true) : (cantShow = true)}
          {blockedOpinionForm === null && canShow && clientCodeIsVerified ? (
            <OpinionForm eatingPlace={eatingPlace} />
          ) : null}
          {cantShow ? null : (
            <CodeForUnlockAddOpinion eatingPlace={eatingPlace} />
          )}
          <OpinionItem eatingPlace={eatingPlace} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    clientCodeIsVerified: state.eatingPlaceProfile.clientCodeIsVerified,
    blockedOpinionForm: state.eatingPlaceProfile.blockedOpinionForm
  };
};

export default connect(mapStateToProps)(Opinions);
