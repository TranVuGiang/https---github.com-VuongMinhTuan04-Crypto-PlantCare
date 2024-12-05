import React from 'react';

const Swap = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center bg-green-100 h-full justify-center py-8 px-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Swap</h1>
      <p className="text-gray-600 text-sm text-center mb-8 max-w-lg">
        You’ll need 10 $SOL to shake the tree. Swap some ETH for SOL tokens to get started!
      </p>

      {/* You Pay: and Balance on the same line */}
      <div className="w-full max-w-md mb-6 flex justify-between items-center space-x-4">
        <div className="flex items-center">
          <label className="text-sm text-gray-700 font-medium mr-2">You pay:</label>
        </div>
        <p className="text-sm text-gray-600">Balance: 1000.0 SOL</p>
      </div>

      {/* You Pay Input */}
      <div className="w-80 max-w-md mb-6 flex items-center border border-green-300 rounded-lg overflow-hidden">
        <input
          type="text"
          className="flex-grow border-0 px-4 py-3 focus:outline-none text-lg text-gray-800"
          defaultValue={50}
        />
        <div className="flex items-center justify-center bg-green-300 border-l border-green-300 px-4 py-3">
          <img src="/assets/images/Rectangle-9.png" alt="SOL" className="w-6 h-6" />
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full max-w-md mb-6 border-b-2 border-gray-300"></div>

      {/* You Receive Section */}
      <div className="w-80 max-w-md mb-6">
        {/* Title for 'You Receive' */}
        <label className="text-sm text-gray-700 font-medium mb-2 block">You receive:</label>

        {/* Input field with rounded border and image */}
        <div className="flex items-center border border-white rounded-full overflow-hidden">
          <input
            type="text"
            className="flex-grow border-0 px-4 py-3 focus:outline-none text-lg text-gray-800"
            value="500 PTS"
            readOnly
          />
          <div className="flex items-center justify-center bg-green-300 border-l border-green-300 px-4 py-3">
            <img src="/assets/images/Rectangle-10.png" alt="PTS" className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <button
        onClick={onNext}
        className="bg-green-600 text-white font-bold py-3 px-8 rounded-full w-72 max-w-md mt-4 transition-all hover:bg-green-700"
      >
        SWAP
      </button>
    </div>
  );
};

export default Swap;
