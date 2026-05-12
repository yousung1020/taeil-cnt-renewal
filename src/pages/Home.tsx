import { AnimatedSection } from '../components/AnimatedSection';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 transition-transform duration-[10s] hover:scale-105"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000)' }}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <AnimatedSection className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pt-20">
          <p className="text-sm md:text-base text-green-400 mb-6 font-medium tracking-[0.2em] uppercase">Taeil Construction & Technical</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            오늘의 안전은 어제로부터,<br />내일의 안전은 오늘로부터.
          </h2>
          <div className="w-20 h-1 bg-green-500 mt-8 mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
            끊임없는 도전을 통해 새로운 미래를 준비하는 건설의 기준.
          </p>
        </AnimatedSection>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-8 md:left-16 text-white opacity-50 flex items-center gap-4">
          <span className="text-xs tracking-widest uppercase rotate-90 origin-left translate-x-2">Scroll</span>
          <div className="w-px h-16 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[slideDown_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <AnimatedSection className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <h3 className="text-4xl font-bold tracking-tight mb-8 text-gray-900">기업소식</h3>
              <p className="text-gray-500 mb-10 text-lg font-light leading-relaxed">태일씨앤티의 최신 소식과<br/>다양한 활동을 전해드립니다.</p>
              <button className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase border-b border-black pb-1 hover:text-green-600 hover:border-green-600 transition-colors">
                View All News
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-0 border-t border-gray-200">
              {[
                { title: '[홍보] 삼성물산 공사수행 역량평가 수행우수사 선정, 최우수상 수상', date: '2026.04.12' },
                { title: '[홍보] 한국청소년육성회 금천지구회 모범청소년 장학금 수여 행사 소식', date: '2026.03.28' },
                { title: '[홍보] 김경수 대표님 한국산업단지경영자연합회 서울 6대 회장 취임', date: '2026.02.15' }
              ].map((news, idx) => (
                <li key={idx} className="group border-b border-gray-200">
                  <a href="#" className="flex flex-col md:flex-row md:items-center justify-between py-8 gap-4 transition-transform duration-300 hover:translate-x-4">
                    <p className="text-xl font-medium text-gray-800 leading-snug group-hover:text-green-600 transition-colors flex-1 pr-8">
                      {news.title}
                    </p>
                    <p className="text-sm text-gray-400 tracking-wider font-light whitespace-nowrap shrink-0">{news.date}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </section>

      {/* Order Status Section */}
      <section className="bg-[#0a0a0a] text-white py-32 px-8 md:px-16 relative overflow-hidden">
        <AnimatedSection className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 relative aspect-[4/3] overflow-hidden group">
             <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
               alt="용인 Cluster 1기 OBL" 
               className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110 opacity-80 group-hover:opacity-100"
             />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-green-500 text-sm font-bold tracking-widest uppercase mb-4">Project Status</p>
            <h3 className="text-4xl lg:text-5xl font-bold tracking-tight mb-12 leading-tight">주요 수주현황</h3>
            <ul className="space-y-6 text-gray-400 text-lg font-light">
              {[
                '다이소 세종 온라인센터',
                '용인 Cluster 1기 OBL',
                'Westin Seoul Parnas 리모델링공사',
                '용인 Cluster 1기 공동구',
                '한국일보용산사옥 신축공사',
                '디지털 엠파이어 평촌 비즈밸리 신축공사'
              ].map((item, idx) => (
                <li key={idx} className="group flex items-center cursor-pointer">
                  <span className="w-8 h-px bg-gray-700 mr-6 transition-all duration-300 group-hover:w-16 group-hover:bg-green-500"></span>
                  <span className="transition-colors duration-300 group-hover:text-white group-hover:font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </section>

      {/* Company Intro Section */}
      <section className="py-40 px-8 max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center font-bold text-xl mx-auto mb-10">T</div>
          <h3 className="text-3xl md:text-5xl font-bold mb-12 text-gray-900 tracking-tight leading-tight">신뢰와 기술로 짓는<br/>더 나은 내일</h3>
          <p className="text-gray-500 leading-loose text-lg md:text-2xl font-light">
            지난 10년동안 꾸준히 성장해 올 수 있었던 준비와 노력을 동력으로,<br className="hidden md:block"/>
            끊임없는 도전을 통해 새로운 10년의 미래를 준비하는<br className="hidden md:block"/>
            대한민국 건설의 든든한 파트너가 되겠습니다.
          </p>
        </AnimatedSection>
      </section>
    </>
  );
}