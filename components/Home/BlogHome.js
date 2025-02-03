import Image from "next/image";
import blogTitle from "@/public/img/blogTitle.png";
import blog1 from "@/public/img/blog1.jpg";
import blog2 from "@/public/img/blog2.jpg";
import blog3 from "@/public/img/blog3.jpg";
import blog4 from "@/public/img/blog4.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import BlogCard from "../Blog/BlogCard";

const BlogHome = () => {
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto my-20">
      <div className="flex flex-col justify-end sm:flex-row sm:justify-between items-end">
        <button className="flex order-2 sm:order-1 items-center gap-2 bg-none text-[#FFE76C] rounded-full py-2 px-4 border-[2px] border-[#FFE76C] sm:mb-5">
          <FaArrowLeft />
          بقیه بلاگز
        </button>
        <Image src={blogTitle} alt="blogTitle" className="order-1 sm:order-2" />
      </div>
      <div className="grid grid-cols-12 my-10 gap-5">
        <BlogCard
          img={blog1}
          title={"تایتل بلاگ خیلی طولانی و الکی بلند و اینا، با مخلفات"}
          text={
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم مثلا هر چی که اینجا رو پر کنه!"
          }
        />
        <BlogCard
          img={blog2}
          title={"تایتل بلاگ خیلی طولانی و الکی بلند و اینا، با مخلفات"}
          text={
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم مثلا هر چی که اینجا رو پر کنه!"
          }
        />
        <BlogCard
          img={blog3}
          title={"تایتل بلاگ خیلی طولانی و الکی بلند و اینا، با مخلفات"}
          text={
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم مثلا هر چی که اینجا رو پر کنه!"
          }
        />
        <BlogCard
          img={blog4}
          title={"تایتل بلاگ خیلی طولانی و الکی بلند و اینا، با مخلفات"}
          text={
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم مثلا هر چی که اینجا رو پر کنه!"
          }
        />
      </div>
    </div>
  );
};

export default BlogHome;
