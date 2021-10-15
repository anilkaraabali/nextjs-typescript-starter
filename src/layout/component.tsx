import { FooterComponent } from 'components/footer/component';

import styles from './layout.module.scss';

export const LayoutComponent: React.FunctionComponent = (props) => (
  <div id='root' className={styles.container}>
    <main data-testid='main'>{props.children}</main>
    <FooterComponent />
  </div>
);
