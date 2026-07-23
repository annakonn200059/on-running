import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import URLS from '@/routes/urls';
import styles from './Topline.module.scss';
import { Logo, Menu } from '@/assets/icons';

interface ToplineProps {
  children?: ReactNode;
}

const Topline = ({ children }: ToplineProps) => (
  <header className={styles.topline}>
    <button type="button" className={styles.menuButton} aria-label="Menu">
      <Menu />
    </button>

    <Link to={URLS.QUIZ} className={styles.logo} aria-label="On home">
      <Logo />
    </Link>

    <nav className={styles.nav}>{children}</nav>
  </header>
);

export default Topline;
