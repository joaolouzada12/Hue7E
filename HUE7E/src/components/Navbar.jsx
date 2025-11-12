import { useState } from "react";
import styles from "./Navbar.module.css";

const Hue7ELogo = () => (
  <svg
    fill="none"
    height="36"
    viewBox="0 0 32 32"
    width="36"
    className={styles.logoSvg}
    aria-hidden="true"
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default function NavbarFloating() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.leftGroup}>
          <a href="#" className={styles.brand}>
            <Hue7ELogo />
            <span className={styles.brandText}>Hue7E</span>
          </a>

          <div className={styles.linksDesktop}>
            <a href="#home" className={styles.link}>Home</a>
            <a href="#about" className={styles.link}>Sobre</a>
            <a href="#services" className={styles.link}>Serviços</a>
 
          </div>
        </div>
        
        <button
          className={styles.menuButton}
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span className={`${styles.hamburger} ${open ? styles.open : ""}`} />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${open ? styles.show : ""}`}>
        <a href="#home" className={styles.mobileLink} onClick={() => setOpen(false)}>Home</a>
        <a href="#about" className={styles.mobileLink} onClick={() => setOpen(false)}>About</a>
        <a href="#contact" className={styles.mobileLink} onClick={() => setOpen(false)}>Contact</a>
      </div>
    </>
  );
}
