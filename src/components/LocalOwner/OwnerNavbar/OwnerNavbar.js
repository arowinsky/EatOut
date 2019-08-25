import React from "react";
import styles from "./OwnerNavbar.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";
import UserData from "../../UserData/UserData";
const OwnerNavbar = props => {
  console.log(props.profile.userData);
  return (
    <nav className={styles.owner_nav_wrapper}>
      <ul className={styles.owner_nav_wrapper}>
        <li className={styles.owner_nav_navbarItem}>
          <div className={styles.welcome}>Witaj,</div>
        </li>
        <li className={styles.owner_nav_navbarItem}>
          <UserData />
        </li>
        <li className={styles.owner_nav_hamburger} onClick={props.click}>
          <FontAwesomeIcon icon={faBars} />
        </li>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(OwnerNavbar);
