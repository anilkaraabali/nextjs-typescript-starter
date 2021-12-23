import { NextPage } from 'next';

import { PageHead } from 'components/PageHead';

import styles from './index.module.scss';

export const Home: NextPage = () => (
  <div className={styles.container}>
    <PageHead
      title='Typescript Nextjs Starter'
      description='A TypeScript starter for Next.js that includes all you need to build amazing projects'
    />

    <h1 className={styles.title}>
      Welcome to <a href='https://github.com/anilkaraabali/typescript-nextjs-starter'>Typescript Nextjs Starter!</a>
    </h1>
  </div>
);
