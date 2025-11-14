import React from "react";
import styles from "./Home.module.css";

function Home() {
  const handleLearnMore = () => {
    window.scrollTo({ top: document.getElementById('about')?.offsetTop || 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <h1>Bem-vindo ao Hue7E</h1>
        <p>Explorando tecnologia de forma única</p>
        <button 
          className={styles.learnMore} 
          onClick={handleLearnMore}
          aria-label="Saiba mais sobre o Hue7E" 
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Home;