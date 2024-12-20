import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./custom.css";
const LoginPage = () => {
  const { publicKey, disconnect } = useWallet();

  const navigate = useNavigate();
  const loginOptions = [
    {
      id: 2,
      buttonText: "Đăng nhập với facebook",
      iconImage: "/assets/images/facebook-icon.png",
      route: "/game-login/solana",
    },
  ];

  const handleClickNavigate = (option) => {
    navigate(option.route);
  };

  useEffect(() => {
    try {
      if (publicKey) {
        alert("Đã có key: " + publicKey.toBase58())
        navigate("/game-login/solana");
      }
    } catch (error) {
      console.log(error);
    }
  }, [publicKey, navigate])



  return (
    <div className="flex items-center justify-center h-full w-full bg-background-green">
      <div className="rounded-lg p-8">
        <div className="flex flex-col items-center justify-center mb-6">
          <img
            src="/assets/images/image 4.png"
            alt="Crypto Plantcare"
            className="w-40 h-40 mb-4"
          />
          <h1 className="text-xl font-bold text-gray-800">CRYPTO PLANTCARE</h1>
          <p className="text-gray-600 text-sm mt-1">
            ------------- Sign in to your account --------------
          </p>
        </div>
        <div className="w-full">
          {/* Nút để kết nối ví */}
          <WalletMultiButton/>
        </div>

        <div className="space-y-3">
          {loginOptions.map((option, index) => (
            <button
              key={option.id}
              onClick={() => handleClickNavigate(option)}
              className={`border rounded-full py-2 px-4 flex items-center justify-center transition-transform transform duration-300 ease-in-out ${
                index === 0
                  ? "bg-green-600 hover:bg-green-700 active:scale-95 text-white"
                  : "bg-blue-600 hover:bg-blue-700 active:scale-95 text-white"
              } hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-green-400`}
              style={{ width: "100%" }}
            >
              <img
                src={option.iconImage}
                alt={option.buttonText}
                className="w-6 h-6 mr-2 transition-transform transform duration-200 group-hover:scale-110"
              />
              {option.buttonText}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
