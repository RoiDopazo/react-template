import { Route, Routes } from 'react-router';

import ROUTES from '@/config/routes';

import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route index path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CONTACT} element={<ContactPage />} />
    </Routes>
  );
};

export default Router;