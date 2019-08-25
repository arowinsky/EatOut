import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navbar from "../Navbars/Navbar/Navbar";
import OwnerNavbar from "../LocalOwner/OwnerNavbar/OwnerNavbar";
import { connect } from "react-redux";

const Header = props => {
  const { auth } = props;
  return (
    <div>
      <nav className={styles.wrapper}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          {auth.uid ? (
            <OwnerNavbar click={props.sideBarClickHander} />
          ) : (
            <Navbar />
          )}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Header);
