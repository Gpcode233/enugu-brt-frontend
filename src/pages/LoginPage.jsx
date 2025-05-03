import React from 'react';
import ModalWrapper from '../components/ModalWrapper';

const LoginPage = () => {
  return (
    <ModalWrapper title="Login to Njem BRT">
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition duration-200"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-500">
        Don't have an account?{" "}
        <a href="/users/register" className="text-green-700 hover:underline">
          Register
        </a>
      </p>
    </ModalWrapper>
  );
};

export default LoginPage;
