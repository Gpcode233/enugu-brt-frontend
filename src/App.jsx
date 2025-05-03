import { Routes, Route, Navigate, Outlet, NavLink, useLocation } from 'react-router-dom';
import ModalWrapper from './components/ModalWrapper';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import VerifyTicketPage from './pages/VerifyTicketPage';
import NotFoundPage from './pages/NotFoundPage';
import RoutesPage from './pages/RoutesPage';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 shadow-xl sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
        <NavLink to="/" className="flex items-center font-bold text-green-700 text-2xl tracking-tight whitespace-nowrap">
          <span className="text-4xl mr-2">🚌</span>
            Njem BRT
        </NavLink>
          <div className="hidden md:flex gap-4 ml-78">
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
        <div className="flex items-center gap-2">
          <NavLink to="/users/login" className={({ isActive }) =>
            `hidden md:inline-block px-4 py-2 rounded font-medium transition ${isActive ? 'underline text-green-700' : 'text-gray-700 hover:text-green-700'}`
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
    <footer className="bg-gray-900 text-gray-300 px-4 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">🚌 Njem BRT</h4>
          <p className="text-sm text-gray-400">
            Making transportation smarter, faster, and more convenient across Enugu. Enjoy a modern, eco-friendly BRT experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/" className="hover:text-green-400">Home</NavLink></li>
            <li><NavLink to="/routes" className="hover:text-green-400">Routes</NavLink></li>
            <li><NavLink to="/verify-ticket" className="hover:text-green-400">Verify Ticket</NavLink></li>
            <li><NavLink to="/users/login" className="hover:text-green-400">Login</NavLink></li>
            <li><NavLink to="/users/register" className="hover:text-green-400">Register</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-400">Email: support@njembrt.com</p>
          <p className="text-sm text-gray-400">Phone: +234 808 065 1985</p>
          <p className="text-sm text-gray-400">       +234 804 502 6868</p>
          <p className="text-sm text-gray-400">       +234 812 345 6789</p>            
          <p className="text-sm text-gray-400">Enugu, Nigeria</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} KaizenLabs™. All rights reserved.
      </div>
    </footer>
  );
}


function App() {
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

export default App;
