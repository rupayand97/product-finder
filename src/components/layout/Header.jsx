import { useState } from "react";

function Header() {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setShowLogoutConfirm(false);
    window.location.reload();
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[62px] flex items-center justify-between px-6 bg-black/95 backdrop-blur-sm shadow-lg border-b border-gray-800 overflow-hidden">
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-50">
          <img
            src="/header-bg.png"
            alt="header background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* LEFT SIDE - Logo + Text */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-700">
            <img
              src="/logo.png"
              alt="Product Finder Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <h1 className="text-white text-sm sm:text-base font-semibold tracking-wide">
              Product Finder
            </h1>
            <span className="text-xs text-gray-300">
              AI-powered discovery
            </span>
          </div>
        </div>

        {/* RIGHT SIDE - Logout */}
        <div className="relative z-10 flex items-center">
          <button
            onClick={handleLogout}
            className="p-2 rounded-full hover:bg-white/20 transition-all duration-300 group flex items-center justify-center"
            style={{ width: "42px", height: "42px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 transition-colors duration-300 group-hover:fill-red-400"
              viewBox="0 -960 960 960"
              fill="white"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
            </svg>
          </button>
        </div>
      </header>

      {/* LOGOUT CONFIRMATION MODAL */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[1000]">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 flex flex-col items-center max-w-sm w-full mx-4 shadow-2xl">
            
            <div className="w-14 h-14 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-red-400"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M440-160v-73h80v73h240v-320H440Zm40-400h280v-240H480Zm160 320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z" />
              </svg>
            </div>

            <p className="text-white text-center mb-6 text-lg">
              Are you sure you want to logout?
            </p>

            <div className="flex gap-4 w-full">
              <button
                onClick={confirmLogout}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
              >
                Confirm
              </button>

              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 border border-gray-500 text-gray-300 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;