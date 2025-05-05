import React from 'react';

function Profile() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <div className="text-center">
            <div className="w-24 h-24 bg-green-600 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto">
              G
            </div>
            <h2 className="mt-4 text-xl font-bold">GODSPOWER</h2>
            <p className="text-sm text-gray-400">godspowerojini@gmail.com</p>
          </div>
          <div className="mt-6">
            <div className="bg-gray-700 text-center py-3 rounded-lg mb-4">
              <p className="text-sm font-medium">Wallet Balance</p>
              <p className="text-lg font-bold">₦0.00</p>
            </div>
            <div className="bg-gray-700 text-center py-3 rounded-lg">
              <p className="text-sm font-medium">Loyalty Points</p>
              <p className="text-lg font-bold">0 pts</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/my-tickets" className="text-sm text-gray-300 hover:text-white">
                  My Tickets
                </a>
              </li>
              <li>
                <a href="/" className="text-sm text-gray-300 hover:text-white">
                  Plan New Journey
                </a>
              </li>
              <li>
                <a href="/verify-ticket" className="text-sm text-gray-300 hover:text-white">
                  Verify a Ticket
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem('user');
                    window.location.href = '/';
                  }}
                  className="text-sm text-red-500 hover:text-red-600"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Profile Form */}
        <div className="md:col-span-2 bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-6">Update Profile Information</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Username</label>
                <input
                  type="text"
                  value="GODSPOWER"
                  disabled
                  className="w-full bg-gray-700 text-gray-300 rounded-lg px-4 py-2"
                />
                <p className="text-xs text-gray-500 mt-1">Username cannot be changed.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  value="godspowerojini@gmail.com"
                  disabled
                  className="w-full bg-gray-700 text-gray-300 rounded-lg px-4 py-2"
                />
                <p className="text-xs text-gray-500 mt-1">Email cannot be changed.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <input
                  type="text"
                  placeholder="+234..."
                  className="w-full bg-gray-700 text-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Home Address</label>
                <textarea
                  placeholder="Your home address"
                  className="w-full bg-gray-700 text-gray-300 rounded-lg px-4 py-2"
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;