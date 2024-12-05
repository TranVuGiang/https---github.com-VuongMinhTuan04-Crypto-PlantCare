import { useEffect, useState } from "react";

function LeaderBoard() {

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
                <h1 class="text-lg font-bold text-black">Leaderboard</h1>
                <div class="flex items-center space-x-4">
                    <div class="flex justify-between text-center items-center bg-green-50 rounded-lg p-3">
                        
                        <div class="text-sm text-gray-500">PST
                        <div class="text-yellow-500 font-bold">999</div>
                        </div>
                    </div>
                    <div class="flex justify-between text-center items-center bg-green-50 rounded-lg p-3">
                        
                        <div class="text-sm text-gray-500">SOL
                        <div class="text-yellow-500 font-bold">999</div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <p class="text-sm text-gray-600 mb-4">
                Rankings
            </p>


            <div class="space-y-4">
                <div class="flex justify-between items-center bg-green-50 rounded-lg p-3">
                    <div class="flex items-center space-x-3">
                        <span class="text-amber-500 text-lg">🥇</span>
                        <span class="font-medium text-black text-base">Jonathan.eth</span>
                    </div>
                    <span class="text-gray-500 text-base">3450 pts</span>
                    {/* <button class="bg-green-500 text-white px-4 py-1 rounded-md text-sm">Destroy</button> */}

                </div>


                <div class="flex justify-between items-center bg-green-50 rounded-lg p-3">
                    <div class="flex items-center space-x-3">
                        <span class="text-amber-500">🥈</span>
                        <span class="font-medium text-black">Jonathan.eth</span>

                    </div>
                    <span class="text-gray-500">3450 pts</span>
                    {/* <button class="bg-green-500 text-white px-4 py-1 rounded-md text-sm">Destroy</button> */}
                </div>

                <div class="flex justify-between items-center bg-green-50 rounded-lg p-3">
                    <div class="flex items-center space-x-3">
                        <span class="text-amber-500">🥉</span>
                        <span class="font-medium text-black">Jonathan.eth</span>

                    </div>
                    <span class="text-gray-500">3450 pts</span>
                    {/* <button class="bg-green-500 text-white px-4 py-1 rounded-md text-sm">Destroy</button> */}
                </div>
                <div class="flex justify-between items-center bg-green-50 rounded-lg p-3">
                    <div class="flex items-center space-x-3">
                        <span class="text-black">#4</span>
                        <span class="font-medium text-black">Jonthoo</span>

                    </div>
                    <span class="text-gray-500">3450 pts</span>
                    {/* <button class="bg-green-500 text-white px-4 py-1 rounded-md text-sm">Destroy</button> */}
                </div>
                <div class="flex justify-between items-center bg-green-50 rounded-lg p-3">
                    <div class="flex items-center space-x-3">
                        <span class="text-black">#4</span>
                        <span class="font-medium text-black">Jonthoo</span>

                    </div>
                    <span class="text-gray-500">3450 pts</span>
                    {/* <button class="bg-green-500 text-white px-4 py-1 rounded-md text-sm">Destroy</button> */}
                </div>
                <div class="flex justify-between items-center bg-green-50 rounded-lg p-3">
                    <div class="flex items-center space-x-3">
                        <span class="text-black">#4</span>
                        <span class="font-medium text-black">Jonthoo</span>

                    </div>
                    <span class="text-gray-500">3450 pts</span>
                    {/* <button class="bg-green-500 text-white px-4 py-1 rounded-md text-sm">Destroy</button> */}
                </div>
            </div>
            <div class="flex justify-between items-center mt-6">
                <button class="text-green-500 text-sm">&laquo; Prev</button>
                <div class="flex items-center space-x-2">
                    <button class="w-8 h-8 rounded-full bg-green-500 text-white">1</button>
                    <button class="w-8 h-8 rounded-full bg-gray-200 text-black">2</button>
                    <button class="w-8 h-8 rounded-full bg-gray-200 text-black">3</button>
                    <span className="text-black">...</span>
                    <button class="w-8 h-8 rounded-full bg-gray-200 text-black">99</button>
                </div>
                <button class="text-green-500 text-sm">Next &raquo;</button>
            </div>
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


export default LeaderBoard;