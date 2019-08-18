import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navbar from "../Navbars/Navbar/Navbar";
import OwnerNavbar from "../LocalOwner/OwnerNavbar/OwnerNavbar";
import { connect } from "react-redux";

const Header = props => {
  const { auth } = props;
  console.log(auth);
  const navbars = auth.uid ? <OwnerNavbar /> : <Navbar />;
  return (
    <div>
      <nav className={styles.wrapper}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>{navbars}</div>
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
