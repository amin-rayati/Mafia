"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

import Image from "next/image";
import mainTitle from "@/public/img/mainTitle.png";
import slide1 from "@/public/img/slide1.png";
import slide2 from "@/public/img/slide2.png";
import slide3 from "@/public/img/slide3.png";
import slide4 from "@/public/img/slide4.png";
import slide5 from "@/public/img/slide5.png";

const MainSlider = () => {
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto my-5">
      <div className="flex-col justify-center">
        <Image src={mainTitle} alt="mainTitle" className="w-full" />

        <div className="flex justify-center items-center">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 100,
              depth: 250,
              modifier: 1,
              slideShadows: true,
            }}
            initialSlide={2}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {/* Slide 1 */}
            <SwiperSlide className="!w-[350px]">
              <div className="bg-gradient-to-r from-[#C8BAFF40] to-[#C8BAFF40] text-center rounded-[20px] px-10 py-5 w-[350px] m-auto backdrop-blur-[40px]">
                <Image
                  className="mx-auto"
                  src={slide3}
                  alt="slide3"
                  width={200}
                  height={200}
                />
                <h2 className="text-white font-fat text-[30px] mt-6">مافیا</h2>
                <p className="text-white text-sm mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده
                </p>
                <button
                  className="mt-5 px-10 py-3 bg-[#FFE76C] text-black font-bold rounded-full"
                  style={{ direction: "rtl" }}
                >
                  بیا بازی!
                </button>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide className="!w-[350px]">
              <div className="bg-gradient-to-r from-[#C8BAFF40] to-[#C8BAFF40] text-center rounded-[20px] px-10 py-5 w-[350px] m-auto backdrop-blur-[40px]">
                <Image
                  className="mx-auto"
                  src={slide2}
                  alt="slide2"
                  width={200}
                  height={200}
                />
                <h2 className="text-white font-fat text-[30px] mt-6">مافیا</h2>
                <p className="text-white text-sm mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده
                </p>
                <button
                  className="mt-5 px-10 py-3 bg-[#FFE76C] text-black font-bold rounded-full"
                  style={{ direction: "rtl" }}
                >
                  بیا بازی!
                </button>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide className="!w-[350px]">
              <div className="bg-gradient-to-r from-[#C8BAFF40] to-[#C8BAFF40] text-center rounded-[20px] px-10 py-5 w-[350px] m-auto backdrop-blur-[40px]">
                <Image
                  className="mx-auto"
                  src={slide1}
                  alt="slide1"
                  width={200}
                  height={200}
                />
                <h2 className="text-white font-fat text-[30px] mt-6">مافیا</h2>
                <p className="text-white text-sm mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده
                </p>
                <button
                  className="mt-5 px-10 py-3 bg-[#FFE76C] text-black font-bold rounded-full"
                  style={{ direction: "rtl" }}
                >
                  بیا بازی!
                </button>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide className="!w-[350px]">
              <div className="bg-gradient-to-r from-[#C8BAFF40] to-[#C8BAFF40] text-center rounded-[20px] px-10 py-5 w-[350px] m-auto backdrop-blur-[40px]">
                <Image
                  className="mx-auto"
                  src={slide4}
                  alt="slide4"
                  width={200}
                  height={200}
                />
                <h2 className="text-white font-fat text-[30px] mt-6">مافیا</h2>
                <p className="text-white text-sm mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده
                </p>
                <button
                  className="mt-5 px-10 py-3 bg-[#FFE76C] text-black font-bold rounded-full"
                  style={{ direction: "rtl" }}
                >
                  بیا بازی!
                </button>
              </div>
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide className="!w-[350px]">
              <div className="bg-gradient-to-r from-[#C8BAFF40] to-[#C8BAFF40] text-center rounded-[20px] px-10 py-5 w-[350px] m-auto backdrop-blur-[40px]">
                <Image
                  className="mx-auto"
                  src={slide5}
                  alt="slide5"
                  width={200}
                  height={200}
                />
                <h2 className="text-white font-fat text-[30px] mt-6">مافیا</h2>
                <p className="text-white text-sm mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده
                </p>
                <button
                  className="mt-5 px-10 py-3 bg-[#FFE76C] text-black font-bold rounded-full"
                  style={{ direction: "rtl" }}
                >
                  بیا بازی!
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
