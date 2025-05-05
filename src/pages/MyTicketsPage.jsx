import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyTicketsPage = () => {
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [ticketReference, setTicketReference] = useState('');
  
  // Mock tickets data
  const tickets = [
    {
      id: 'BRT-3e876e4cb7c8',
      origin: 'UNEC Main Gate',
      destination: 'Okpara Avenue Terminal',
      type: 'Day Pass',
      amount: '₦500.00',
      purchaseDate: 'Sun, May 4, 2025, 9:27 p.m.',
      expiryDate: 'Mon, May 5, 2025, 9:38 p.m.',
      status: 'Success'
    },
    {
      id: 'BRT-5a91b23d8e5f',
      origin: 'UNEC Main Gate',
      destination: 'Okpara Avenue Terminal',
      type: 'Day Pass',
      amount: '₦500.00',
      purchaseDate: 'Sun, May 4, 2025, 8:14 p.m.',
      expiryDate: 'Mon, May 5, 2025, 7:30 p.m.',
      status: 'Success'
    },
    {
      id: 'BRT-9c45d67e1a2b',
      origin: 'Holy Ghost Terminal',
      destination: 'Agbani Town',
      type: 'Single Trip',
      amount: '₦350.00',
      purchaseDate: 'Sun, May 4, 2025, 9:32 p.m.',
      expiryDate: 'Sun, May 4, 2025, 11:34 p.m.',
      status: 'Success'
    }
  ];

  const toggleVerifyModal = () => {
    setIsVerifyModalOpen(!isVerifyModalOpen);
    if (!isVerifyModalOpen) {
      setTicketReference('');
    }
  };

  const handleVerifyTicket = (e) => {
    e.preventDefault();
    // Implementation would go here
    console.log('Verifying ticket:', ticketReference);
    toggleVerifyModal();
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Navigation Bar */}
      <nav className="border-b border-gray-800 px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Njem BRT" className="h-6" />
          <span className="ml-2 font-medium">Njem BRT</span>
        </div>
        <div className="flex gap-6">
          <Link to="/plan" className="text-sm hover:text-gray-300">Plan Journey</Link>
          <Link to="/routes" className="text-sm hover:text-gray-300">Routes</Link>
          <Link to="/verify" className="text-sm hover:text-gray-300" onClick={(e) => {
            e.preventDefault();
            toggleVerifyModal();
          }}>Verify Ticket</Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center text-sm">
            <span className="bg-blue-500 w-2 h-2 rounded-full mr-1"></span>
            <span>Lily</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-6">My Purchased Tickets</h1>
        
        <p className="text-gray-400 text-sm mb-6">
          Here are your recently purchased tickets. Click 'View Details' for more information. Status is updated automatically.
        </p>

        {/* Tickets List */}
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="border-b border-gray-800 pb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="text-lg">
                  {ticket.origin} → {ticket.destination}
                </div>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">{ticket.status}</span>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                <div>
                  <div>Ticket Type: {ticket.type}</div>
                  <div>Purchased: {ticket.purchaseDate}</div>
                  <div>Expires: {ticket.expiryDate}</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium">Amount Paid</div>
                  <div className="text-lg">{ticket.amount}</div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Link 
                  to={`/tickets/${ticket.id}`} 
                  className="bg-gray-800 hover:bg-gray-700 text-green-400 border border-gray-700 text-sm px-4 py-2 rounded"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verify Ticket Modal */}
      {isVerifyModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg w-full max-w-md p-6 relative">
            <button 
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={toggleVerifyModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
            
            <h2 className="text-xl font-bold mb-4">Verify Ticket Status</h2>
            
            <div className="mb-4">
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">By Reference</button>
                <button className="text-gray-400 px-4 py-2">Scan QR Code</button>
              </div>
              <div className="border-b border-blue-600"></div>
            </div>
            
            <form onSubmit={handleVerifyTicket}>
              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-2">Ticket Reference</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter ticket reference (e.g., BRT-XXXXXXXX)"
                  value={ticketReference}
                  onChange={(e) => setTicketReference(e.target.value)}
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-medium"
              >
                Verify Reference
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 px-6 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Enugu BRT" className="h-6" />
              <span className="ml-2 font-medium">Enugu BRT</span>
            </div>
            <p className="text-gray-400 text-sm">Efficient and reliable public transport for Enugu city.</p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-3">QUICK LINKS</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><Link to="/plan" className="hover:text-gray-200">Plan Journey</Link></li>
              <li><Link to="/routes" className="hover:text-gray-200">View Routes</Link></li>
              <li><Link to="/fare" className="hover:text-gray-200">Fare Chart</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-3">ACCOUNT</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><Link to="/profile" className="hover:text-gray-200">My Profile</Link></li>
              <li><Link to="/my-tickets" className="hover:text-gray-200">My Tickets</Link></li>
              <li><Link to="/logout" className="hover:text-gray-200">Logout</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-3">CONTACT US</h3>
            <p className="text-sm text-gray-400 mb-2">Address: Holy Ghost Terminal, Enugu</p>
            <p className="text-sm text-gray-400">Email: support@njembrt.ng</p>
          </div>
        </div> 
      </footer>
    </div>
  );
};

export default MyTicketsPage;