import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="text-center py-20">
    <h1 className="text-4xl font-bold text-green-700  hover:text-green-800 mb-4">404 - Page Not Found</h1>
    <p className="mb-6">Oops! We couldn't find what you were looking for.</p>
    <Link to="/" className="text-blue-500 underline">Go back to Home</Link>
  </div>
);

export default NotFoundPage;
