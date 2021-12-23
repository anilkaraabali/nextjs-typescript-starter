import { Footer } from 'components/Footer';

import styles from './index.module.scss';

export const LayoutWrapper: React.FC = (props) => (
  <div id='root' className={styles.container}>
    <main data-testid='main'>{props.children}</main>
    <Footer />
  </div>
);
