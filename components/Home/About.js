import Image from "next/image";
import aboutTitle from "@/public/img/aboutTitle.png";
import aboutImg from "@/public/img/aboutImg.png";

const About = () => {
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto my-20">
      <div className="grid grid-cols-12 md:gap-10">
        <div className="col-span-12 md:col-span-6">
          <Image src={aboutImg} alt="aboutImg" className="w-full" />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Image src={aboutTitle} alt="aboutTitle" className="w-full" />
          <p className="text-[#9795AB] " style={{ direction: "rtl" }}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنو.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
