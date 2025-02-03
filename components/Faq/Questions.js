"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Questions = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const questions = [
    {
      title: "چطور می‌توانم در بازی مافیا ثبت‌نام کنم؟",
      answer:
        "برای ثبت‌نام در بازی مافیا، کافیست اپلیکیشن را نصب کرده و از طریق فرم ثبت‌نام مشخصات خود را وارد کنید. همچنین می‌توانید با حساب کاربری گوگل یا شبکه‌های اجتماعی به سرعت ثبت‌نام کنید.",
    },
    {
      title: "چگونه نقش‌ها در بازی مافیا تعیین می‌شوند؟",
      answer:
        "نقش‌ها در بازی مافیا به صورت تصادفی توسط سیستم توزیع می‌شوند. شما می‌توانید نقش شهروند یا مافیا باشید و هرکدام وظایف خاص خود را دارند.",
    },
    {
      title: "آیا می‌توانم با دوستانم بازی کنم؟",
      answer:
        "بله، شما می‌توانید دوستان خود را به یک لابی خصوصی دعوت کنید و به صورت گروهی از بازی لذت ببرید. همچنین امکان چت گروهی در طول بازی فراهم است.",
    },
    {
      title: "آیا بازی مافیا به صورت آنلاین است؟",
      answer:
        "بله، بازی مافیا کاملاً آنلاین است و شما می‌توانید با بازیکنان دیگر از سراسر جهان بازی کنید یا در مسابقات ویژه شرکت کنید.",
    },
    {
      title: "قوانین بازی مافیا چگونه است؟",
      answer:
        "قوانین بازی مافیا به شما کمک می‌کنند که تجربه‌ی منصفانه و جذابی داشته باشید. در اپلیکیشن بخشی به توضیح قوانین اختصاص داده شده است که می‌توانید پیش از شروع بازی آن را مطالعه کنید.",
    },
    {
      title: "آیا بازی مافیا رایگان است؟",
      answer:
        "بله، بازی مافیا رایگان است اما برخی از ویژگی‌ها و آیتم‌های ویژه ممکن است با پرداخت درون‌برنامه‌ای در دسترس باشند.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(index === openQuestionIndex ? null : index);
  };
  return (
    <div className="mt-10 justify-center mb-20">
      {questions.map((question, index) => (
        <div
          key={index}
          className={`${
            openQuestionIndex === index ? "bg-[#FFE76C3D]" : "bg-[#C8BAFF26]"
          }  w-full lg:w-3/4 lg:mx-auto rounded-[20px] mt-5 p-4`}
        >
          <div>
            <button
              className="w-full flex justify-between text-end items-center p-4 text-left text-gray-800"
              onClick={() => toggleQuestion(index)}
            >
              <span
                className={`transform transition-transform duration-200 ${
                  openQuestionIndex === index ? "rotate-180" : "rotate-0"
                } `}
              >
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded">
                  {openQuestionIndex === index ? (
                    <FaMinus color="white" size={20} />
                  ) : (
                    <FaPlus color="white" size={20} />
                  )}
                </div>
              </span>

              <div className="flex gap-2">
                <span className="text-[18px] text-white lg:text-[25px] leading-[25px] font-bold">
                  {question.title}
                </span>
                <span className="text-[18px] text-white lg:text-[25px] leading-[25px] font-bold">
                  .{index + 1}
                </span>
              </div>
            </button>

            {openQuestionIndex === index && (
              <>
                <div
                  className="px-4 pb-4 text-[16px] text-white lg:text-[20px] text-right mt-5 font-medium leading-[30px]"
                  style={{ direction: "rtl" }}
                >
                  {question.answer}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Questions;
