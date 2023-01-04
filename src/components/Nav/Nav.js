import React from "react";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav>
      <ul className={styles.navItems}>
        <li>
          <a href="#">Search Visualized</a>
        </li>
        <li>
          <a>Linear Search</a>
        </li>
        <li>
          <a>Binary Search</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
