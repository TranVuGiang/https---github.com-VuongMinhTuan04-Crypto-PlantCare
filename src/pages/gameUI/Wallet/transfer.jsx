import React from "react";

const Transfer = () => {
    return (
        <div className="bg-[#CCFEBF] h-screen w-screen flex flex-col items-center">
            <main>
                <div>
                    <div className="py-5">
                        <button onClick={() => window.history.back()} className="text-[#3D3D3D] text-lg font-semibold mb-4 align-middle">
                            <span className="mr-4 rounded-full bg-white py-1 px-2">&larr;</span>
                            Transfer
                        </button>
                    </div>

                    <div>
                        <ul className="font-semibold w-full max-w-screen-lg rounded-3xl overflow-hidden">
                            <li className="flex items-center bg-white px-4 py-2">
                                <span className="text-[#3D3D3D]  text-[12px] mr-6">From</span>
                                <span className="text-[#3D3D3D] text-[16px]">Spending</span>
                            </li>
                            <li className="flex items-center bg-white px-4 py-2">
                                <span className="text-[#3D3D3D] text-[12px] mr-10">To</span>
                                <span className="text-[#3D3D3D] text-[16px]">Wallet</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-5 w-full">
                        <div className="mb-4 px-16">
                            <label className="block text-[#3D3D3D] text-sm font-medium mb-2">Asset</label>
                            <input
                                type="number"
                                placeholder="Enter Asset" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#369E1A]"/>
                        </div>

                        <div className="mb-4  px-16">
                            <label className="block text-[#3D3D3D] text-sm font-medium mb-2">Amount</label>
                            <input
                                type="number"
                                placeholder="0.0" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#369E1A]"/>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <button className="bg-[#369E1A] text-white py-3 px-6 rounded-full w-full">
                        TRANSFER CONFIRM
                    </button>
                </div>
            </main>
        </div>
    );
};
  
export default Transfer;
  
{/* <button onClick={() => window.history.back()} className="text-[#3D3D3D] text-lg font-semibold mb-4">
        &larr; Back
      </button> */}