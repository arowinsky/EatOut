import React from "react";
import styles from "./Posts.module.scss";
import PostItem from "./PostItem/PostItem";
import PostForm from "./PostForm/PostForm";
import { connect } from "react-redux";

class Posts extends React.Component {
  render() {
    const { ownerId, haveEatingPlace } = this.props;
    console.log(haveEatingPlace);
    let owner;
    if (haveEatingPlace) {
      owner = haveEatingPlace.owner;
    }
    return (
      <div>
        <PostItem />
        {ownerId === owner ? <PostForm /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ownerId: state.auth.userId,
    haveEatingPlace: state.auth.haveEatingPlace
  };
};
export default connect(mapStateToProps)(Posts);
