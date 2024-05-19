import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main} style={{ backgroundImage: `url('/images/home-background.png')`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div>Home</div>

    </main>
  );
}
