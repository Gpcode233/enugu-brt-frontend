import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PurchaseTicketPage = () => {
  const navigate = useNavigate();
  const [ticketType, setTicketType] = useState('');
  const [amount, setAmount] = useState('--');

  // Mock journey data from previous route planning
  const journey = {
    origin: 'UNEC Main Gate',
    destination: 'Okpara Avenue Terminal',
  };

  // Ticket types and pricing
  const ticketTypes = [
    { id: 'single', name: 'Single Trip', price: '₦350.00' },
    { id: 'day-pass', name: 'Day Pass', price: '₦500.00' },
    { id: 'weekly', name: 'Weekly Pass', price: '₦2,500.00' },
  ];

  const handleTicketTypeChange = (e) => {
    const selectedType = e.target.value;
    setTicketType(selectedType);
    
    if (selectedType) {
      const selected = ticketTypes.find(type => type.id === selectedType);
      setAmount(selected ? selected.price : '--');
    } else {
      setAmount('--');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would initiate the Paystack payment process
    console.log('Processing payment for', ticketType);
    
    // Mock successful payment and redirect
    setTimeout(() => {
      navigate('/tickets/BRT-3e876e4cb7c8');
    }, 1000);
  };

  const handleCloseModal = () => {
    // In a real application, this would close the modal and return to the journey page
    navigate('/plan');
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg w-full max-w-md overflow-hidden">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Purchase Ticket</h2>
          <button 
            onClick={handleCloseModal}
            className="text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Journey Summary */}
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-2">Your Planned Journey:</label>
            <div className="bg-gray-700 p-3 rounded text-white">
              <p><strong>From:</strong> {journey.origin}</p>
              <p><strong>To:</strong> {journey.destination}</p>
            </div>
          </div>

          {/* Ticket Type Selection */}
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-2">Select Fare Type</label>
            <select
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              value={ticketType}
              onChange={handleTicketTypeChange}
            >
              <option value="">-- Choose a fare --</option>
              {ticketTypes.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name} - {type.price}
                </option>
              ))}
            </select>
          </div>

          {/* Amount Display */}
          <div className="mb-6 flex justify-between items-center">
            <span className="text-gray-400">Total Amount:</span>
            <span className="text-xl font-bold text-white">{amount}</span>
          </div>

          {/* Payment Button */}
          <button
            onClick={handleSubmit}
            disabled={!ticketType}
            className={`w-full py-3 rounded font-medium flex justify-center items-center ${
              ticketType 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            Pay with Paystack
          </button>

          <p className="text-center text-xs text-gray-500 mt-3">
            Secure payments powered by Paystack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseTicketPage;