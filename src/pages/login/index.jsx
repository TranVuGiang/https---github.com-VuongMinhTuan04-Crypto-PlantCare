import React from 'react';

const LoginPage = () => {
  const loginOptions = [
    {
      id: 1,
      buttonText: 'Kết nối ví',
      iconImage: '/assets/images/google-icon.png',
    },
    {
      id: 2,
      buttonText: 'Kết nối Facebook',
      iconImage: '/assets/images/image 2.png',
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-green-200">
      <div className="bg-green-200 rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center justify-center mb-6">
          <img src="/assets/images/image 4.png" alt="Crypto Plantcare" className="w-40 h-40 mb-4" />
          <h1 className="text-xl font-bold text-gray-800">CRYPTO PLANTCARE</h1>
          <p className="text-gray-600 text-sm mt-1">
            ------------- Sign in to your account --------------
          </p>
        </div>
        <div className="space-y-3">
          {loginOptions.map((option, index) => (
            <button
              key={option.id}
              className={`border rounded-full py-2 px-4 flex items-center justify-center transition-colors duration-200 ${
                index === 0
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
              style={{ width: '100%' }}
            >
              <img src={option.iconImage} alt={option.buttonText} className="w-6 h-6 mr-2" />
              {option.buttonText}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
