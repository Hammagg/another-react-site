import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar} id={styles.smalltitle}>
      <a className={styles.title} href="/">
        Heavy Artillery Tanks
        <img src="/logotank.png" className={styles.tankicon}></img>
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? "././closeIcon.png" : "../../menuIcon.png"}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#rewards">Rewards</a>
          </li>
          <li>
            <a href="#projects">Campaigns</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
