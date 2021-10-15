import type { NextPage } from 'next';
import Head from 'next/head';

import styles from 'styles/pages/home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Typescript Starter</title>
      </Head>

      <h1 className={styles.title}>
        Welcome to <a href='https://nextjs.org'>Next.js!</a>
      </h1>
    </div>
  );
};

export default Home;
