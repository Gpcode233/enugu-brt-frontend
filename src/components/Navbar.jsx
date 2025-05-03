import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <NavLink to="/" className="flex items-center font-semibold text-green-700 text-lg tracking-tight whitespace-nowrap">
            <span className="text-2xl mr-2">🚌</span>
            Njem BRT
          </NavLink>
          <div className="hidden md:flex gap-4 ml-8">
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

export default Navbar;