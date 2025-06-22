const Testimonials = () => {
  const reviews = [
    {
      name: "Ali Dehqonov",
      text: "Mahsulotlarim tezda xaridorgacha yetib bordi. AgroFresh menga juda foydali."
    },
    {
      name: "Laylo Ismoilova",
      text: "Men sotib olgan sabzavotlar juda yangi va sifatli edi. Tavsiya qilaman!"
    },
    {
      name: "Sardor To'laganov",
      text: "Qulay va oson tizim. Narxlari ham maqbul."
    },
  ];

  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        Mijozlarimiz fikri
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="border rounded-xl p-6 shadow hover:shadow-md transition bg-green-50"
          >
            <p className="text-sm italic text-gray-700">“{r.text}”</p>
            <h4 className="mt-4 text-green-700 font-semibold">– {r.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;