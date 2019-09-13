import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navbar from "../Navbars/Navbar/Navbar";
import OwnerNavbar from "../LocalOwner/OwnerNavbar/OwnerNavbar";

const Header = props => {
  const { profile, isAuth } = props;
  return (
    <div>
      <nav className={styles.wrapper}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          {isAuth ? (
            <OwnerNavbar click={props.sideBarClickHander} profile={profile} />
          ) : (
            <Navbar />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
