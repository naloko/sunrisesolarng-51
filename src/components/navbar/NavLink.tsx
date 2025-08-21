
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { prefetchRoute } from '@/lib/prefetchRoutes';


interface NavLinkProps {
  path: string;
  translationKey: string;
  isScrolled: boolean;
  isActive: boolean;
}

const NavLink = ({ path, translationKey, isScrolled, isActive }: NavLinkProps) => {
  const { t } = useTranslation();

  return (
    <Link
      to={path}
      onMouseEnter={() => prefetchRoute(path)}
      className={`

        text-sm font-medium transition-colors relative hover-underline
        ${isScrolled 
          ? 'text-gradient text-blue-600 hover:text-primary' 
          : 'text-white/80 hover:text-white'}
        ${isActive 
          ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary text-amber-400' 
          : ''}
      `}
    >
      {t(translationKey)}
    </Link>
  );
};

// Using memo to prevent unnecessary re-renders
export default memo(NavLink);
