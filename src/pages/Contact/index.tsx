import { useNavigate } from 'react-router';

const ContactPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <button
        className="mb-6 rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
        onClick={handleGoBack}
      >
        Volver atrás
      </button>
      <h1 className="mb-6 text-4xl font-bold">Contact Us</h1>
      <p className="mb-4">Feel free to reach out to us through the following methods:</p>
      <ul className="list-inside list-disc space-y-2">
        <li>Email:  <a href="mailto:ssss" className="text-blue-600 hover:underline">ssss</a></li>
        <li>Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1234567890</a></li>
        <li>Address: 123 React St, JavaScript City, Web</li>
      </ul>
    </div>
  );
};

export default ContactPage;