// src/components/Mint.js

import React from 'react';

const Mint = () => {
  return (
    <div className="flex flex-col items-center bg-green-200 h-full w-full justify-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Mint</h1>
      <p className="text-gray-600 text-sm text-center mb-4">Approve and mind your first Tree!</p>
      <img src="/assets/images/image 9.png" alt="Tree" className="w-40 h-40 mb-4" />
      <button
        onClick={() => alert('Approved!')}
        className="bg-green-600 text-white font-bold py-2 px-4 rounded-full w-72"
      >
        APPROVE TOKEN
      </button>
    </div>
  );
};

export default Mint;
