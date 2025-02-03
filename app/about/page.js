import Image from "next/image";
import aboutUsTitle from "@/public/img/aboutUsTitle.png";
import blog1 from "@/public/img/blog1.jpg";
import blog2 from "@/public/img/blog2.jpg";
import blog3 from "@/public/img/blog3.jpg";
const page = () => {
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto my-5">
      <Image src={aboutUsTitle} alt="aboutUsTitle" className="mx-auto" />

      <div className="grid grid-cols-12 my-5 gap-5">
        <div className="col-span-12 md:col-span-6 p-5 rounded-[20px] bg-[#C8BAFF26]">
          <div className="flex justify-end gap-3 items-end">
            <div className="text-right">
              <p className="text-[#FFE76C]">هدف ما</p>
              <p className="text-[25px] text-white font-fat">عنوان عنوان</p>
            </div>
            <Image src={blog1} alt="blog1" className="w-16 h-16 rounded-full" />
          </div>

          <p
            className="mt-5 text-[#9795AB]"
            style={{ direction: "rtl", lineHeight: "30px" }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
            با استفاده از طراحان گرافیک است
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 p-5 rounded-[20px] bg-[#C8BAFF26]">
          <div className="flex justify-end gap-3 items-end">
            <div className="text-right">
              <p className="text-[#FFE76C]">هدف ما</p>
              <p className="text-[25px] text-white font-fat">عنوان عنوان</p>
            </div>
            <Image src={blog1} alt="blog1" className="w-16 h-16 rounded-full" />
          </div>

          <p
            className="mt-5 text-[#9795AB]"
            style={{ direction: "rtl", lineHeight: "30px" }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
            با استفاده از طراحان گرافیک است
          </p>
        </div>
        <div className="col-span-12  p-5 rounded-[20px] bg-[#C8BAFF26]">
          <div className="flex justify-end gap-3 items-end">
            <div className="text-right">
              <p className="text-[#FFE76C]">هدف ما</p>
              <p className="text-[25px] text-white font-fat">عنوان عنوان</p>
            </div>
            <Image src={blog1} alt="blog1" className="w-16 h-16 rounded-full" />
          </div>

          <p
            className="mt-5 text-[#9795AB]"
            style={{ direction: "rtl", lineHeight: "30px" }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
            با استفاده از طراحان گرافیک است
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
