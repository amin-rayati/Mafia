"use client";

import { useState } from "react";
import { GoDotFill } from "react-icons/go";
const Cats = () => {
  const [selected, setSelected] = useState(null);

  const categories = [
    { id: 1, label: "مافیا", style: "bg-[#FFE76C3D] text-[#FFE76C]" },
    { id: 2, label: "شطرنج" },
    { id: 3, label: "منچ" },
    { id: 4, label: "اسم و فامیل" },
    { id: 5, label: "مار و پله" },
  ];
  return (
    <div className="flex flex-wrap flex-row-reverse gap-2 w-[100%] lg:w-[50%] mx-auto justify-start sm:justify-center items-center">
      {categories.map((item) => (
        <div className="items-center flex gap-2" key={item.id}>
          <GoDotFill
            className={selected === item.id ? "block" : "hidden"}
            color="#9795AB"
            size={10}
          />
          <div
            onClick={() => setSelected(item.id)}
            className={`px-2 py-1 rounded-full cursor-pointer ${
              selected === item.id
                ? "bg-[#FFE76C3D] text-[#FFE76C]"
                : "bg-[#C8BAFF26] text-[#9795AB]"
            }`}
          >
            <p className="text-[15px]">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cats;
