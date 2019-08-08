import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.modules.scss";

const Logo = () => (
  <Link to="/" className={styles.link}>
    EatOut
  </Link>
);

export default Logo;
