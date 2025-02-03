import React, { useState } from "react";
import Link from "next/link";

const HeaderModal = ({ isHeaderModalOpen, closeHeaderModal }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [selectedNav, setSelectedNav] = useState("");

  const handleNavClick = (nav) => {
    setSelectedNav(nav);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeHeaderModal();
      setIsClosing(false);
    }, 500);
  };

  return (
    <div>
      {isHeaderModalOpen && (
        <div
          className="block lg:hidden fixed inset-0 bg-white bg-opacity-20 backdrop-blur-[4px] flex justify-center items-end z-50 transition-all duration-500"
          onClick={handleClose}
        >
          <div
            className={`bg-[#12112F] w-full p-6 rounded-t-[50px] transform transition-transform duration-500 ${
              isClosing ? "animate-slide-down" : "animate-slide-up"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="items-center bg-[#12112F] rounded-[10px] transition-all duration-300 transform hover:translate-y-[-5px]"
              style={{ cursor: "pointer" }}
            >
              <div className="flex justify-center">
                <div className="w-12 h-[2px] bg-gray-300 my-2 mx-auto"></div>
              </div>

              <div className="flex flex-col items-center justify-center my-5 space-y-5">
                <Link href="/">
                  <div
                    className={`flex items-center p-2 cursor-pointer  transition duration-300 ${
                      selectedNav === "Home"
                        ? "font-heavy border-b-[3px] border-[#FFE76C]"
                        : "font-medium"
                    }`}
                  >
                    <p
                      onClick={() => handleNavClick("Home")}
                      className="text-white hover:text-white text-[25px]"
                    >
                      صفحه اصلی
                    </p>
                  </div>
                </Link>

                <Link href="/teach">
                  <div
                    className={`flex items-center p-2 cursor-pointer  transition duration-300 ${
                      selectedNav === "Teach"
                        ? "font-heavy border-b-[3px] border-[#FFE76C]"
                        : "font-medium"
                    }`}
                  >
                    <p
                      onClick={() => handleNavClick("Teach")}
                      className="text-white hover:text-white text-[25px]"
                    >
                      آموزش
                    </p>
                  </div>
                </Link>

                <Link href="/blog">
                  <div
                    className={`flex items-center p-2 cursor-pointer  transition duration-300 ${
                      selectedNav === "Blog"
                        ? "font-heavy border-b-[3px] border-[#FFE76C]"
                        : "font-medium"
                    }`}
                  >
                    <p
                      onClick={() => handleNavClick("Blog")}
                      className="text-white hover:text-white text-[25px]"
                    >
                      بلاگ
                    </p>
                  </div>
                </Link>

                <Link href="/about">
                  <div
                    className={`flex items-center p-2 cursor-pointer  transition duration-300 ${
                      selectedNav === "About"
                        ? "font-heavy border-b-[3px] border-[#FFE76C]"
                        : "font-medium"
                    }`}
                  >
                    <p
                      onClick={() => handleNavClick("About")}
                      className="text-white hover:text-white text-[25px]"
                    >
                      درباره‌ ما
                    </p>
                  </div>
                </Link>

                <Link href="/contact">
                  <div
                    className={`flex items-center p-2 cursor-pointer  transition duration-300 ${
                      selectedNav === "Contact"
                        ? "font-heavy border-b-[3px] border-[#FFE76C]"
                        : "font-medium"
                    }`}
                  >
                    <p
                      onClick={() => handleNavClick("Contact")}
                      className="text-white hover:text-white text-[25px]"
                    >
                      ارتباط با ما
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderModal;
