import React from "react";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <section className={styles.footercontainer}>
      <br />
      <br />
      <div className={styles.footermain}>
        <h2 className={styles.title} id={styles.navbar}>
          Heavy Artillery Tanks
        </h2>
        <img src="/logotank.png" className={styles.tankicon}></img>
        <div>
          <ul className={styles.footercontent} id={styles.footerbox}>
            <li>
              <h3>
                <a href="#">Home</a>
              </h3>
            </li>
            <li>
              <h3>
                <a href="#">Discord</a>
              </h3>
            </li>
            <li>
              <h3>
                <a href="#">Instagram</a>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
