const Stats = () => {
  const data = [
    { label: "Mamnun mijozlar", value: 500 },
    { label: "Faol dehqonlar", value: 120 },
    { label: "Mahsulot turlari", value: 75 },
    { label: "Yetkazib berish shaharlari", value: 30 },
  ];

  return (
    <div className="bg-white py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-10">Statistik ma'lumotlar</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {data.map((item, i) => (
          <div key={i} className="p-6 rounded-xl bg-green-50 shadow">
            <p className="text-3xl font-bold text-green-700">{item.value}+</p>
            <p className="text-sm text-gray-600 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
