import React from "react";
import styles from "./ModalRegister.module.scss";
import FormRegister from "../../Forms/FormRegister/FormRegister";

const ModalRegister = ({ closeModalFn }) => (
  <div className={styles.wrapper}>
    <button className={styles.closeButton} onClick={closeModalFn} />
    <FormRegister />
  </div>
);

export default ModalRegister;
