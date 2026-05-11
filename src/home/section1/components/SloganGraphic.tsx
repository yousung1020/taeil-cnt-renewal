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
    <div className="w-full max-w-5xl text-white">
      <div className="grid gap-4 lg:grid-cols-3">
        {slogans.map((slogan) => (
          <div
            className="flex items-center gap-4 rounded-full border border-white/25 bg-white/10 p-3 shadow-xl shadow-black/20 backdrop-blur"
            key={slogan.english}
          >
            <div className="flex size-18 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-emerald-500 to-teal-500 text-center text-xs font-black text-white shadow-lg shadow-emerald-950/20 sm:size-22">
              {slogan.english}
            </div>
            <p className="break-keep text-4xl font-black sm:text-2xl">
              {slogan.korean}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
