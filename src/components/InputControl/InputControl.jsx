import React from "react";

import styles from "./InputControl.module.css";

function InputControl({ label, ...props }) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input type="text" {...props} className="p-2"/>
    </div>
  );
}

export default InputControl;
