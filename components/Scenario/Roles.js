"use client";
import { useState } from "react";
import Image from "next/image";
import blog1 from "@/public/img/blog1.jpg";

const Roles = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* leftSide */}
      <div className="col-span-12 order-2 md:col-span-10 md:order-1 bg-[#C8BAFF26] rounded-[30px] p-4 ">
        <div className="grid grid-cols-12 gap-5">
          {/* text */}
          <div className="col-span-12 order-2 md:col-span-9 md:order-1">
            <div className="flex gap-2 items-center justify-end">
              <p className="bg-[#F5C82A4D] text-white px-4 py-1 rounded-full text-[12px]">
                مستقل
              </p>
              <p className="text-white font-fat text-[25px]">زودیاک</p>
            </div>
            {/* morningAbility */}
            <div className="text-right">
              <p
                className="text-white text-[18px] mt-5 font-heavy "
                style={{ direction: "rtl", lineHeight: "28px" }}
              >
                توانایی صبح :
              </p>
              <p
                className="text-[#E8E6E7] text-[15px] mt-4"
                style={{ direction: "rtl", lineHeight: "30px" }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد
              </p>
            </div>
            {/* nightAbility */}
            <div className="text-right">
              <p
                className="text-white text-[18px] mt-5 font-heavy"
                style={{ direction: "rtl", lineHeight: "28px" }}
              >
                توانایی شب :
              </p>
              <p
                className="text-[#E8E6E7] text-[15px] mt-4"
                style={{ direction: "rtl", lineHeight: "30px" }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد
              </p>
            </div>
            {/* sterategy */}
            <div className="text-right">
              <p
                className="text-white text-[18px] mt-5 font-heavy"
                style={{ direction: "rtl", lineHeight: "28px" }}
              >
                استراتژی :
              </p>
              <p
                className="text-[#E8E6E7] text-[15px] mt-4"
                style={{ direction: "rtl", lineHeight: "30px" }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="col-span-12 order-1 md:col-span-3 md:order-2">
            <Image
              src={blog1}
              alt="blog1"
              className="rounded-[30px] md:rounded-[15px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* rightSide */}
      <div className="col-span-12 order-1 md:col-span-2 md:order-2">
        <div className="flex flex-wrap flex-row-reverse gap-2 items-center">
          <div
            className="flex justify-end items-center gap-3 rounded-full pl-3 pr-2 py-2 bg-[#FFE76C3D] border-[1px] border-[#FFE76C]"
            style={{ width: "fit-content" }}
          >
            <p className="text-white text-[18px]">زودیاک</p>
            <Image
              src={blog1}
              alt="blog1"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div
            className="flex justify-end items-center gap-3 rounded-full pl-3 pr-2 py-2 bg-[#C8BAFF26]"
            style={{ width: "fit-content" }}
          >
            <p className="text-white text-[18px]">جوکر</p>
            <Image
              src={blog1}
              alt="blog1"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div
            className="flex justify-end items-center gap-3 rounded-full pl-3 pr-2 py-2 bg-[#C8BAFF26]"
            style={{ width: "fit-content" }}
          >
            <p className="text-white text-[18px]">جوکر</p>
            <Image
              src={blog1}
              alt="blog1"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div
            className="flex justify-end items-center gap-3 rounded-full pl-3 pr-2 py-2 bg-[#C8BAFF26]"
            style={{ width: "fit-content" }}
          >
            <p className="text-white text-[18px]">جوکر</p>
            <Image
              src={blog1}
              alt="blog1"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div
            className="flex justify-end items-center gap-3 rounded-full pl-3 pr-2 py-2 bg-[#C8BAFF26]"
            style={{ width: "fit-content" }}
          >
            <p className="text-white text-[18px]">جوکر</p>
            <Image
              src={blog1}
              alt="blog1"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div
            className="flex justify-end items-center gap-3 rounded-full pl-3 pr-2 py-2 bg-[#C8BAFF26]"
            style={{ width: "fit-content" }}
          >
            <p className="text-white text-[18px]">جوکر</p>
            <Image
              src={blog1}
              alt="blog1"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
