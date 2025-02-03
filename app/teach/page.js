import Image from "next/image";
import teachTitle from "@/public/img/teachTitle.png";
import teachImg from "@/public/img/teachImg.png";
import TeachCats from "@/components/Teach/TeachCats";
import { FaUser } from "react-icons/fa6";
import Link from "next/link";
const page = () => {
  const gameModes = [
    { title: "تکاور", players: "11 الی 17 نفر", link: "تکاور" },
    { title: "کلاسیک پیشرفته", players: "11 الی 15 نفر", link: "کلاسیک" },
    { title: "کلاسیک", players: "11 الی 15 نفر", link: "کلاسیک" },
    {
      title: "پدرخوانده: شرلوک هولمز",
      players: "11 الی 15 نفر",
      link: "شرلوک",
    },
    { title: "پدرخوانده: جک اسپارو", players: "11 الی 15 نفر", link: "اسپارو" },
    {
      title: "پدرخوانده: نوستراداموس",
      players: "11 الی 15 نفر",
      link: "نوستراداموس",
    },
    { title: "اپیک", players: "11 الی 15 نفر", link: "اپیک" },
    { title: "میتیک", players: "11 الی 15 نفر", link: "میتیک" },
  ];
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto my-5">
      <Image src={teachTitle} alt="teachTitle" className="mx-auto" />
      <TeachCats />

      <div className="grid grid-cols-12 gap-4 my-20">
        {gameModes.map((e, index) => {
          return (
            <div
              key={index}
              className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#C8BAFF26] rounded-[20px] p-4"
            >
              <Link href={`/teach/${e.link}`}>
                <div className="flex items-end justify-end gap-5 text-right">
                  <div>
                    <p className="text-[25px] text-white font-fat">{e.title}</p>
                    <div className="flex gap-2 justify-end">
                      <p
                        className="text-[#9795AB]"
                        style={{ direction: "rtl" }}
                      >
                        {e.players}
                      </p>
                      <FaUser color="#9795AB" />
                    </div>
                  </div>
                  <Image
                    src={teachImg}
                    alt="teachImg"
                    className="w-16 h-16 rounded-[15px]"
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
