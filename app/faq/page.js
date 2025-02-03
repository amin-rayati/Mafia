import Image from "next/image";
import faqTitle from "@/public/img/faqTitle.png";
import Questions from "@/components/Faq/Questions";
const page = () => {
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto my-5">
      <Image src={faqTitle} alt="faqTitle" className="mx-auto" />
      <p className="w-full lg:w-3/4 lg:mx-auto text-[#E8E6E7] my-5 text-[18px] text-center">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </p>
      <div className=" w-full lg:w-3/4 lg:mx-auto text-center">
        <button
          className="mt-5 px-10 py-3 bg-[#FFE76C] text-black font-bold rounded-full"
          style={{ direction: "rtl" }}
        >
          با ما در تماس باش!
        </button>
      </div>
      <Questions />
    </div>
  );
};

export default page;
