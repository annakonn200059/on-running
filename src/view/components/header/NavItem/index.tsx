import { Link } from 'react-router-dom';
import styles from './NavItem.module.scss';

interface NavItemProps {
  title: string;
  href: string;
}

const NavItem = ({ title, href }: NavItemProps) => (
  <Link to={href} className={styles.navItem}>
    {title}
  </Link>
);

export default NavItem;
