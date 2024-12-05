import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PhoneFrame({ children }) {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);
  const gameHomeOptions = [
    {
      id: 1,
      route: "/game-playing",
      backgroundImage: "/assets/images/image.png",
      iconImage: "/assets/images/image 14.png",
    },
    {
      id: 2,
      route: "/game2",
      backgroundImage: "/assets/images/image.png",
      iconImage: "/assets/images/Rectangle 135.png",
    },
    {
      id: 3,
      route: "/game3",
      backgroundImage: "/assets/images/image.png",
      iconImage: "/assets/images/Rectangle 136.png",
    },
    {
      id: 4,
      route: "/game4",
      backgroundImage: "/assets/images/image.png",
      iconImage: "/assets/images/Rectangle 137.png",
    },
  ];
  const [currentScreen, setCurrentScreen] = useState("home");
  const handleEventOptionClick = (option) => {
    setActiveButton(option.id);
    setCurrentScreen(option.route); // Thay option.screen bằng option.route
    setTimeout(() => setActiveButton(null), 200);
    navigate(option.route);
  };
 
  return (
    <div className="w-[375px] h-[660px] border-4 border-black rounded-2xl bg-gray-100 shadow-lg overflow-hidden flex items-center justify-center relative">
      <div className="w-full h-full bg-background-game bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center">
      {children}
      </div>
      {/* Event Options List */}
      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {gameHomeOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleEventOptionClick(option)}
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
  );
}

export default PhoneFrame;
