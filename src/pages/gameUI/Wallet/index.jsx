import { useEffect, useState } from "react";


function Wallet() {

    const [activeTab, setActiveTab] = useState(1); // 1 = Account, 2 = Swap, 3 = Reward

    const gameHomeOptions = [
        {
            id: 1,
            backgroundImage: "/assets/images/image.png",
            iconImage: "/assets/images/image 14.png",
        },
        {
            id: 2,
            backgroundImage: "/assets/images/image.png",
            iconImage: "/assets/images/Rectangle 135.png",
        },
        {
            id: 3,
            backgroundImage: "/assets/images/image.png",
            iconImage: "/assets/images/Rectangle 136.png",
        },
        {
            id: 4,
            backgroundImage: "/assets/images/image.png",
            iconImage: "/assets/images/Rectangle 137.png",
        },
    ];

    const [activeButton, setActiveButton] = useState(null);

    useEffect(() => {
        // Tạo hiệu ứng gió random
        const windInterval = setInterval(() => {
            setIsWindBlowing(Math.random() > 0.5);
        }, 3000); // Thay đổi trạng thái gió mỗi 3 giây

        return () => clearInterval(windInterval);
    }, []);

    const handleEventOptionClick = (id) => {
        setActiveButton(id);
        setTimeout(() => setActiveButton(null), 200);
        // Add your event option action logic here
    };

    return (
        <div className="relative w-full h-full bg-green-200 p-4">

            <div class="flex justify-between items-center mb-4">
                <h1 class="text-lg font-bold text-black">Wallet</h1>

            </div>

            <div className="flex justify-between items-center mb-6">
                <button
                    className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 1
                        ? "bg-green-500 text-white"
                        : "bg-white text-green-500 border border-green-500"
                        }`}
                    onClick={() => setActiveTab(1)}
                >
                    Account
                </button>
                <button
                    className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 2
                        ? "bg-green-500 text-white"
                        : "bg-white text-green-500 border border-green-500"
                        }`}
                    onClick={() => setActiveTab(2)}
                >
                    Swap
                </button>
                <button
                    className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 3
                        ? "bg-green-500 text-white"
                        : "bg-white text-green-500 border border-green-500"
                        }`}
                    onClick={() => setActiveTab(3)}
                >
                    Rewards
                </button>
            </div>

            {/* Tab Content */}
            {activeTab === 1 && (
                <div className="space-y-4">
                    <div class="mb-6">
                        <p class="text-sm text-gray-600">Fren pet wallet:</p>
                        <div class="flex justify-between items-center mt-2 bg-white px-3 py-2 rounded-md border border-gray-200">
                            <p class="truncate text-black text-sm">89q24tgqjqcn4tq95416cncnq3...</p>
                            <button class="ml-2 text-gray-500 hover:text-green-500">
                                📋
                            </button>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div class="flex justify-between items-center bg-white px-4 py-3 rounded-md border border-gray-200">
                            <span class="flex items-center space-x-2">
                                <span class="text-yellow-500">➕</span>
                                <span class="text-black text-sm font-medium">0.000005 PTS</span>
                            </span>
                        </div>
                        <div class="flex justify-between items-center bg-white px-4 py-3 rounded-md border border-gray-200">
                            <span class="flex items-center space-x-2">
                                <span class="text-yellow-500">💰</span>
                                <span class="text-black text-sm font-medium">0.00005 SOL</span>
                            </span>
                        </div>
                    </div>

                    <div class="my-6 border-t border-dashed border-black"></div>


                    <div class="bg-white px-4 py-3 rounded-md border border-gray-200 text-center">
                        <p class="text-sm text-gray-600 mb-2">
                            Your code to invite friends and get 10% on their $SOL spent:
                        </p>
                        <p class="text-black font-medium">89q24tg</p>
                    </div>

                </div>
            )}

            {activeTab === 2 && (
                <div class="space-y-4">
                    <div class="bg-white px-4 py-3 rounded-md border border-gray-200 flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <div class="my-6 border-t border-dashed border-black"></div>
                            <span class="text-yellow-500 text-lg">➕</span>
                            <div>
                                <p class="text-gray-500 text-sm">Balance</p>
                                <p class="text-black font-bold">6.32492421 PTS</p>
                            </div>

                        </div>
                    </div>

                    <div class="my-6 border-t border-dashed border-black"></div>
                    <div class="grid grid-cols-1 items-center gap-1">


                        <div class="bg-white px-4 py-3 rounded-md border border-gray-200 flex flex-col items-center">
                            <p class="text-gray-500 text-sm">💰 Pay:</p>

                            <div class="flex items-center mt-2 justify-center w-full">
                                <div class="flex items-center space-x-2">

                                    <input min={0}
                                        type="number"
                                        placeholder="0.0"
                                        class="w-40 text-black text-center font-bold bg-transparent outline-none border-b border-gray-300 focus:border-blue-500"
                                    />

                                    <span class="text-lg font-semibold text-yellow-600">SOL</span>
                                </div>
                            </div>
                        </div>


                        <div class="flex items-center justify-center text-gray-400 text-2xl">⬇️</div>
                        <div class="bg-white px-4 py-3 rounded-md border border-gray-200 flex flex-col items-center">
                            <p class="text-gray-500 text-sm">➕ Burn pet score:</p>
                            <p class="text-black font-bold">0.0 PTS</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <button class="w-full bg-gray-300 text-gray-500 font-bold text-sm py-3 rounded-md cursor-not-allowed">
                            CLAIM REWARDS
                        </button>
                    </div>
                </div>
            )}



            {activeTab === 3 && (
                <div class="space-y-4">
                    <div class="bg-white px-4 py-3 rounded-md border border-gray-200 flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <div class="my-6 border-t border-dashed border-black"></div>
                            <span class="text-yellow-500 text-lg">➕</span>
                            <div>
                                <p class="text-gray-500 text-sm">Balance</p>
                                <p class="text-black font-bold">6.32492421 PTS</p>
                            </div>

                        </div>
                    </div>

                    <div class="my-6 border-t border-dashed border-black"></div>
                    <div class="grid grid-cols-1 items-center gap-1">
                        <div class="bg-white px-4 py-3 rounded-md border border-gray-200 flex flex-col items-center">
                            <p class="text-gray-500 text-sm">➕ Burn pet score:</p>
                            <p class="text-black font-bold">0.0 PTS</p>
                        </div>
                        <div class="flex items-center justify-center text-gray-400 text-2xl">⬇️</div>
                        <div class="bg-white px-4 py-3 rounded-md border border-gray-200 flex flex-col items-center">

                            <p class="text-gray-500 text-sm">💰 Receive:</p>
                            <p class="text-black font-bold">0.0 SOL</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <button class="w-full bg-gray-300 text-gray-500 font-bold text-sm py-3 rounded-md cursor-not-allowed">
                            CLAIM REWARDS
                        </button>
                    </div>
                </div>
            )}


            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                {gameHomeOptions.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => handleEventOptionClick(option.id)}
                        className={`w-12 h-12 relative flex items-center justify-center
              transform transition-transform duration-200
              ${activeButton === option.id ? "scale-90" : "scale-100"}`}
                    >
                        <img
                            src={option.backgroundImage}
                            alt={`event-background-${option.id}`}
                            className="absolute w-full h-full object-cover"
                        />
                        <img
                            src={option.iconImage}
                            alt={`event-icon-${option.id}`}
                            className="absolute w-6 h-6 z-10 object-contain"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}


export default Wallet;