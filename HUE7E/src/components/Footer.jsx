import React from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
      </div>
      <p>© 2025 Hue7E. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
