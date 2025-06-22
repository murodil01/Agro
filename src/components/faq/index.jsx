import { Collapse } from "antd";

const FAQ = () => {
  const items = [
    {
      key: "1",
      label: "Mahsulotlar qayerdan olinadi?",
      children: <p>Mahsulotlar bevosita O'zbekistonlik dehqonlardan olinadi.</p>,
    },
    {
      key: "2",
      label: "To'lov qanday amalga oshiriladi?",
      children: <p>To'lov onlayn yoki naqd shaklda amalga oshirilishi mumkin.</p>,
    },
    {
      key: "3",
      label: "Yetkazib berish qancha vaqt oladi?",
      children: <p>Odatda 24-48 soat ichida yetkazib beriladi.</p>,
    },
    {
      key: "4",
      label: "Qanday kafolat mavjud?",
      children: <p>Mahsulot sifatsiz bo'lsa, almashtirish yoki qaytarish imkoniyati bor.</p>,
    },
  ];

  return (
    <div className="bg-green-50 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        Tez-tez so'raladigan savollar
      </h2>
      <div className="max-w-3xl mx-auto">
        <Collapse accordion items={items} className="bg-white rounded-xl shadow" />
      </div>
    </div>
  );
};

export default FAQ;