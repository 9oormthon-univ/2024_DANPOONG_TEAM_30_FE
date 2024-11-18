import { Link, useLocation } from 'react-router-dom';
import { NavItemProps } from '@/types/props';

const NavItem = ({ children, contentName, path }: NavItemProps) => {
  const location = useLocation();
  const isActive = path === location.pathname;

  return (
    <Link
      to={path}
      className={
        'w-[50px] flex flex-col items-center text-center font-light text-[12px] text-gray50'
      }
    >
      <div style={{ fill: isActive ? '#97DF47' : '#BBBEC2' }}>{children}</div>
      {contentName && <span>{contentName}</span>}
    </Link>
  );
};

export default NavItem;
