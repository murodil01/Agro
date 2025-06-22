import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tooltip } from "antd";

const benefits = [
  {
    title: "Tabiiy Mahsulotlar",
    desc: "Dehqonlardan to'g'ridan-to'g'ri, kimyoviysiz mahsulotlar.",
    image: "https://cdn-icons-png.flaticon.com/512/2909/2909769.png",
  },
  {
    title: "Tez Yetkazib Berish",
    desc: "24 soat ichida manzilingizga yetkaziladi.",
    image: "https://cdn-icons-png.flaticon.com/512/1548/1548682.png",
  },
  {
    title: "Arzon Narxlar",
    desc: "Oraliq vositachilarsiz, raqobatbardosh narxlar.",
    image: "https://cdn-icons-png.flaticon.com/512/1907/1907558.png",
  },
  {
    title: "Ishonchli Xizmat",
    desc: "Sifat va xizmatda doimiy nazorat.",
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
  },
];

const Benefits = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-[#f9fafb] dark:bg-white border-y-2 border-[#46A358] py-30 flex flex-col items-center justify-center relative overflow-hidden px-4">
      <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-12 z-10 text-center">
        Bizning Afzalliklarimiz
      </h2>

      <div className="relative w-[450px] h-[450px] sm:w-[500px] sm:h-[500px] group">
        <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white w-28 h-28 flex items-center justify-center rounded-full text-center shadow-xl text-sm font-bold">
          AgroFresh
        </div>

        <div className="absolute inset-0 animate-spin-slow group-hover:[animation-play-state:paused]">
          {benefits.map((b, i) => {
            const angle = (360 / benefits.length) * i - 90;
            const radius = 180;
            const rad = (angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);

            return (
              <Tooltip title={b.title} key={i} placement="top">
                <div
                  data-aos="zoom-in"
                  className="absolute w-[180px] h-[180px] bg-[#46A358] border border-green-100 dark:border-[#46A358] rounded-[50%] shadow-lg p-4 text-center hover:scale-105 transition-all"
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-12 h-12 mx-auto mb-2 rounded-full shadow-sm"
                  />
                  <h3 className="text-white font-semibold text-sm">
                    {b.title}
                  </h3>
                  <p className="text-xs text-white mt-1">
                    {b.desc}
                  </p>
                </div>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
