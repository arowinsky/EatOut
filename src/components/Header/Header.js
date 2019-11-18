import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navbar from "../Navbars/Navbar/Navbar";
import OwnerNavbar from "../OwnerEatingPlace/OwnerNavbar/OwnerNavbar";

const Header = props => {
  const { isAuth, userIdProvider } = props;
  let navbar;
  if (userIdProvider) {
    navbar = <OwnerNavbar click={props.sideBarClickHander} />;
  } else if (isAuth) {
    navbar = <OwnerNavbar click={props.sideBarClickHander} />;
  } else {
    navbar = <Navbar />;
  }
  return (
    <div>
      <nav className={styles.wrapper}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>{navbar}</div>
      </nav>
    </div>
  );
};

export default Header;
