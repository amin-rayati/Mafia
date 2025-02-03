import Image from "next/image";
import featureTitle from "@/public/img/featureTitle.png";
import rank from "@/public/img/rank.png";
import managment from "@/public/img/managment.png";
import competition from "@/public/img/competition.png";
import player from "@/public/img/player.png";
const Feature = () => {
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto my-20">
      <div className="w-[100%] lg:w-[50%] mx-auto">
        <Image
          src={featureTitle}
          className="mx-auto w-full"
          alt="featureTitle"
        />
        <p className="text-[#9795AB] mx-auto" style={{ direction: "rtl" }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنو.
        </p>
      </div>
      <div className="grid grid-cols-12 my-10 gap-5">
        <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 flex flex-col h-full w-[90%] sm:w-full mx-auto">
          <div className="bg-[#C8BAFF26] text-center rounded-[20px] pt-5 h-full flex flex-col justify-between">
            <p className="text-white text-[30px] font-fat text-right mt-5 mx-5">
              بازیکنان واقعی
            </p>
            <p className="text-white text-[15px] font-medium text-right mt-2 mr-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </p>
            <Image
              src={player}
              alt="player"
              className="w-full object-contain rounded-[20px]"
            />
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 flex flex-col h-full w-[90%] sm:w-full mx-auto">
          <div className="bg-[#C8BAFF26] text-center rounded-[20px] pt-5 h-full flex flex-col justify-between">
            <p className="text-white text-[30px] font-fat text-right mt-5 mx-5">
              رقابت صحیح و سالم
            </p>
            <p className="text-white text-[15px] font-medium text-right mt-2 mr-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </p>
            <Image
              src={competition}
              alt="competition"
              className="w-full object-contain rounded-[20px]"
            />
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 flex flex-col h-full w-[90%] sm:w-full mx-auto">
          <div className="bg-[#C8BAFF26] text-center rounded-[20px] pt-5 h-full flex flex-col justify-between">
            <p className="text-white text-[30px] font-fat text-right mt-5 mx-5">
              مدیریت بازی ها
            </p>
            <p className="text-white text-[15px] font-medium text-right mt-2 mr-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </p>
            <Image
              src={managment}
              alt="managment"
              className="w-full object-contain rounded-[20px]"
            />
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 flex flex-col h-full w-[90%]  sm:w-full mx-auto">
          <div className="bg-[#C8BAFF26] text-center rounded-[20px] pt-5 h-full flex flex-col justify-between">
            <p className="text-white text-[30px] font-fat text-right mt-5 mx-5">
              امتیاز دهی
            </p>
            <p className="text-white text-[15px] font-medium text-right mt-2 mr-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </p>
            <Image
              src={rank}
              alt="rank"
              className="w-full object-contain rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
