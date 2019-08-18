import React from "react";
import styles from "./OwnerNavbar.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

const OwnerNavbar = props => {
  return (
    <nav className={styles.owner_nav_wrapper}>
      <ul className={styles.owner_nav_wrapper}>
        <li className={styles.owner_nav_navbarItem}>
          <Link
          to="/"
          style={{textDecoration:'none'}}> 
            <div 
              onClick={props.signOut}
              className={styles.owner_nav_navbarItemLink}>
              Wyloguj
            </div>
          </Link>
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
