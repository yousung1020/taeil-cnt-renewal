export function Vision() {
  return (
    <div className="animate-fade-in-up space-y-24 md:space-y-32">
      {/* Section Title */}
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
          기술혁신 비전
        </h3>
        <div className="flex justify-center gap-1">
          <div className="w-1.5 h-6 bg-green-600 rounded-full"></div>
          <div className="w-1.5 h-6 bg-green-500 rounded-full"></div>
          <div className="w-1.5 h-6 bg-green-400 rounded-full"></div>
        </div>
      </div>

      {/* Hero Statement — 도시 야경 배경 */}
      <section className="relative rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40"></div>

        <div className="relative z-10 px-6 md:px-16 py-20 md:py-28 text-center text-white max-w-4xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl font-light leading-loose tracking-tight">
            <span className="font-semibold">(주)태일씨앤티</span>는 미래지향적 기술 혁신을 통하여
            <br className="hidden md:block"/>
            기술경쟁력을 확보하여 산업현장의 <span className="font-semibold">새로운 방향</span>을 개척하는
            <br className="hidden md:block"/>
            개척자로 자리매김할 것입니다.
          </p>
        </div>
      </section>

      {/* VISION — Challenge Innovation */}
      <section>
        <h4 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10 tracking-tight">
          VISION
        </h4>

        <div className="max-w-3xl mx-auto">
          {/* Challenge Innovation 카드 */}
          <div className="relative rounded-t-2xl px-8 py-16 flex flex-col items-center text-center text-white overflow-hidden bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500">
            {/* Liquid blobs */}
            <div className="absolute top-[-30px] right-[-40px] w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-20px] left-[-30px] w-40 h-40 bg-emerald-400/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-300/10 rounded-full blur-2xl"></div>
            
            {/* Glass icon container */}
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/20">
              <svg className="w-9 h-9 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h5 className="relative z-10 text-2xl md:text-3xl font-bold tracking-tight leading-snug drop-shadow-sm">
              Challenge<br/>Innovation
            </h5>
          </div>

          {/* 비전 항목 리스트 */}
          <div className="border border-gray-200 border-t-0 rounded-b-2xl overflow-hidden divide-y divide-gray-200 bg-white">
            {['기술경쟁력 확보', '품질 만족 · 고객 만족', '사업영역 다각화', '시스템 고도화'].map((item, idx) => (
              <div
                key={idx}
                className="px-8 py-6 flex items-center gap-4 hover:bg-green-50/40 transition-colors group"
              >
                <span className="text-green-600 text-xs font-bold tracking-widest">0{idx + 1}</span>
                <div className="w-px h-4 bg-gray-200"></div>
                <span className="text-gray-800 font-medium group-hover:text-green-700 transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 하단 설명 — 미래지향, 시스템, 유망기술 */}
      <section>
        <div className="space-y-16 md:space-y-20">
          {[
            {
              title: '미래지향적 기술 개발을 통한 기술 경쟁력 확보',
              desc: '시장의 흐름과 미래전망을 바탕으로 끊임없는 건설기술상품 개발을 통하여 건설현장의 새로운 방향을 개척하고 기술 경쟁력을 확보하기 위하여 최선을 다하고 있습니다. 미래지향적 기술로 보다 나은 고객만족을 실현하도록 하겠습니다.',
            },
            {
              title: '시스템 고도화 및 계열사 운영을 통한 효율적인 업무 수행과 품질 만족 기여',
              desc: '기업 시스템 고도화를 지속적으로 진행하고 계열사 운영을 통한 전문적 업무 수행 조직 구성으로 보다 효율적인 업무 수행과 품질 만족에 기여하고 있습니다.',
            },
            {
              title: '미래 유망기술 확보를 통한 신규 사업분야 개척',
              desc: '미래 유망사업에 대한 다양한 분야로의 사업영역 확장을 위하여 계열사 (주)태경이노베이션을 설립하고 협력사와의 활발한 정보 교류와 신기술·신사업에 대한 발굴, 투자 사업을 진행하고 있습니다.',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              {/* 좌측 녹색 라벨 */}
              <div className="shrink-0 flex items-center gap-3">
                <div className="w-1 h-8 bg-green-600 rounded-full"></div>
                <span className="text-green-600 font-bold text-sm tracking-widest whitespace-nowrap">0{idx + 1}</span>
              </div>

              {/* 우측 내용 */}
              <div className="flex-1">
                <h5 className="text-lg md:text-xl font-bold text-gray-900 mb-4 leading-snug">
                  {item.title}
                </h5>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {item.desc}
                </p>
                {idx < 2 && <div className="mt-12 md:mt-16 h-px bg-gray-100"></div>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}