import React from "react";
import styles from "./OwnerPostItem.module.scss";
import { connect } from "react-redux";

class PostItem extends React.Component {
  render() {
    const { eatingPlace, updatedOwnerPosts } = this.props;
    let ownerPosts;
    if (eatingPlace) {
      ownerPosts = eatingPlace.ownerPosts;
    }
    if (updatedOwnerPosts) {
      const ownerPostsForCurrentPlace = updatedOwnerPosts ? (
        updatedOwnerPosts.map(updatedOwnerPosts => {
          return (
            <div className={styles.wrapper}>
              <div className={styles.itemWrapper}>
                <div className={styles.commentOwner}>
                  <div className={styles.icon}>ikona</div>
                  <div className={styles.name}>{updatedOwnerPosts.author}</div>
                  <div className={styles.date}>{updatedOwnerPosts.date}</div>
                </div>
                <div className={styles.commentItem}>
                  <p>{updatedOwnerPosts.post}</p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <p>
            Ten lokal nie posiada jeszcze zadnych postów własciciela tego lokalu
          </p>
        </div>
      );
      return <div>{ownerPostsForCurrentPlace}</div>;
    } else if (ownerPosts) {
      const ownerPostsForCurrentPlace = ownerPosts ? (
        ownerPosts.map(ownerPosts => {
          return (
            <div className={styles.wrapper}>
              <div className={styles.itemWrapper}>
                <div className={styles.commentOwner}>
                  <div className={styles.icon}>ikona</div>
                  <div className={styles.name}>{ownerPosts.author}</div>
                  <div className={styles.date}>{ownerPosts.date}</div>
                </div>
                <div className={styles.commentItem}>
                  <p>{ownerPosts.post}</p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <p>
            Ten lokal nie posiada jeszcze zadnych postów własciciela tego lokalu
          </p>
        </div>
      );
      return <div>{ownerPostsForCurrentPlace}</div>;
    }
  }
}
const mapStateToProps = state => {
  return {
    updatedOwnerPosts: state.eatingPlaceProfile.updatedOwnerPosts
  };
};

export default connect(mapStateToProps)(PostItem);
