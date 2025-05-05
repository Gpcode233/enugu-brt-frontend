import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const routePlannerRef = useRef(null); // Reference for the Route Planner section
  const navigate = useNavigate(); // Hook for navigation

  const scrollToRoutePlanner = () => {
    routePlannerRef.current?.scrollIntoView({ behavior: 'smooth' }); // Scroll to Route Planner
  };

  return (
    <div className="">
      {/* HERO SECTION */}
      <section className="pt-12 pb-8 px-4 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-green-500 mb-4">Plan Your Journey Across Enugu</h1>
        <p className="mb-6 text-gray-400 font-normal">Find the fastest and most convenient BRT routes. Select your origin, destination, and let us handle the planning.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          {/* Plan Route Button */}
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow font-medium flex items-center justify-center gap-2 text-base mx-auto sm:mx-0 transform transition-transform duration-400 hover:scale-107">
          <svg width="17" height="17" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3075 2.1057C13.2476 2.05903 13.1779 2.02661 13.1036 2.01091C13.0293 1.99521 12.9524 1.99663 12.8788 2.01507L9.05815 2.97008L5.22376 1.05257C5.11693 0.999282 4.99455 0.98598 4.87876 1.01507L0.878751 2.01507C0.770581 2.04211 0.674552 2.10453 0.605927 2.19241C0.537301 2.28028 0.500017 2.38858 0.5 2.50007V11.5001C0.500012 11.5761 0.517337 11.6511 0.550661 11.7193C0.583984 11.7876 0.63243 11.8474 0.692317 11.8941C0.752205 11.9409 0.821959 11.9734 0.896282 11.9892C0.970606 12.0049 1.04754 12.0035 1.12125 11.9851L4.94189 11.0301L8.77627 12.9476C8.84588 12.9819 8.92242 12.9999 9.00003 13.0001C9.0409 13.0001 9.08162 12.995 9.12128 12.9851L13.1213 11.9851C13.2295 11.9581 13.3255 11.8956 13.3941 11.8078C13.4627 11.7199 13.5 11.6116 13.5 11.5001V2.50007C13.5001 2.42403 13.4827 2.34898 13.4494 2.28064C13.416 2.2123 13.3675 2.15247 13.3075 2.1057ZM5.50001 2.30882L8.50002 3.80883V11.6914L5.50001 10.1913V2.30882ZM1.5 2.8907L4.50001 2.1407V10.1095L1.5 10.8595V2.8907ZM12.5 11.1095L9.50003 11.8595V3.8907L12.5 3.1407V11.1095Z" fill="white"/>
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
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-t-4 border-green-400 flex flex-col items-start mx-auto sm:mx-0 transform transition-transform duration-400 hover:scale-106">
            <span className="bg-green-50 dark:bg-gray-700 rounded-full p-2 mb-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#26ae63" strokeWidth="2" />
                <path d="M8 12h4l2-4" stroke="#26ae63" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-gray-100">Fast &amp; Reliable Service</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Frequent buses during peak hours ensure minimal wait times. Dedicated lanes help avoid traffic delays.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-t-4 border-blue-400 flex flex-col items-start mx-auto sm:mx-0 transform transition-transform duration-400 hover:scale-106">
            <span className="bg-blue-50 dark:bg-gray-700 rounded-full p-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#1D4ED8" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2" stroke="#1D4ED8" strokeWidth="2"></rect>
                <path d="M3 10h18" stroke="#1D4ED8" strokeWidth="2"></path>
                <path d="M7 15h2" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round"></path>
              </svg>
            </span>
            <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-gray-100">Secure Digital Payments</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Purchase tickets online hassle-free using Paystack. Quick, convenient, and secure.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border-t-4 border-yellow-400 flex flex-col items-start mx-auto sm:mx-0 transform transition-transform duration-400 hover:scale-106">
            <span className="bg-yellow-50 dark:bg-gray-700 rounded-full p-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#F59E0B" strokeWidth="2">
                <path d="M12 2L3 5v6c0 5.25 3.75 10.5 9 12 5.25-1.5 9-6.75 9-12V5l-9-3z" />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-gray-100">Safe &amp; Comfortable Ride</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Travel in modern, air-conditioned buses equipped with security features for your peace of mind.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-green-50 py-10 px-4 rounded-lg border border-green-100 w-[90%] max-w-[1400px] mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-3 border-[3px] border-green-200 shadow-sm">
                1
              </div>
              <h3 className="text-md font-semibold text-gray-800 mb-1">Select Stops</h3>
              <p className="text-sm text-gray-600 text-center max-w-xs">
                Choose your start and end points, or use your location.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-3 border-[3px] border-green-200 shadow-sm">
                2
              </div>
              <h3 className="text-md font-semibold text-gray-800 mb-1">View Route</h3>
              <p className="text-sm text-gray-600 text-center max-w-xs">
                See the best route on the map with directions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-3 border-[3px] border-green-200 shadow-sm">
                3
              </div>
              <h3 className="text-md font-semibold text-gray-800 mb-1">Buy Ticket</h3>
              <p className="text-sm text-gray-600 text-center max-w-xs">
                Purchase your ticket easily online via Paystack.
              </p>
            </div>
          </div>
        </div>
      </section>

      <br />
      {/* ROUTE PLANNER SECTION */}
      <section ref={routePlannerRef} className="bg-white py-12 px-6 shadow-md rounded-lg max-w-4xl mx-auto">
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
            <a href="#" className="text-green-600 text-sm mt-2 inline-flex items-center gap-1 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.686 2 6 4.686 6 8c0 4.418 6 12 6 12s6-7.582 6-12c0-3.314-2.686-6-6-6z" />
                <circle cx="12" cy="8" r="2" />
              </svg>
              Use my location
            </a>
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
          <button className="bg-green-600 hover:bg-green-700 text-white w-full py-5 rounded shadow font-medium transform transition-transform duration-200 hover:scale-105">
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
            <span className="text-xs text-gray-500">Approx. 4 stops</span>
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

export default HomePage;

