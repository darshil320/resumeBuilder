import React from 'react'
import styles from "./Header.modular.css";
function Header() {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>
        A <span>Resume</span> that stands out!
      </p>
      <p className={styles.heading}>
        Make your own Resume. <span>It's Free</span>
      </p>
    </div>
  );
}

export default Header