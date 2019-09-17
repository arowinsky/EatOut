import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navbar from "../Navbars/Navbar/Navbar";
import OwnerNavbar from "../LocalOwner/OwnerNavbar/OwnerNavbar";

const Header = props => {
  const { isAuth, userIdFromFb, userNameFromFb } = props;
  console.log(userNameFromFb);
  let navbar;
  if (userIdFromFb) {
    navbar = (
      <OwnerNavbar click={props.sideBarClickHander} userInfo={userNameFromFb} />
    );
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
