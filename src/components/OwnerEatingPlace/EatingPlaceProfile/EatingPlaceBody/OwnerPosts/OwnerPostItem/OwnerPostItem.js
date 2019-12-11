import React from "react";
import styles from "./OwnerPostItem.module.scss";

class PostItem extends React.Component {
  render() {
    const { eatingPlace } = this.props;
    let ownerPosts;
    if (eatingPlace) {
      ownerPosts = eatingPlace.ownerPosts;
    }
    const ownerPostsForCurrentPlace = ownerPosts.length ? (
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

export default PostItem;
