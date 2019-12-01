import React from "react";
import styles from "./OwnerPosts.module.scss";
import OwnerPostItem from "./OwnerPostItem/OwnerPostItem";
import OwnerPostForm from "./OwnerPostForm/OwnerPostForm";
import { connect } from "react-redux";

class Posts extends React.Component {
  render() {
    const { userId, eatingPlace } = this.props;
    let owner;
    if (eatingPlace) {
      owner = eatingPlace.info.owner;
    }
    return (
      <div>
        {userId === owner ? <OwnerPostForm eatingPlace={eatingPlace} /> : null}
        <OwnerPostItem eatingPlace={eatingPlace} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId
  };
};
export default connect(mapStateToProps)(Posts);
