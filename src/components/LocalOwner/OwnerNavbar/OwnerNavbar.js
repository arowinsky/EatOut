import React from "react";
import styles from "./OwnerNavbar.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { logOut } from "../../../store/actions/authActions";

const OwnerNavbar = props => {
  props.signOut();
  return (
    <nav className={styles.owner_nav_wrapper}>
      <ul className={styles.owner_nav_wrapper}>
        <li className={styles.owner_nav_navbarItem}>
          <a
            onCLick={props.logOut}
            className={styles.owner_nav_navbarItemLink}
            to="/"
          >
            Wyloguj
          </a>
        </li>
        <li className={styles.owner_nav_hamburger}>
          <FontAwesomeIcon icon={faBars} />
        </li>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(logOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(OwnerNavbar);
