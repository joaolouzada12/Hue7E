import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <h1>Bem-vindo ao Hue7E</h1>
        <p>Explorando tecnologia de forma única</p>
        <button className={styles.learnMore}>Learn More</button>
      </div>
    </div>
  );
}

export default Home;


