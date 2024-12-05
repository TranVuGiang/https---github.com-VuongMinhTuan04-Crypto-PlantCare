import React, { useState } from 'react';

const EarnApp = () => {
  const [activeTab, setActiveTab] = useState('referAndEarn'); // Default là tab đầu tiên

  return (
    <div className="bg-green-200 min-h-screen flex justify-center w-full items-center p-4">
      <div className="bg-green-200 max-w-xs w-full h-auto rounded-lg shadow-lg flex flex-col">
        {/* Tab Navigation */}
        <div className="flex justify-center items-center space-x-2 p-2">
          <button
            className={`px-4 py-2 rounded-full font-bold ${
              activeTab === 'referAndEarn' ? 'bg-green-500 text-white' : 'bg-white text-green-500'
            }`}
            onClick={() => setActiveTab('referAndEarn')}
          >
            Refer and Earn
          </button>
          <button
            className={`px-4 py-2 rounded-full font-bold ${
              activeTab === 'earn' ? 'bg-green-500 text-white' : 'bg-white text-green-500'
            }`}
            onClick={() => setActiveTab('earn')}
          >
            Earn
          </button>
        </div>

        {/* Nội dung dựa trên Tab */}
        <div className="overflow-y-auto max-h-[400px] p-4 flex-grow">
          {activeTab === 'referAndEarn' ? <ReferAndEarnTab /> : <EarnTab />}
        </div>

        {/* 4 Button ở dưới cùng */}
        <div className="bg-green-200 p-2 flex justify-around items-center">
          <button className="bg-green-500 text-white w-12 h-12 rounded-full flex justify-center items-center">
            <img src="assets/images/image 14.png" alt="" />
          </button>
          <button className="bg-green-500 text-white w-12 h-12 rounded-full flex justify-center items-center">
            <img src="assets/images/Rectangle 135.png" alt="" />
          </button>
          <button className="bg-green-500 text-white w-12 h-12 rounded-full flex justify-center items-center">
            <img src="assets/images/Rectangle 136.png" alt="" />
          </button>
          <button className="bg-green-500 text-white w-12 h-12 rounded-full flex justify-center items-center">
            <img src="assets/images/Rectangle 137 (1).png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ReferAndEarnTab = () => {
  return (
    <div>
      {/* Phần mã invite */}
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <div className="flex justify-between items-center text-black">
          <p>Your Invite</p>
          <p className="text-lg text-right">Reward from Booster</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <img src="assets/images/Rectangle 86.png" alt="Image 1" className="mr-2" />
            <p className="font-bold text-lg text-black">15</p>
          </div>
          <div className="flex items-center">
            <img src="assets/images/image 64.png" alt="Image 2" className="mr-2" />
            <p className="font-bold text-lg text-black">5352</p>
          </div>
        </div>

        <button className="bg-orange-400 text-white w-full mt-4 p-2 rounded-md font-semibold text-left">
          Copy invite code: 16cncnq3847
          <img className="text-center" src="assets/images/Rectangle 10.png" alt="" />
        </button>
      </div>

      {/* Danh sách Top Earnings */}
      <h3 className="text-lg font-bold mb-3 text-black">Top Earnings</h3>
      <div className="space-y-2">
        {[1, 2, 3, 4].map((id) => (
          <div key={id} className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
            <div className="flex items-center">
              <span className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold">
                {id}
                <img src="assets/images/Rectangle 31.png" alt="Image 2" className="mr-2" />
              </span>
              <div className="ml-3">
                <p className="font-bold text-black">Jonathan.eth</p>
                <p className="text-gray-500 text-sm">3450 pts</p>
              </div>
            </div>
            <div className="bg-green-500 text-white px-3 py-1 rounded-full">721</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EarnTab = () => {
  return (
    <div>
      {/* Reward Section */}
      <div className="bg-gray-100 p-4 rounded-md mb-6">
        <div className="flex justify-center items-center flex-col">
          <img src="assets/images/image 64.png" alt="Coin Icon" className="w-16 h-16 mb-2" />
          <p className="text-lg font-bold text-black">Earn more coins</p>
        </div>
      </div>

      {/* Get Started */}
      <h3 className="font-bold mb-2 text-black">Get Started</h3>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <div className="flex items-center space-x-2">
          <img src="assets/images/Rectangle 88.png" alt="icon" className="w-6 h-6" />
          <p className="text-gray-500">Invite Bonus</p>
        </div>

        <p className="font-bold text-black">Earn up to 10% from friend</p>
      </div>

      {/* Social Quests */}
      <h3 className="font-bold mb-2 text-black">Social Quests</h3>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        {[
          {
            image: 'assets/images/Rectangle 90 (1).png',
            name: 'Original Tweet',
            points: '1000 PTS',
          },
          {
            image: 'assets/images/Rectangle 100.png',
            name: 'Maneko Quote',
            points: '5000 PTS',
          },
          { image: 'assets/images/Rectangle 100.png', name: 'Maneko Reply', points: 'Completed' },
        ].map((quest, index) => (
          <div key={index} className="flex justify-between items-center mb-2 last:mb-0">
            {quest.image ? (
              <img
                src={quest.image}
                alt={quest.name}
                className="w-10 h-10 object-cover rounded-md"
              />
            ) : (
              <div className="w-12 h-12 bg-gray-200 rounded-md"></div> // Placeholder if no image
            )}
            <p className="flex-1 ml-4 text-black">{quest.name}</p>
            <p className="text-sm font-bold text-black">{quest.points}</p>
          </div>
        ))}
      </div>

      {/* Gem Booters */}
      <h3 className="font-bold mb-2 text-black">Gem Booters</h3>
      <div className="bg-gray-100 p-4 rounded-md">
        <div className="flex items-center mb-2">
          <img src="assets/images/image 64.png" alt="" className="w-6 h-6 mr-2" />
          <p className="text-black text-sm">Reach Level 10</p>
        </div>
        <p className="text-black text-sm font-bold">Earn 100 PTS</p>
      </div>
    </div>
  );
};

export default EarnApp;
