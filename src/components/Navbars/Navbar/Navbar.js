import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = () => (
  <nav className={styles.wrapper}>
    <ul className={styles.wrapper}>
      <li className={styles.navbarItem}>
        <Link className={styles.navbarItemLink} to="/login">
          Zaloguj
        </Link>
      </li>
      <li className={styles.navbarItem}>
        <Link className={styles.navbarItemLink} to="/register">
          Dołącz do Portalu
        </Link>
      </li>
    </ul>
  </nav>
);

const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(Navbar);
