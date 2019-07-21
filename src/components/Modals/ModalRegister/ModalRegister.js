import React from "react";
import styles from "./ModalRegister.module.scss";
import RegisterForm from "../../Forms/RegisterForm/RegisterForm";

const ModalRegister = ({ closeModalFn }) => (
  <div className={styles.wrapper}>
    <button className={styles.closeButton} onClick={closeModalFn} />
    <RegisterForm />
  </div>
);

export default ModalRegister;
