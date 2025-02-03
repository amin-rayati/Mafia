import Image from "next/image";
import teachImg from "@/public/img/teachImg.png";
import { FaUser } from "react-icons/fa6";
import Tabs from "@/components/Scenario/Tabs";

const page = () => {
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto my-5">
      <div>
        <div className="flex items-end justify-end gap-5 text-right">
          <div>
            <p className="text-[30px] text-white font-fat mb-5">اسم سناریو</p>
            <div className="flex gap-2 justify-end">
              <p className="text-[#9795AB]" style={{ direction: "rtl" }}>
                11 الی 15 نفر
              </p>
              <FaUser color="#9795AB" />
            </div>
          </div>
          <Image
            src={teachImg}
            alt="teachImg"
            className="w-24 h-24 rounded-[15px]"
          />
        </div>

        <p
          className="text-[#E8E6E7] text-[16px] mt-10"
          style={{ direction: "rtl", lineHeight: "30px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبدلورم
          ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
          طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردها
        </p>
      </div>
      <Tabs />
    </div>
  );
};

export default page;
