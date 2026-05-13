export function Vision() {
  return (
    <div className="animate-fade-in-up space-y-24 md:space-y-32">
      {/* Section Title */}
      <div className="mb-16 border-b border-gray-900 pb-6">
        <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-1.5">기술혁신 비전</h3>
        <p className="text-gray-500 text-lg font-medium">미래를 여는 혁신 기술로 새로운 가치를 창출합니다.</p>
      </div>

      {/* Hero Statement — 도시 야경 배경 */}
      <section className="relative rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40"></div>

        <div className="relative z-10 px-6 md:px-16 py-20 md:py-28 text-center text-white max-w-4xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl font-normal leading-loose tracking-tight text-white/90">
            <span className="font-bold text-white">(주)태일씨앤티</span>는 미래지향적 기술 혁신을 통하여
            <br className="hidden md:block"/>
            기술경쟁력을 확보하여 산업현장의 <span className="font-bold text-white">새로운 방향</span>을 개척하는
            <br className="hidden md:block"/>
            개척자로 자리매김할 것입니다.
          </p>
        </div>
      </section>

      {/* VISION — Challenge Innovation */}
      <section>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-1.5 h-8 bg-green-600"></div>
          <h4 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            VISION
          </h4>
        </div>

        <div className="w-full relative">
          {/* Enhanced Background Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-1/2 bg-green-100/40 rounded-full blur-[100px] -z-10"></div>
          
          <div className="bg-white/80 backdrop-blur-md rounded-[32px] overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            {/* Top: Glass Hero Section */}
            <div className="relative px-8 py-20 md:py-24 flex flex-col items-center text-center text-white overflow-hidden">
              {/* Semi-transparent Multi-stop Gradient to prevent banding */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-600/95 via-emerald-600/90 via-teal-600/85 to-teal-700/80 backdrop-blur-xl -z-10"></div>
              
              {/* Liquid decorative elements */}
              <div className="absolute top-[-50px] right-[-50px] w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[-40px] left-[-40px] w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-8 border border-white/20 shadow-xl mx-auto group-hover:scale-105 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h5 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4 drop-shadow-sm">
                  Challenge & Innovation
                </h5>
                <p className="text-white/90 font-bold tracking-[0.4em] uppercase text-xs md:text-sm">Strategic Future Excellence</p>
              </div>
            </div>

            {/* Bottom: Strategy Grid with fixed dividers */}
            <div className="grid md:grid-cols-2 divide-y divide-x-0 md:divide-x divide-gray-200 bg-white/50 border-t border-gray-200">
              {[
                { title: '기술경쟁력 확보', desc: '독자적인 신기술 개발 및 우수 특허 확보' },
                { title: '품질 만족 · 고객 만족', desc: '철저한 공정 관리와 시공 품질 극대화' },
                { title: '사업영역 다각화', desc: '미래 유망 산업으로의 전략적 진출' },
                { title: '시스템 고도화', desc: '디지털 트랜스포메이션을 통한 효율적 관리' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="px-10 py-12 hover:bg-green-50/40 transition-all duration-300 group cursor-default"
                >
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-green-700/40 font-black text-3xl leading-none tracking-tighter group-hover:text-green-600 transition-all duration-300">
                        0{idx + 1}
                      </span>
                      <h6 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">{item.title}</h6>
                    </div>
                    <p className="text-gray-700 text-[15px] leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 하단 설명 — 미래지향, 시스템, 유망기술 */}
      <section>
        <div className="space-y-12 md:space-y-16">
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
            <div key={idx} className="flex flex-col md:flex-row gap-3 md:gap-8 items-start">
              {/* 좌측 녹색 라벨 */}
              <div className="shrink-0 flex items-center gap-3 mt-1">
                <div className="w-1 h-8 bg-green-600 rounded-full"></div>
                <span className="text-green-600 font-bold text-sm tracking-widest whitespace-nowrap">0{idx + 1}</span>
              </div>

              {/* 우측 내용 */}
              <div className="flex-1 -mt-2 md:-mt-3">
                <h5 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {item.title}
                </h5>
                <p className="text-gray-800 leading-relaxed text-[15px] font-medium">
                  {item.desc}
                </p>
                {idx < 2 && <div className="mt-10 md:mt-14 h-px bg-gray-200"></div>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}