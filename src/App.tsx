
import { BrowserRouter } from 'react-router';

import Navigation from '@/components/layout/Navigation';

import Router from './Router';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
};

export default App;
