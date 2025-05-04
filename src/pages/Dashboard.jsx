import React from 'react';

function Dashboard() {
  return (
    <div className="bg-gray-50">
      {/* HERO SECTION */}
      <section className="pt-12 pb-8 px-4 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-green-700 mb-4">Plan Your Journey Across Enugu</h1>
        <p className="mb-6 text-gray-600 text-lg">Find the fastest and most convenient BRT routes. Select your origin, destination, and let us handle the planning.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          {/* Plan Route Button */}
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow font-medium flex items-center justify-center gap-2 text-base mx-auto sm:mx-0 transform transition-transform duration-400 hover:scale-107">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
              <path d="M9 20l-5.447-2.724A2 2 0 0 1 2 15.447V6.553a2 2 0 0 1 1.553-1.947L9 2m6 0l5.447 2.724A2 2 0 0 1 22 8.553v8.894a2 2 0 0 1-1.553 1.947L15 22M9 2v18m6-18v18" />
            </svg>
            Plan Route Now
          </button>

          {/* View All Routes Button */}
          <button className="border border-gray-200 hover:border-green-600 text-green-700 bg-white px-6 py-3 rounded shadow font-medium flex items-center justify-center gap-2 text-base mx-auto sm:mx-0 transform transition-transform duration-400 hover:scale-107">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#26ae63" strokeWidth="2">
              <path d="M9 12h6M9 16h6M9 8h6m-7 12h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
            </svg>
            View All Routes
          </button>
        </div>
      </section>

      {/* FEATURE CARDS SECTION */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-green-400 flex flex-col items-start mx-auto sm:mx-0 transform transition-transform duration-400 hover:scale-106">
            <span className="bg-green-50 rounded-full p-2 mb-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#26ae63" strokeWidth="2" /><path d="M8 12h4l2-4" stroke="#26ae63" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
            <h3 className="text-lg font-semibold mb-1">Fast &amp; Reliable Service</h3>
            <p className="text-sm text-gray-600">Frequent buses during peak hours ensure minimal wait times. Dedicated lanes help avoid traffic delays.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-blue-400 flex flex-col items-start mx-auto sm:mx-0 transform transition-transform duration-400 hover:scale-106">
            <span className="bg-blue-50 rounded-full p-2 mb-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="5" y="8" width="14" height="10" rx="2" stroke="#3490eb" strokeWidth="2" /><path d="M8 12h4v4" stroke="#3490eb" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
            <h3 className="text-lg font-semibold mb-1">Secure Digital Payments</h3>
            <p className="text-sm text-gray-600">Purchase tickets online hassle-free using Paystack. Quick, convenient, and secure.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-yellow-400 flex flex-col items-start mx-auto sm:mx-0 transform transition-transform duration-400 hover:scale-106">
            <span className="bg-yellow-50 rounded-full p-2 mb-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="5" y="8" width="14" height="10" rx="2" stroke="#e99c18" strokeWidth="2" /><path d="M9 14l3-3 3 3" stroke="#e99c18" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
            <h3 className="text-lg font-semibold mb-1">Safe &amp; Comfortable Ride</h3>
            <p className="text-sm text-gray-600">Travel in modern, air-conditioned buses equipped with security features for your peace of mind.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-green-50 py-9 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Select Stops</h3>
              <p className="text-sm text-gray-600">Choose your start and end points, or use your location.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">View Route</h3>
              <p className="text-sm text-gray-600">See the best route on the map with directions.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Buy Ticket</h3>
              <p className="text-sm text-gray-600">Purchase your ticket easily online via Paystack.</p>
            </div>
          </div>
        </div>
      </section>


      <br />
      {/* ROUTE PLANNER SECTION */}
      <section className="bg-white py-12 px-6 shadow-md rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Route Planner</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Origin Stop */}
          <div>
            <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-2">Origin Stop</label>
            <select
              id="origin"
              className="w-full border border-gray-500 rounded-lg text-left-8 focus:ring-blue-300 focus:border-blue-500 bg-blue-20 py-4"
            >
              <option value="">Select origin</option>
              <option value="Abakpa">Abakpa</option>
              <option value="New Haven">New Haven</option>
              <option value="Ogui Road">Ogui Road</option>
              <option value="Independence Layout">Independence Layout</option>
              <option value="Trans-Ekulu">Trans-Ekulu</option>
              <option value="GRA">GRA</option>
              <option value="Coal Camp">Coal Camp</option>
              <option value="Emene">Emene</option>
            </select>
            <a href="#" className="text-green-600 text-sm mt-2 inline-block hover:underline">Use my location</a>
          </div>

          {/* Destination Stop */}
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">Destination Stop</label>
            <select
              id="destination"
              className="w-full border border-gray-500 rounded-lg text-left-8 focus:ring-blue-300 focus:border-blue-500 bg-blue-20 py-4"
            >
              <option value="">Select destination</option>
              <option value="Abakpa">Abakpa</option>
              <option value="New Haven">New Haven</option>
              <option value="Ogui Road">Ogui Road</option>
              <option value="Independence Layout">Independence Layout</option>
              <option value="Trans-Ekulu">Trans-Ekulu</option>
              <option value="GRA">GRA</option>
              <option value="Coal Camp">Coal Camp</option>
              <option value="Emene">Emene</option>
            </select>
          </div>
        </div>

        {/* Planning Strategy */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Planning Strategy</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="strategy"
                value="minimize-transfers"
                defaultChecked
                className="text-green-600 focus:ring-green-500"
              />
              <span className="ml-2 text-gray-700">Minimize transfers</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="strategy"
                value="minimize-stops"
                className="text-green-600 focus:ring-green-500"
              />
              <span className="ml-2 text-gray-700">Minimize stops</span>
            </label>
          </div>
        </div>

        {/* Plan Route Button */}
        <div className="text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow font-medium transform transition-transform duration-200 hover:scale-105">
            Plan Route
          </button>
        </div>
      </section>

      <br />

      
      {/* POPULAR ROUTES SECTION */}
      <div className="py-5 flex flex-col items-center gap-5">
      <h2 className="mt-3 font-bold text-3xl text-gray-900">Popular Routes</h2>

      <div className="flex justify-center gap-5">
  <div className="bg-white rounded-md shadow-md w-80 overflow-hidden mx-auto sm:mx-0 transform transition-transform duration-400 hover:scale-107">
    <div className="py-15 bg-gradient-to-r from-green-700 to-green-400 text-white text-center font-bold text-lg ">
      Holy Ghost → IMT Campus
    </div>
    <div className="p-4 text-sm text-gray-600">
      Northern Ogui Rd corridor, connecting the central hub to IMT.
    </div>
    <div className="p-4 flex justify-between items-center">
      <span className="text-xs text-gray-500">Approx. 5 stops</span>
      <button className="bg-transparent border-none cursor-pointer font-semibold text-sm text-green-400 hover:underline">
        Plan This Route →
      </button>
    </div>
  </div>

        <div className="bg-white rounded-md shadow-md w-80 overflow-hidden mx-auto sm:mx-0 transform transition-transform duration-400 hover:scale-107">
          <div className={`py-15 bg-gradient-to-r from-blue-800 to-blue-400 text-white text-center font-bold text-lg`}>
            Holy Ghost → Agbani Town
          </div>
          <div className="p-4 text-sm text-gray-600">
            Main southern route via Agbani Rd, serving Gariki Market and ESUT gate access.
          </div>
          <div className="p-4 flex justify-between items-center">
            <span className="text-xs text-gray-500">Approx. 8 stops</span>
            <button className={`bg-transparent border-none cursor-pointer font-semibold text-sm text-blue-400 hover:underline`}>
              Plan This Route →
            </button>
          </div>
        </div>

        <div className="bg-white rounded-md shadow-md w-80 overflow-hidden mx-auto sm:mx-0 transform transition-transform duration-400 hover:scale-107">
          <div className={`py-15 bg-gradient-to-r from-orange-700 to-orange-400 text-white text-center font-bold text-lg`}>
            UNEC → Okpara Avenue
          </div>
          <div className="p-4 text-sm text-gray-600">
            Connects UNEC Campus and the Admin/Business district via Zik Ave.
          </div>
          <div className="p-4 flex justify-between items-center">
            <span className="text-xs text-gray-500">Approx. 8 stops</span>
            <button className={`bg-transparent border-none cursor-pointer font-semibold text-sm text-orange-400 hover:underline`}>
              Plan This Route →
            </button>
          </div>
        </div>
      </div>
    </div>



    </div>
  );
}

export default Dashboard;

