import Image from "next/image";
import blogTitle from "@/public/img/blogTitle.png";
import blog1 from "@/public/img/blog1.jpg";
import blog2 from "@/public/img/blog2.jpg";
import blog3 from "@/public/img/blog3.jpg";
import blog4 from "@/public/img/blog4.jpg";
import relatedBlog from "@/public/img/relatedBlog.png";
import BlogCard from "../Blog/BlogCard";

const RelatedBlog = () => {
  return (
    <>
      <div className="flex flex-col justify-end items-end mt-20">
        <Image
          src={relatedBlog}
          alt="relatedBlog"
          className="order-1 sm:order-2"
        />
      </div>
      <div className="grid grid-cols-12 my-5 gap-5">
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
    </>
  );
};

export default RelatedBlog;
