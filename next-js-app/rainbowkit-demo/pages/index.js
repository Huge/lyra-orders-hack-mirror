import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Options ordering</title>
        <meta
          name="description"
          content="Versatile Options Trading UI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{ marginBottom: "4rem" }}>
          Please connect to order options:
        </h1>
        <ConnectButton />
      </main>
    </div>
  );
}