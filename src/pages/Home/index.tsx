import { useNavigate } from 'react-router';

import image from '@/assets/react.svg';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToAbout = () => {
    navigate('/about');
  };

  const handleNavigateToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="mb-8 text-center text-4xl font-bold">Welcome to ReactApp</h1>
      <p className="text-center text-lg text-gray-500">
        This is the home page of your React application.
      </p>
      <img src={image} alt='React Logo' className="mx-auto mt-10 h-40 w-40">
      </img>
      <div className="mt-10 flex justify-center gap-4">
        <button
          className="bg-primary-500 transitio cursor-pointer rounded px-6 py-2 text-white"
          onClick={handleNavigateToAbout}
        >
          About
        </button>
        <button
          className="bg-secondary-500 transitio cursor-pointer rounded px-6 py-2 text-black"
          onClick={handleNavigateToContact}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default HomePage;