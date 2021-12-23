import { IconLogo } from 'components/Icon/Logo';

import styles from './index.module.scss';

export const Footer: React.FC = () => (
  <footer className={styles.container}>
    <a href='https://vercel.com' target='_blank' rel='noopener noreferrer'>
      <IconLogo class={styles.logo} />
    </a>
  </footer>
);
