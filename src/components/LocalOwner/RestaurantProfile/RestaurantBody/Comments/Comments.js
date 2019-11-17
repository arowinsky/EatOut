import React from "react";
import styles from "./Comments.module.scss";
import CommentItem from "./CommentItem/CommentItem";
import CommentForm from "./CommentForm/CommentForm";
import { connect } from "react-redux";
class Comments extends React.Component {
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
          <CommentItem />
          {userId !== owner ? <CommentForm /> : null}
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

export default connect(mapStateToProps)(Comments);
