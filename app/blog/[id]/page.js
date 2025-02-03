import { HiShare } from "react-icons/hi";
import calender1 from "@/public/img/Calendar.png";
import clock from "@/public/img/Time.png";
import Image from "next/image";
import blog1 from "@/public/img/blog1.jpg";
import blog2 from "@/public/img/blog2.jpg";
import blog3 from "@/public/img/blog3.jpg";
import blog4 from "@/public/img/blog4.jpg";
import RelatedBlog from "@/components/Blog/RelatedBlog";
const page = () => {
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto my-20">
      <p className="text-white text-right font-bold text-[25px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      </p>

      <div className="flex items-center justify-end gap-2 my-5 ">
        <div className="flex items-center gap-2">
          <p className="text-[#9795AB]" style={{ direction: "rtl" }}>
            10دقیقه زمان مطالعه
          </p>
          <Image src={clock} alt="clock" />
        </div>

        <div className="flex items-center gap-2">
          <p className="text-[#9795AB]" style={{ direction: "rtl" }}>
            1 بهمن 1402
          </p>
          <Image src={calender1} alt="calender1" />
        </div>
      </div>

      <div className="flex items-center justify-end ">
        <div
          className="p-2 rounded-full bg-[#695C9B26]"
          style={{ width: "fit-content" }}
        >
          <HiShare color="white" />
        </div>
      </div>

      <Image
        src={blog1}
        alt="blog1"
        className="rounded-[20px] my-10 h-[500px] w-full object-cover"
      />
      <div>
        <p
          className="text-[#E8E6E7] text-[13px]"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>
      </div>

      <div>
        <p
          className="text-white text-[18px] mt-5 font-heavy"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <p
          className="text-[#E8E6E7] text-[13px]"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>
      </div>
      <div>
        <p
          className="text-white text-[18px] mt-5 font-heavy"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <p
          className="text-[#E8E6E7] text-[13px]"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>
      </div>

      <div className="w-[95%] md:w-[90%]">
        <p
          className="text-white text-[18px] mt-5 font-heavy"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          تیتر
        </p>
        <p
          className="text-[#E8E6E7] text-[13px]"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>
      </div>
      <div className="w-[95%] md:w-[90%]">
        <p
          className="text-white text-[18px] mt-5 font-heavy"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          تیتر
        </p>
        <p
          className="text-[#E8E6E7] text-[13px]"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>
      </div>

      <div>
        <p
          className="text-white text-[18px] mt-5 font-heavy"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <p
          className="text-[#E8E6E7] text-[13px]"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5 my-10">
        <div className="col-span-12 md:col-span-6">
          <Image
            src={blog2}
            alt="blog2"
            className="rounded-[20px] h-[400px] w-full object-cover"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Image
            src={blog3}
            alt="blog3"
            className="rounded-[20px] h-[400px] w-full object-cover"
          />
        </div>
      </div>

      <div>
        <p
          className="text-white text-[18px] mt-5 font-heavy"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <p
          className="text-[#E8E6E7] text-[13px]"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>
      </div>
      <div>
        <p
          className="text-white text-[18px] mt-5 font-heavy"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <p
          className="text-[#E8E6E7] text-[13px]"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>
      </div>

      <Image
        src={blog4}
        alt="blog4"
        className="rounded-[20px] my-10 h-[400px] w-full object-cover"
      />

      <div>
        <p
          className="text-white text-[18px] mt-5 font-heavy"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <p
          className="text-[#E8E6E7] text-[13px]"
          style={{ direction: "rtl", lineHeight: "28px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>
      </div>

      <RelatedBlog />
    </div>
  );
};

export default page;
