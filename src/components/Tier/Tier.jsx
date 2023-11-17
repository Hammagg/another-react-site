import React from "react";

import styles from "./Tier.module.css";
import { getImageUrl } from "../../utils";

export const Tier = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.ranktext2}>Tier 2</h3>
        <h1 className={styles.title}>Medusa & Basilisk</h1>
        <p className={styles.description}>
          No matter where on the battlefield, underground, or even in the sky -
          no one can hide from the mighty firepower of the Basilisk & Medusa!
        </p>
        <a href="#" className={styles.contactBtn} id={styles.btnpos}>
          Pledge now!
        </a>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          <center>Contact</center>
        </a>
      </div>
      <img
        src="assets/hero/fancytank.png"
        alt="Tank Avatar"
        className={styles.heroImg}
      />
      <div className={styles.bottomBlur} />
    </section>
  );
};
