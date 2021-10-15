import { IconLogoTemplate } from 'components/icon/logo/template';

import styles from './footer.module.scss';

export const FooterComponent = (): JSX.Element => (
  <footer className={styles.container}>
    <a href='https://vercel.com' target='_blank' rel='noopener noreferrer'>
      <IconLogoTemplate class={styles.logo} />
    </a>
  </footer>
);
