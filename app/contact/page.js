import Image from "next/image";
import contactUsTitle from "@/public/img/contactUsTitle.png";
import blog2 from "@/public/img/blog2.jpg";

const page = () => {
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto my-5">
      <Image src={contactUsTitle} alt="contactUsTitle" className="mx-auto" />

      <div className="grid grid-cols-12 gap-5 md:my-20">
        <div className="col-span-7 hidden md:block">
          <Image
            src={blog2}
            alt="blog2"
            className="rounded-[20px] h-[550px] object-cover"
          />
        </div>
        <div className="col-span-12 md:col-span-5 bg-[#C8BAFF26] rounded-[20px] p-5 md:h-[550px]">
          <form>
            <div className="flex flex-col items-right mt-10">
              <label
                htmlFor="otp"
                className="text-[15px] text-right font-medium text-[#9795AB]"
              >
                نام و نام خانوداگی
              </label>

              <input
                type="text"
                id="otp"
                className="bg-[#C8BAFF26] px-5 py-2 text-[#9795AB] text-right rounded-full focus:outline-none mt-3"
                placeholder="نام و نام خانوداگی"
              />
            </div>

            <div className="flex flex-col items-right mt-10">
              <label
                htmlFor="otp"
                className="text-[15px] text-right font-medium text-[#9795AB]"
              >
                ایمیل
              </label>

              <input
                type="text"
                id="otp"
                className="bg-[#C8BAFF26] px-5 py-2 text-[#9795AB] text-right rounded-full focus:outline-none mt-3"
                placeholder="ایمیل"
              />
            </div>

            <div className="flex flex-col items-right mt-10">
              <label
                htmlFor="otp"
                className="text-[15px] text-right font-medium text-[#9795AB]"
              >
                توضیحات
              </label>

              <textarea
                rows={5}
                type="text"
                id="otp"
                className="bg-[#C8BAFF26] px-5 py-2 text-[#9795AB] text-right rounded-[20px] focus:outline-none mt-3 resize-none overflow-hidden"
              />
            </div>

            <div className="my-5 text-right">
              <button className="bg-[#FFE76C] rounded-full py-3 px-5 text-black font-bold">
                ثبت
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
