"use client";
import { useState } from "react";
import Roles from "./Roles";

const Tabs = () => {
  const tabs = [
    { id: "independent", label: "نقش مستقل" },
    { id: "cityGroup", label: "گروه شهر" },
    { id: "mafiaGroup", label: "گروه مافیا" },
    { id: "lastMove", label: "حرکت‌های آخر" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <>
      <div className="relative my-10">
        <div className="overflow-x-auto  hide-scrollbar">
          <div className="flex justify-end min-w-max">
            {tabs
              .slice()
              .reverse()
              .map((tab) => (
                <div key={tab.id} className="relative">
                  <button
                    className={`p-2 md:px-4 mx-2 text-[16px] md:text-[18px] transition-colors duration-300 whitespace-nowrap ${
                      activeTab === tab.id
                        ? "text-white"
                        : "text-gray-500 hover:text-[#FFE76C]"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFE76C] z-10" />
                    )}
                  </button>
                </div>
              ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8BAFF26]" />
      </div>

      <div className="text-center text-white">
        {activeTab === "independent" ? <Roles /> : null}
      </div>
    </>
  );
};

export default Tabs;
