import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ModalWrapper from '../components/ModalWrapper';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(
      u => u.username === credentials.username && u.password === credentials.password
    );

    if (matchedUser) {
      localStorage.setItem("user", JSON.stringify(matchedUser));
      window.dispatchEvent(new Event("userUpdated"));
      toast.success("Login successful! Redirecting...");


      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 1500);
    } else {
      toast.error("Invalid username or password");
      setLoading(false);
    }
  };


  return (
    <ModalWrapper title="Sign in to your account">
      <p className="text-sm text-gray-600 mb-4">Access your ticket and profile</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label htmlFor="username" className="text-sm">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
        />

        <label htmlFor="password" className="text-sm">Password</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          value={credentials.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
        />

        <div className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-green-700 hover:underline">Forgot password?</a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-700 text-white py-2 rounded transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-800'
            }`}>
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-500">
        Don't have an account yet?{" "}
        <a href="/users/register" className="text-green-700 hover:underline">
          Sign up
        </a>
      </p>
    </ModalWrapper>
  );
};

export default LoginPage;
