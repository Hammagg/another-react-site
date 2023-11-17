import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.ranktext1}>Tier 1</h3>
        <h1 className={styles.title}>Uutility Carrier</h1>
        <p className={styles.description}>
          I deliver troops, ammunition, and whatever else needed for the
          battlefield. I am equipped with 2 auto-cannons. Able to withstand
          fire, all types of weather, and rot.
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

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
