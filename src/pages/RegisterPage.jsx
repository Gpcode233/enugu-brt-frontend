import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ModalWrapper from '../components/ModalWrapper';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { username, email, password, confirmPassword } = formData;
  
    if (!username || !email || !password || !confirmPassword) {
      setLoading(false);
      return setError('All fields except phone are required.');
    }
    if (password.length < 8) {
      setLoading(false);
      return setError('Password must be at least 8 characters.');
    }
    if (password !== confirmPassword) {
      setLoading(false);
      return setError('Passwords do not match.');
    }
  
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    // Checks if username or email already exists
    const userExists = existingUsers.some(
      (user) => user.username === username || user.email === email
    );
  
    if (userExists) {
      setLoading(false);
      return setError('Username or email already exists.');
    }
  
    const newUser = { username, email, phone: formData.phone, password };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  
    // Sets active user session
    localStorage.setItem('user', JSON.stringify(newUser));
    window.dispatchEvent(new Event("userUpdated"));
  
    setError('');
    toast.success('Registration successful! Redirecting...');
  
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
    };

  return (
    <ModalWrapper title="Create an Account">
      <p className="text-sm text-gray-600 mb-4">
        Join Enugu BRT to plan routes and purchase tickets easily
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {error && <p className="text-sm text-red-600">{error}</p>}

        <label htmlFor="username" className="text-sm">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Choose a username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />

        <label htmlFor="email" className="text-sm">Email</label>
        <input
          name="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />

        <label htmlFor="phone" className="text-sm">Phone Number <span className="text-gray-600">(Optional)</span></label>
        <input
          name="phone"
          type="tel"
          placeholder="Phone number (optional)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />

        <label htmlFor="password" className="text-sm">Password</label>
        <input
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <p className="text-xs text-gray-600">Must be at least 8 characters long.</p>

        <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-700 text-white py-2 rounded transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-800'
          }`}>
         {loading ? 'Creating account...' : 'Create Account'}
        </button>

        <p className="text-sm text-gray-600 text-center">
          Already have an account?{' '}
          <a href="/users/login" className="text-green-700 hover:underline">
            Login here
          </a>
        </p>
      </form>
    </ModalWrapper>
  );
};

export default RegisterPage;
