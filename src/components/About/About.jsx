import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <hr />
      <hr />
      <hr />
      <h2 className={styles.title}>About</h2>
      <hr />
      <div>
        <center>
          <img
            className={styles.aboutImg}
            src="assets/hero/fancytank.png"
            alt="about-image"
          />
        </center>
      </div>
      <br />
      <p>
        The models are designed by the new rising star <a href="#">War_Spike</a>{" "}
        - a talented 3D designer from Germany who is here to bring you the
        German Engineering famously known for it's strength, beauty, and
        resilence into the world of 3D printing. The pre-supported files have
        been tested throughly on various resin printers to ensure the quality is
        nothing lower than perfect.
        <br />
        <br />
        <br />
        <center>
          All the tanks have a unique interior to give you that immersive
          feeling of being in the tank yourself!
        </center>
        <br />
        <br />
      </p>

      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem} id={styles.aboutContent}>
          <img src="/assets/hero/heroRightImage.png" />
          <div className={styles.aboutItemText}>
            <h3 className={styles.leftText}>Tank Caption</h3>
            <p>
              I have designed other vehicles such as launchers, flyers, big
              robots, destroyers, walking terror boxes, oozing, blistering,
              boiled, demons, humans..
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h3 className={styles.rightText}>Tank Caption</h3>
            <p>
              Knowing what to design, and how to add it to the schematic
              efficiently for the most devastation on the battlefield.
            </p>
          </div>
          <img src="assets/hero/stick.png" />
        </li>
        <li className={styles.aboutItem}>
          <img src="assets/hero/heroRightImage.png" />
          <div className={styles.aboutItemText}>
            <h3 className={styles.leftText}>Tank Caption</h3>
            <p>
              Bases for your miniatures, vehicles, or whatever you need! Extra
              bits and bobs. Additional pieces - STLs for every occasion.
            </p>
          </div>
        </li>
      </ul>

      <br />
      <br />
    </section>
  );
};
