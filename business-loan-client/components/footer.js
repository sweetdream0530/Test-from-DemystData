import styles from '../styles/Home.module.css'

export default function Footer() {
    return(
        <footer className={styles.footer}>
        <a
          href="https://linkedin.com/in/benjaminmahler"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submitted by Ben Mahler
        </a>
      </footer>
    );
}