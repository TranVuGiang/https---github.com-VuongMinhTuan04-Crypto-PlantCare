
const Notification = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-400 to-pink-600">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
          <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
          <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
        </div>
        <div className="text-4xl font-bold text-white">LEVEL UP!</div>
        <button className="px-4 py-2 text-white bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors">
          OK
        </button>
      </div>
    </div>
  );
};

export default Notification;