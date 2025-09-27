import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/assets/image/w.svg"
          alt="Next.js logo"
          width={1000}
          height={1000}
          priority
        />
      </main>
    </div>
  );
}
