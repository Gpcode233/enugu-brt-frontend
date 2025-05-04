import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import VerifyTicketPage from './pages/VerifyTicketPage';
import NotFoundPage from './pages/NotFoundPage';
import RoutesPage from './pages/RoutesPage';

function Layout() {
  const [theme, setTheme] = useState('light');

  // Toggle theme
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  // Update the root HTML element for Tailwind dark mode
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <NavLink to="/" className="flex items-center font-bold text-green-700 dark:text-green-400 text-2xl tracking-tight whitespace-nowrap">
            <span className="text-4xl mr-2">🚌</span>
            Njem BRT
          </NavLink>
          <div className="hidden md:flex gap-4 ml-78">
            <NavLink to="/" end className={({ isActive }) =>
              `text-sm px-3 py-2 font-medium rounded transition ${isActive ? 'text-green-700 font-semibold bg-green-50 dark:bg-gray-700 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400'}`
            }>Plan Journey</NavLink>
            <NavLink to="/routes" className={({ isActive }) =>
              `text-sm px-3 py-2 font-medium rounded transition ${isActive ? 'text-green-700 font-semibold bg-green-50 dark:bg-gray-700 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400'}`
            }>Routes</NavLink>
            <NavLink to="/verify-ticket" className={({ isActive }) =>
              `text-sm px-3 py-2 font-medium rounded transition ${isActive ? 'text-green-700 font-semibold bg-green-50 dark:bg-gray-700 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400'}`
            }>Verify Ticket</NavLink>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4V2m0 20v-2m4.24-14.24l1.42-1.42M4.34 19.66l1.42-1.42M20 12h2M2 12H4m14.24 6.24l1.42 1.42M4.34 4.34l1.42 1.42M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3.25a9 9 0 100 17.5 9 9 0 010-17.5z" />
              </svg>
            )}
          </button>
          <NavLink to="/users/login" className={({ isActive }) =>
            `hidden md:inline-block px-4 py-2 rounded font-medium transition ${isActive ? 'underline text-green-700 dark:text-green-400' : 'text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400'}`
          }>Login</NavLink>
          <NavLink to="/users/register" className={({ isActive }) =>
            `ml-1 transition hidden md:inline-block rounded px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium shadow ${isActive ? 'ring-2 ring-green-400' : ''}`
          }>Register</NavLink>
        </div>
      </div>
    </nav>
  );
}


function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-gray-900 dark:text-white text-lg font-semibold mb-3">🚌 Njem BRT</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Making transportation smarter, faster, and more convenient across Enugu. Enjoy a modern, eco-friendly BRT experience.
          </p>
        </div>
        <div>
          <h4 className="text-gray-900 dark:text-white text-lg font-normal mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {['/', '/routes', '/verify-ticket', '/users/login', '/users/register'].map(path => (
              <li key={path}>
                <NavLink to={path} className="hover:text-green-600 dark:hover:text-green-400">
                  {path === '/' ? 'Home' : path.replace('/users/', '')}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-gray-900 dark:text-white text-lg font-normal mb-3">Contact</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">Email: support@njembrt.com</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Phone: +234 808 065 1985</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">+234 804 502 6868</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">+234 812 345 6789</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Enugu, Nigeria</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-10 border-t border-gray-200 dark:border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} KaizenLabs™. All rights reserved.
      </div>
    </footer>
  );
}


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/verify-ticket" element={<VerifyTicketPage />} />
        <Route path="/users/login" element={<LoginPage />} />
        <Route path="/users/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
