
import { Link, useLocation } from 'react-router';

import ROUTES from '@/config/routes';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: ROUTES.HOME, label: 'Home' },
    { path: ROUTES.ABOUT, label: 'About' },
    { path: ROUTES.CONTACT, label: 'Contact' },
  ];

  return (
    <nav className="bg-background/80 border-border fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="bg-gradient-primary bg-clip-text text-xl font-bold text-transparent">
            ReactApp
          </Link>

          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                className={`relative rounded px-4 py-2 transition-all duration-200 ${location.pathname === item.path
                  ? 'bg-primary-500 text-white'
                  : 'text-foreground hover:bg-primary/10 bg-transparent'}`}
              >
                <Link to={item.path}>{item.label}</Link>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;