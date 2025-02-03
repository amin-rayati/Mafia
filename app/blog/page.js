import Image from "next/image";
import blogTitle from "@/public/img/blogTitle.png";
import blog1 from "@/public/img/blog1.jpg";
import blog2 from "@/public/img/blog2.jpg";
import blog3 from "@/public/img/blog3.jpg";
import blog4 from "@/public/img/blog4.jpg";
import BlogCats from "@/components/Blog/BlogCats";

import BlogCard from "@/components/Blog/BlogCard";
import Pagination from "@/components/Blog/Pagination";
const page = () => {
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto my-5">
      <Image src={blogTitle} alt="blogTitle" className="mx-auto" />

      <BlogCats />

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

      <Pagination />
    </div>
  );
};

export default page;
