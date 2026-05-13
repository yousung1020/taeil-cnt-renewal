const slogans = [
  {
    english: "ONE",
    korean: "하나된 태일!",
  },
  {
    english: "INNOVATIVE",
    korean: "혁신적인 태일!",
  },
  {
    english: "FOREVER",
    korean: "백년대계 태일!",
  },
];

export function SloganGraphic() {
  return (
    <div className="w-full max-w-4xl text-white">
      <div className="grid gap-3 lg:grid-cols-3">
        {slogans.map((slogan) => (
          <div
            className="flex items-center gap-3 rounded-full border border-white/25 bg-white/10 p-2.5 shadow-xl shadow-black/20 backdrop-blur"
            key={slogan.english}
          >
            <div
              className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-emerald-500 to-teal-500 text-center font-black text-white shadow-lg shadow-emerald-950/20 ${
                slogan.english === "ONE"
                  ? "size-16 text-2xl sm:size-20 sm:text-lg"
                  : "size-16 text-[10px] sm:size-20 sm:text-xs"
              }`}
            >
              {slogan.english}
            </div>
            <p className="break-keep text-2xl font-black sm:text-xl">
              {slogan.korean}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
