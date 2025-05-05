import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route, useNavigate, Outlet, NavLink, useLocation } from 'react-router-dom';
import ModalWrapper from './components/ModalWrapper';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import VerifyTicketPage from './pages/VerifyTicketPage';
import NotFoundPage from './pages/NotFoundPage';
import RoutesPage from './pages/RoutesPage';
import Dashboard from './pages/Dashboard';

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
    <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();


  // Loads user from localStorage
  useEffect(() => {
    const loadUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    };

    loadUser();

    window.addEventListener("userUpdated", loadUser);
    return () => window.removeEventListener("userUpdated", loadUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    `text-sm px-3 py-2 font-medium rounded transition ${isActive
      ? "text-green-700 font-semibold bg-green-50 dark:bg-gray-800"
      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white border-b border-gray-100 shadow-xl sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <NavLink to="/" className="flex items-center font-bold text-green-700 text-2xl tracking-tight whitespace-nowrap">
            <span className="text-4xl mr-2">🚌</span>
            Njem BRT
          </NavLink>
          <div className="hidden md:flex gap-4 ml-80">
            <NavLink to="/" end className={({ isActive }) =>
              `text-sm px-3 py-2 font-medium rounded transition ${isActive ? 'text-green-700 font-semibold bg-green-50' : 'text-gray-700 hover:text-green-700'}`
            }>Plan Journey</NavLink>
            <NavLink to="/routes" className={({ isActive }) =>
              `text-sm px-3 py-2 font-medium rounded transition ${isActive ? 'text-green-700 font-semibold bg-green-50' : 'text-gray-700 hover:text-green-700'}`
            }>Routes</NavLink>
            <NavLink to="/verify-ticket" className={({ isActive }) =>
              `text-sm px-3 py-2 font-medium rounded transition ${isActive ? 'text-green-700 font-semibold bg-green-50' : 'text-gray-700 hover:text-green-700'}`
            }>Verify Ticket</NavLink>
          </div>
        </div>

        {/* Desktop auth for user dashboard */}
        <div className="hidden md:flex items-center gap-4 relative">
          {!user ? (
            <>
              <NavLink to="/users/login" className={navLinkClass}>Login</NavLink>
              <NavLink to="/users/register" className={({ isActive }) =>
                `ml-1 transition rounded px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium shadow ${isActive ? "ring-2 ring-green-400" : ""
                }`
              }>Register</NavLink>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center space-x-2 border border-gray-200 rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                </svg>

                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{user?.username}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg z-50">
                  <NavLink to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</NavLink>
                  <NavLink to="/my-tickets" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">My Tickets</NavLink>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-gray-900 dark:text-white p-2">
            {isMobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75ZM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12Zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 p-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <NavLink to="/" end className={navLinkClass}>Plan Journey</NavLink>
            <NavLink to="/routes" className={navLinkClass}>Routes</NavLink>
            <NavLink to="/verify-ticket" className={navLinkClass}>Verify Ticket</NavLink>
          </div>

          <hr className="border-gray-400 dark:border-gray-700" />

          <div className="flex flex-col space-y-2">
            {!user ? (
              <>
                <NavLink to="/users/login" className={navLinkClass}>Login</NavLink>
                <NavLink to="/users/register" className={navLinkClass}>Register</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/profile" className={navLinkClass}>Profile</NavLink>
                <NavLink to="/my-tickets" className={navLinkClass}>My Tickets</NavLink>
                <button onClick={handleLogout} className="text-left px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
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
          <h4 className="text-white text-lg font-normal mb-3">Contact</h4>
          <p className="text-sm text-gray-400">Email: support@njembrt.com</p>
          <p className="text-sm text-gray-400">Phone: +234 808 065 1985</p>
          <p className="text-sm text-gray-400">       +234 804 502 6868</p>
          <p className="text-sm text-gray-400">       +234 812 345 6789</p>
          <p className="text-sm text-gray-400">Enugu, Nigeria</p>
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
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/verify-ticket" element={<VerifyTicketPage />} />
          <Route path="/users/login" element={<LoginPage />} />
          <Route path="/users/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </>
  );
}
