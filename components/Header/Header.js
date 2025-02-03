"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/img/Logo.png";
import smLogo from "@/public/img/smLogo.png";

import HeaderModal from "./HeaderModal";

const Header = () => {
  const [selectedNav, setSelectedNav] = useState("");

  const [isHeaderModalOpen, setIsHeaderModalOpen] = useState(false);
  const openHeaderModal = () => setIsHeaderModalOpen(true);
  const closeHeaderModal = () => setIsHeaderModalOpen(false);

  const handleNavClick = (nav) => {
    setSelectedNav(nav);
  };

  return (
    <>
      <header className="bg-[#C8BAFF26] rounded-full w-[95%] lg:w-[80%] mx-auto my-5 top-0 z-50">
        <div className="flex items-center justify-between p-4">
          {/* login */}
          <div
            className="hidden lg:flex items-center space-x-2"
            style={{ justifyContent: "space-between" }}
          >
            <button className="bg-[#FFE76C] text-black rounded-full py-2 px-4 border-[2px] border-[#FFE76C]">
              ورود یا ثبت نام
            </button>
            <button className="bg-none text-[#FFE76C] rounded-full py-2 px-4 border-[2px] border-[#FFE76C]">
              ثبت‌نام کافه
            </button>
          </div>

          {/* GiHamburgerMenu */}
          <div className="block lg:hidden">
            <div className="bg-[#C8BAFF26] p-3 rounded-full flex items-center">
              <button onClick={openHeaderModal}>
                <GiHamburgerMenu color="white" size="30" />
              </button>
            </div>
          </div>

          <HeaderModal
            isHeaderModalOpen={isHeaderModalOpen}
            closeHeaderModal={closeHeaderModal}
          />

          <Image
            src={smLogo}
            alt="smLogo"
            className="rounded-lg object-contain block lg:hidden"
          />

          {/* desktopNav */}
          <nav className="hidden lg:flex space-x-20">
            <div className="hidden lg:flex space-x-5">
              <Link href="/contact">
                <div
                  className={`flex items-center p-2 cursor-pointer rounded-md transition duration-300 ${
                    selectedNav === "Contact" ? "font-heavy" : "font-medium"
                  }`}
                >
                  <p
                    onClick={() => handleNavClick("Contact")}
                    className="text-white hover:text-white text-[15px]"
                  >
                    ارتباط با ما
                  </p>
                </div>
              </Link>

              <Link href="/about">
                <div
                  className={`flex items-center p-2 cursor-pointer rounded-md transition duration-300 ${
                    selectedNav === "About" ? "font-heavy" : "font-medium"
                  }`}
                >
                  <p
                    onClick={() => handleNavClick("About")}
                    className="text-white hover:text-white text-[15px]"
                  >
                    درباره‌ ما
                  </p>
                </div>
              </Link>
              <Link href="/blog">
                <div
                  className={`flex items-center p-2 cursor-pointer rounded-md transition duration-300 ${
                    selectedNav === "Blog" ? "font-heavy" : "font-medium"
                  }`}
                >
                  <p
                    onClick={() => handleNavClick("Blog")}
                    className="text-white hover:text-white text-[15px]"
                  >
                    بلاگ
                  </p>
                </div>
              </Link>
              <Link href="/teach">
                <div
                  className={`flex items-center p-2 cursor-pointer rounded-md transition duration-300 ${
                    selectedNav === "Teach" ? "font-heavy" : "font-medium"
                  }`}
                >
                  <p
                    onClick={() => handleNavClick("Teach")}
                    className="text-white hover:text-white text-[15px]"
                  >
                    آموزش
                  </p>
                </div>
              </Link>

              <Link href="/">
                <div
                  className={`flex items-center p-2 cursor-pointer rounded-md transition duration-300 ${
                    selectedNav === "Home" ? "font-heavy" : "font-medium"
                  }`}
                >
                  <p
                    onClick={() => handleNavClick("Home")}
                    className="text-white hover:text-white text-[15px]"
                  >
                    صفحه اصلی
                  </p>
                </div>
              </Link>
            </div>

            <Image
              src={Logo}
              alt="Logo"
              className="rounded-lg object-contain ml-10"
            />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
