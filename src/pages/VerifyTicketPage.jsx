import React from 'react';
import ModalWrapper from '../components/ModalWrapper';

const VerifyTicketPage = () => {
  return (
    <ModalWrapper title="Verify Ticket">
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Enter Ticket Code"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
        >
          Verify
        </button>
      </form>
    </ModalWrapper>
  );
};

export default VerifyTicketPage;
