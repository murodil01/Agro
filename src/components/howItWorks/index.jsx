import { Tractor, Store, Truck, Smile } from "lucide-react";

const steps = [
  {
    icon: <Tractor className="w-10 h-10 text-green-600" />,
    title: "Dehqondan mahsulot",
    description: "Mahsulotlar bevosita fermerlar tomonidan yetishtiriladi va platformaga joylanadi.",
  },
  {
    icon: <Store className="w-10 h-10 text-green-600" />,
    title: "Platformada e'lon",
    description: "Dehqonlar o'z mahsulotlarini tizimga joylab, narxini belgilaydi.",
  },
  {
    icon: <Truck className="w-10 h-10 text-green-600" />,
    title: "Logistika va yetkazib berish",
    description: "Buyurtma berilgan mahsulotlar bir necha soat ichida xaridorga yetkaziladi.",
  },
  {
    icon: <Smile className="w-10 h-10 text-green-600" />,
    title: "Xaridor mamnunligi",
    description: "Yangi, sog'lom va arzon mahsulotlar xaridorga bevosita etkaziladi.",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        Bizning platforma qanday ishlaydi?
      </h2>
      <div className="grid gap-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-green-50 rounded-xl p-6 text-center shadow hover:shadow-lg transition-all"
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
