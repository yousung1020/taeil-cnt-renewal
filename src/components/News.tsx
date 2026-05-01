export default function News() {
  const newsItems = [
    "[홍보] 삼성물산 공사수행 역량평가 수행우수사 선정, 최우수상 수상",
    "[홍보] 한국청소년육성회 금천지구회 모범청소년 장학금 수여 행사 소식",
    "[홍보] 김경수 대표님 한국산업단지경영자연합회 서울 6대 회장 취임"
  ];

  return (
    <section className="py-32 bg-[#f8f9fb] overflow-hidden relative z-30 text-zinc-900 antialiased">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 w-full">
          <img src="/images/cropped_news.jpg" alt="건설 현장 일러스트" className="w-full h-auto object-cover shadow-2xl rounded-2xl" />
        </div>

        <div className="flex-1 w-full break-keep">
          <div className="flex items-center gap-2 mb-8 border-b-2 border-zinc-900 pb-4">
            <h2 className="text-4xl font-extrabold tracking-tight">NEWS</h2>
            <button className="w-6 h-6 border border-zinc-400 text-zinc-500 hover:text-black hover:border-black flex items-center justify-center font-bold pb-1 ml-2 transition-colors">
              +
            </button>
          </div>

          <ul className="space-y-6">
            {newsItems.map((item, idx) => (
              <li
                key={idx}
                className="text-lg text-zinc-800 hover:text-black cursor-pointer truncate font-bold transition-colors border-b border-zinc-200 pb-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
