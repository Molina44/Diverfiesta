import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Redirige a la página de inicio después de 5 segundos
    }, 5000);

    return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta
  }, [navigate]);

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">The page you are looking for does not exist.</p>
      <p className="mt-2">You will be redirected to the home page in 5 seconds.</p>
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;