import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [tab, setTab] = useState("Wallet");
  const navigate = useNavigate();

  return (
    <div className="bg-[#CCFEBF] h-screen w-screen flex flex-col items-center">
      <header className="flex gap-4 mt-6">
        <button
          className={`py-2 px-4 rounded-full ${tab === "Wallet" ? "bg-[#2EC438] text-white" : "bg-white text-[#11B41B]"}`}
          onClick={() => setTab("Wallet")}>
          Wallet
        </button>
        
        <button
          className={`py-2 px-4 rounded-full ${tab === "Spending" ? "bg-[#2EC438] text-white" : "bg-white text-[#11B41B]"}`}
          onClick={() => setTab("Spending")}>
          Spending
        </button>

        <button
          className={`py-2 px-4 rounded-full ${tab === "Rewards" ? "bg-[#2EC438] text-white" : "bg-white text-[#11B41B]"}`}
          onClick={() => setTab("Rewards")}>
          Rewards
        </button>
      </header>

      <main>
        {tab === "Wallet" && (
          <div>
            <div className="text-center mt-6 mb-6">
              <h1 className="text-[16px] font-semibold text-[#3D3D3D]">Total Balance</h1>
              <p className="text-[26px] font-bold text-[#3D3D3D]">1232.322 SOL</p>
              <p className="mt-2 text-white bg-[#5CEC65] rounded-full py-2 px-7 text-center mx-auto inline-block">89q2...cnq3</p>
            </div>

            <div>
              <h2 className="font-semibold text-[#3D3D3D]">Wallet Account</h2>
              <ul className="font-semibold mt-4 w-full max-w-screen-lg mx-auto rounded-md overflow-hidden shadow">
                <li className="flex items-center bg-white px-4 py-2 text-[#3D3D3D]">
                  <img src="sol" className="w-6 h-6 mr-4" />
                  <span>0.00005 PTS</span>
                </li>
                <li className="flex items-center bg-white px-4 py-2 text-[#3D3D3D] border-t border-gray-200">
                  <img src="sol" className="w-6 h-6 mr-4" />
                  <span>0.00005 PTS</span>
                </li>
                <li className="flex items-center bg-white px-4 py-2 text-[#3D3D3D] border-t border-gray-200">
                  <img src="sol" className="w-6 h-6 mr-4" />
                  <span>0.00005 PTS</span>
                </li>
              </ul>
            </div>

            <div className="mt-1 w-full max-w-screen-lg mx-auto">
              <div className="flex items-center justify-between rounded-md p-4">
                <span className="text-[#3D3D3D] font-medium">Settings</span>
                <label className="flex items-center cursor-pointer">
                  <div className="bg-white rounded-2xl flex items-center p-1">
                    <label for="toggleSound" class="mr-4 text-black">Sound</label>
                    <input id="toggleSound" type="checkbox" class="sr-only peer" />
                    <div class="w-10 h-6 bg-gray-200 rounded-full relative peer-checked:bg-green-500">
                      <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-4"></span>
                    </div>
                  </div>
                </label>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center bg-[#369E1A] rounded-full px-4 py-2">
                  <span className="text-white font-medium">EXPORT WALLET</span>
                </button>
                
                <button className="flex items-center justify-center bg-white rounded-full px-4 py-2">
                  <span className="text-[#11B41B] font-medium">LOGOUT</span>
                </button>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-0 bg-[#FFC95D] rounded-full">
                <button className="flex items-center justify-center py-2">
                  <img src="docs-icon.png" className="w-6 h-6 mr-3" />
                  <span className="text-[#3D3D3D] font-medium">JOIN DISCORD</span>
                </button>

                <button className="flex items-center justify-center py-2">
                  <img src="docs-icon.png" className="w-6 h-6 mr-3" />
                  <span className="text-[#3D3D3D] font-medium">READ DOCS</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {tab === "Spending" && (
          <div className="p-6">
            <h2 className="font-semibold text-[#3D3D3D]">Wallet Account</h2>
            <ul className="font-semibold mt-4 w-full max-w-screen-lg mx-auto rounded-md overflow-hidden shadow">
              <li className="flex items-center bg-white px-4 py-2 text-[#3D3D3D]">
                <img src="sol" className="w-6 h-6 mr-4" />
                <span>0.00005 PTS</span>
              </li>

              <li className="flex items-center bg-white px-4 py-2 text-[#3D3D3D] border-t border-gray-200">
                <img src="sol" className="w-6 h-6 mr-4" />
                <span>0.00005 PTS</span>
              </li>
              
              <li className="flex items-center bg-white px-4 py-2 text-[#3D3D3D] border-t border-gray-200">
                <img src="sol" className="w-6 h-6 mr-4" />
                <span>0.00005 PTS</span>
              </li>
            </ul>

            <button className="mt-6 bg-[#369E1A] text-white py-2 px-6 rounded-full" onClick={() => navigate("/wallet/transfer")}>Transfer</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
