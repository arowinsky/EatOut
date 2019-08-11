import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.modules.scss";

const Logo = () => (
    <Link to="/" className={styles.link} style={{ textDecoration: 'none', color: 'white', letterSpacing: '1.5px' }}>
      <div className={styles.logo_element}>EatOut</div>
    </Link>
);

export default Logo;
