import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main} style={{ backgroundImage: `url('/images/home-background.png')`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className={styles.header}>
        <h1 className={styles.title}>COSMIC</h1>
        <h2 className={styles.subtitle}>CHATTER</h2>
      </div>
      <div className={styles.description}>
        Welcome, Cosmic Detective! Tune into the whispers of the universe. With every signal you analyze, you step closer to uncovering the secrets of distant galaxies and potentially discovering signs of extraterrestrial intelligence and technological activity.
      </div>
      <nav className={styles.nav}>
        <a href="#">Record Audio</a>
        <a href="#">Upload Audio</a>
        <a href="#">Analyze Audio</a>
      </nav>

    </main>
  );
}
