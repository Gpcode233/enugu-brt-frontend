import React from 'react';
import { useNavigate } from 'react-router-dom';

const ModalWrapper = ({ title, children }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm px-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-2 right-2 bg-green-600 text-white hover:text-gray-300 text-xl"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4  text-green-700">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
