import URLS from '@/routes/urls';
import NavItem from './NavItem';
import Topline from './Topline';

const Header = () => {
  return (
    <Topline>
      <NavItem title="Quiz" href={URLS.QUIZ} />
    </Topline>
  );
};

export default Header;