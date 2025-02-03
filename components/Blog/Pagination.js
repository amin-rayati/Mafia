"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPageNumbers = () => {
    const range = [];
    const maxPagesToShow = 5;

    if (currentPage <= maxPagesToShow) {
      for (let i = 1; i <= maxPagesToShow; i++) {
        range.push(i);
      }
      range.push("...");
      range.push(totalPages);
    } else if (currentPage >= totalPages - maxPagesToShow) {
      range.push(1);
      range.push("...");
      for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      range.push(1);
      range.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        range.push(i);
      }
      range.push("...");
      range.push(totalPages);
    }

    return range;
  };

  return (
    <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-4 sm:gap-6">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className={`${
          currentPage === 1
            ? "bg-[#695C9B26] text-[#706D8F] border-[#706D8F]"
            : "bg-[#695C9B26] text-[#FFE76C] border-[#FFE76C]"
        } flex items-center gap-2 rounded-full p-3 sm:py-2 sm:px-4 border-[2px]`}
        disabled={currentPage === 1}
      >
        <FaArrowLeft />
        <p className="hidden sm:block">قبلی</p>
      </button>

      {/* Page Numbers */}
      <div className="flex gap-2 items-center flex-wrap justify-center">
        {getPageNumbers().map((item, index) => (
          <button
            key={index}
            onClick={() => item !== "..." && handlePageChange(item)}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${
              item === currentPage
                ? "bg-[#FFE76C] text-black "
                : item === "..."
                ? "bg-none text-white cursor-default"
                : "bg-none text-white"
            }`}
            disabled={item === "..." || item === currentPage}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className={`${
          currentPage === totalPages
            ? "bg-[#695C9B26] text-[#706D8F] border-[#706D8F]"
            : "bg-[#695C9B26] text-[#FFE76C] border-[#FFE76C]"
        } flex items-center gap-2 rounded-full p-3 sm:py-2 sm:px-4 border-[2px]`}
        disabled={currentPage === totalPages}
      >
        <p className="hidden sm:block">بعدی</p>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
