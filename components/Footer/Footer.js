"use client";

import { useState } from "react";

import Image from "next/image";
import smLogo from "@/public/img/smLogo.png";
import enamad from "@/public/img/enamad.png";

import { IoIosArrowDown } from "react-icons/io";
import {
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  const [isCustomerOpen, setIsCustomerOpen] = useState(false);
  const [isOneTouchOpen, setIsOneTouchOpen] = useState(false);

  return (
    <footer className="bg-[#C8BAFF26] rounded-[30px] p-4 w-[95%] mx-auto my-5 bottom-0">
      <div className="lg:mx-20 my-5">
        <div className="flex items-center justify-end">
          <Image src={smLogo} alt="smLogo" />
        </div>

        <div className="grid grid-cols-12 items-base justify-center mt-10 space-y-10 lg:space-y-0">
          <div className="col-span-12 order-4 lg:col-span-3 lg:order-1 items-center text-center lg:text-end space-y-3 my-5">
            <div className="flex justify-center lg:justify-start">
              <Image src={enamad} alt="enamad" />
            </div>
          </div>

          <div className="col-span-12 order-1 lg:col-span-3 lg:order-2 items-center justify-end text-end space-y-3 my-5">
            <p className="text-white font-heavy text-[22px]">
              ثبت‌نام در خبرنامه
            </p>

            <div className="relative w-full">
              <input
                className="px-5 py-4 bg-[#C8BAFF26] rounded-full text-[#9795AB] text-[20px] w-full"
                style={{ direction: "rtl" }}
                type="email"
                placeholder="ایمیل شما..."
              />
              <button className="absolute left-1 top-1 h-[88%] bg-[#FFE76C] text-black text-[18px] font-bold px-6 rounded-full">
                ثبت نام
              </button>
            </div>
          </div>

          <div className="col-span-12 order-3 lg:col-span-3 lg:order-3 items-center justify-end text-end space-y-3 my-5">
            <div
              className="flex items-center justify-between lg:justify-end cursor-pointer text-white font-heavy text-[22px] md:text-start"
              onClick={() => setIsCustomerOpen(!isCustomerOpen)}
            >
              <span
                className={`transition-transform transform ${
                  isCustomerOpen ? "rotate-180" : ""
                } lg:hidden`}
              >
                <IoIosArrowDown color="#9795AB" />
              </span>
              <p>خدمات مشتریان</p>
            </div>
            <div
              className={`space-y-3 text-[#9795AB] font-medium text-[20px] ${
                isCustomerOpen ? "block" : "hidden"
              } lg:block`}
            >
              <Link href="/faq">
                {" "}
                <p>سوالات متداول</p>
              </Link>
              <p>پشتیبانی</p>
              <Link href="/privacy">
                <p>حریم شخصی</p>
              </Link>

              <Link href="/terms">
                <p>شرایط و قوانین</p>
              </Link>
            </div>
            <div className="flex justify-center block lg:hidden">
              <div className="w-full h-[1px] bg-[#9795AB] my-2 mx-auto"></div>
            </div>
          </div>

          <div className="col-span-12 order-2 lg:col-span-3 lg:order-4 items-center justify-end text-end space-y-3 my-5">
            <div
              className="flex items-center justify-between lg:justify-end cursor-pointer text-white font-heavy text-[22px] md:text-start"
              onClick={() => setIsOneTouchOpen(!isOneTouchOpen)}
            >
              <span
                className={`transition-transform transform ${
                  isOneTouchOpen ? "rotate-180" : ""
                } lg:hidden`}
              >
                <IoIosArrowDown color="#9795AB" />
              </span>
              <p>وان تاچ</p>
            </div>
            <div
              className={`space-y-3 text-[#9795AB] font-medium text-[20px] ${
                isOneTouchOpen ? "block" : "hidden"
              } lg:block`}
            >
              <p>درباره ما</p>
              <p>ارتباط با ما</p>
            </div>
            <div className="flex justify-center block lg:hidden">
              <div className="w-full h-[1px] bg-[#9795AB] my-2 mx-auto"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center  lg:my-5">
          <div className="w-full h-[1px] bg-[#9795AB] my-2 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex space-x-3 items-center justify-center my-5">
            <FaInstagram color="white" size={25} />
            <FaTelegramPlane color="white" size={25} />
            <FaWhatsapp color="white" size={25} />
            <FaYoutube color="white" size={25} />
          </div>

          <div className="flex space-x-3 items-center justify-center my-5">
            <p className="text-[#9795AB]" style={{ direction: "rtl" }}>
              کليه حقوق اين سايت متعلق به شرکت اراموند می‌باشد.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
