import styles from "./DownloadButton.module.css";

export default function DownloadButton() {
  return (
    <a href="download" className={styles.downloadButton}>
      Download the app
    </a>
  );
}
