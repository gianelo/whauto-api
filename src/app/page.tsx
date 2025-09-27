import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/assets/image/w.svg"
          alt="Whauto API Logo"
          width={900}
          height={900}
          priority
        />
      </main>
    </div>
  );
}
