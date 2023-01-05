import React from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navItems}>
        <li>
          <Link to="/linear-search">Linear Search</Link>
        </li>
        <li>
          <Link to="/binary-search">Binary Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
