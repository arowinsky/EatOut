import React from "react";
import styles from "./OwnerPosts.module.scss";
import OwnerPostItem from "./OwnerPostItem/OwnerPostItem";
import OwnerPostForm from "./OwnerPostForm/OwnerPostForm";
import { connect } from "react-redux";

class Posts extends React.Component {
  render() {
    const { userId, haveEatingPlace } = this.props;
    let owner;
    if (haveEatingPlace) {
      owner = haveEatingPlace.info.owner;
    }
    return (
      <div>
        {userId === owner ? <OwnerPostForm /> : null}
        <OwnerPostItem />
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
export default connect(mapStateToProps)(Posts);
