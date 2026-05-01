export default function Intro() {
  return (
    <section className="py-32 bg-white overflow-hidden relative z-30 text-zinc-900 antialiased">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 w-full">
          <img src="/images/intro.jpg" alt="기업 소개" className="w-full h-auto object-cover rounded-3xl shadow-2xl" />
        </div>

        <div className="flex-1 w-full flex flex-col justify-center break-keep">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight leading-tight">태일씨앤티 기업 소개</h2>

          <div className="space-y-8 text-zinc-800 text-xl md:text-2xl leading-relaxed font-bold">
            <p className="border-l-4 border-green-500 pl-6 italic">
              지난 10년동안 꾸준히 성장해 올 수 있었던 <br className="hidden md:block" />
              준비와 노력을 동력으로 창립 10주년을 맞이하였고,
            </p>
            <p className="border-l-4 border-transparent pl-6">
              끊임없는 도전을 통해 새로운 10년의 미래를 준비하는 <br className="hidden md:block" />
              더 나은 내일을 건설하는 기업이 되고자 합니다.
            </p>
          </div>

          <div className="mt-16">
            <button className="px-10 py-4 bg-zinc-900 text-white font-bold rounded-full hover:bg-black transition-all hover:scale-105 shadow-xl">
              자세히 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
