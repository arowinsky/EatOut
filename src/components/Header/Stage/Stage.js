import React from "react";
import styles from "./Stage.module.scss";
import Search from "../Search/Search";
const Stage = () => {
  return (
    <div className={styles.stage}>
      <div className={styles.stage_element}>
        <div className={styles.stage_logo}>
          <span className={styles.stage_yellow}>Eat</span>
          <span className={styles.stage_red}>Out</span>
        </div>
        <Search />
      </div>
    </div>
  );
};
export default Stage;
