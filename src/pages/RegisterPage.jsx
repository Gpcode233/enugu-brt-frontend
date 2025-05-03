import React from 'react';
import ModalWrapper from '../components/ModalWrapper';

const RegisterPage = () => {
  return (
    <ModalWrapper title="Create a New Account">
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
        >
          Register
        </button>
      </form>
    </ModalWrapper>
  );
};

export default RegisterPage;
