function GameHome() {
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
  return (
    <div className="relative w-full h-full">
      {/* Level Image */}
      <div className="">
        <img
          className="absolute top-12 left-7 w-12 h-12 z-10 bg-white px-1 py-1 rounded-full"
          src="/assets/images/treelevel.png"
          alt="image-level"
        />
        <span className="absolute top-[90px] left-7 text-black z-20 font-montserrat font-bold bg-white text-center w-12 text-[12px] rounded-xl">
          LV 3
        </span>
      </div>
      {/* SOL và SAO */}
      <div className="flex">
        <div className="w-20 h-8 bg-white absolute top-14 right-28 flex items-center rounded-full">
          <img
            className=" w-8 h-8 z-10 bg-white px-1 py-1 rounded-full"
            src="/assets/images/solana-icon.png"
            alt="image-level"
          />
          <span className="text-black z-20 font-montserrat font-bold bg-white text-center w-12 text-[12px] rounded-xl">
            0
          </span>
        </div>
        <div className="w-20 h-8 bg-white absolute top-14 right-5 flex items-center rounded-full">
          <img
            className=" w-8 h-8 z-10 bg-white px-1 py-1 rounded-full"
            src="/assets/images/solana-icon.png"
            alt="image-level"
          />
          <span className="text-black z-20 font-montserrat font-bold bg-white text-center w-12 text-[12px] rounded-xl">
            0
          </span>
        </div>
      </div>
      {/* Tree Image */}
      <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] flex items-center justify-center">
        <img
          src="/assets/images/tree.png"
          alt="tree-image"
          className="max-w-full h-auto object-contain"
        />
      </div>
      {/* Hình cái giỏ */}
      <div className="absolute top-28 right-4 w-12 h-12 flex items-center justify-center">
        <div className="absolute w-full h-full">
          <img
            src="/assets/images/Ellipse-42.png"
            alt="basket-background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-8 h-8 z-10">
          <img
            src="/assets/images/icons8-basket-48 1.png"
            alt="basket-icon"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/* Hình cái cuốc */}
      <div className="absolute top-44 right-4 w-12 h-12 flex items-center justify-center">
        <div className="absolute w-full h-full">
          <img
            src="/assets/images/Ellipse-47.png"
            alt="shovel-background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-6 h-6 z-10">
          <img
            src="/assets/images/icons8-shovel-64 1.png"
            alt="shovel-icon"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/* List option sự kiện */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {gameHomeOptions.map((option) => (
          <div
            key={option.id}
            className="w-12 h-12 relative flex items-center justify-center"
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameHome;
