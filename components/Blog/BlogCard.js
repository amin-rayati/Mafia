import { GoDotFill } from "react-icons/go";
import Link from "next/link";

const BlogCard = ({ img, title, text }) => {
  return (
    <div
      className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 bg-cover text-center rounded-[20px] pt-5 h-[400px] flex flex-col justify-between p-2"
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-[#2D2844B2] opacity-100 rounded-[10px] h-[60%] md:h-[65%]  p-2 mt-auto backdrop-blur-[10px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <p
              className="text-[#F8F8F8] text-[13px] lg:text-[10px]"
              style={{ direction: "rtl" }}
            >
              24 اردیبهشت 1403
            </p>

            <GoDotFill color="#F8F8F8" size={10} />

            <p
              className="text-[#F8F8F8] text-[13px] lg:text-[10px]"
              style={{ direction: "rtl" }}
            >
              5 دقیقه
            </p>
          </div>
          <div className="bg-[#C8BAFF26] px-2 py-1 rounded-full">
            <p className="text-[#B7B5EE] text-[13px] lg:text-[10px]">
              دسته بندی
            </p>
          </div>
        </div>
        <Link href="/blog/1">
          <p className="text-[20px] text-white font-fat my-5 text-right">
            {title}
          </p>
        </Link>
        <p
          className="text-white text-[14px] font-medium text-right"
          style={{ direction: "rtl" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
