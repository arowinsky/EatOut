import React from "react";
import styles from "./ResultSearchTemplate.module.scss";
const ResultSearchTemplate = ({ children }) => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.grid}>{children}</div>
    </div>
  </>
);
export default ResultSearchTemplate;
