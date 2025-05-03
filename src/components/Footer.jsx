import React from 'react';

function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 px-4 py-10 mt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-3">Njem BRT</h4>
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
            <p className="text-sm text-gray-400">Phone: +234 804 502 6868</p>
            <p className="text-sm text-gray-400">Phone: +234 812 345 6789</p>            
            <p className="text-sm text-gray-400">Enugu, Nigeria</p>
          </div>
        </div>
  
        <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Njem BRT. All rights reserved.
        </div>
      </footer>
    );
  }
  

export default Footer;
