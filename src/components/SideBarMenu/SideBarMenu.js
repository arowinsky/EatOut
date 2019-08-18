import React from 'react';
import styles from './SideBarMenu.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faUserCircle, faCog, faMapMarkedAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { signOut } from '../../store/actions/authActions';

const SideBarMenu = (props) => (
    <nav className={styles.sidebar_wrapper}>
        <ul className={styles.sidebar_list}>
            <li  className={styles.sidebar_item}>
                <Link
                to="/owner-home"
                className={styles.sidebar_item}
                >
                    <FontAwesomeIcon icon={faUserCircle} className={styles.sidebar_icon} />
                    Twoje konto
                </Link>
            </li>
            <li  className={styles.sidebar_item}>
                <FontAwesomeIcon icon={faCog} className={styles.sidebar_icon} />
                Ustawienia
            </li>
            <li  className={styles.sidebar_item}>
                <FontAwesomeIcon icon={faMapMarkedAlt} className={styles.sidebar_icon}/>
                Szukaj lokalu
            </li>
                     
            <li onClick={props.signOut} className={styles.sidebar_item}>
                <Link
                to="/"
                className={styles.sidebar_item}
                >
                    <FontAwesomeIcon icon={faSignOutAlt} className={styles.sidebar_icon}/>
                    Wyloguj
                </Link>
            </li>
        </ul>
    </nav>
)

const mapDispatchToProps = dispatch => {
    return {
      signOut: () => dispatch(signOut())
    };
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(SideBarMenu);