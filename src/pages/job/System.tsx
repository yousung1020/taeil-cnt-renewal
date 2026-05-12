export function System() {
  return (
    <div className="animate-fade-in-up space-y-32">
      {/* Title */}
      <div className="mb-16 border-b border-gray-900 pb-6">
        <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-1.5">인사제도</h3>
        <p className="text-gray-500 text-lg font-medium">태일씨앤티의 성장을 함께할 인재를 기다립니다.</p>
      </div>

      {/* 인재상 */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <div className="w-1.5 h-6 bg-green-600"></div>
           <h4 className="text-2xl font-bold text-gray-900 tracking-tight">인재상</h4>
        </div>
        
        {/* Enterprise Diagram for 인재상 */}
        <div className="border border-gray-200 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
           {/* Left Section */}
           <div className="flex-1 bg-white p-12 flex flex-col justify-between">
              <div>
                 <h5 className="text-green-600 font-bold text-sm tracking-widest mb-4">RESPONSIBILITY & GROWTH</h5>
                 <h4 className="text-2xl font-bold mb-6 text-gray-900">책임과 성장</h4>
              </div>
              <div className="space-y-8">
                 <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-gray-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    <p className="text-gray-700 leading-relaxed">책임과 배움을 반복하며 지속적으로 성장하는 인재</p>
                 </div>
                 <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-gray-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <p className="text-gray-700 leading-relaxed">공동체를 강화하여 어려움을 함께 극복하는 인재</p>
                 </div>
              </div>
           </div>

           {/* Right Section */}
           <div className="flex-1 bg-gray-50 p-12 flex flex-col justify-between">
              <div>
                 <h5 className="text-green-600 font-bold text-sm tracking-widest mb-4">HONESTY & COMMUNICATION</h5>
                 <h4 className="text-2xl font-bold mb-6 text-gray-900">정직과 소통</h4>
              </div>
              <div className="space-y-8">
                 <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-gray-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    <p className="text-gray-700 leading-relaxed">원칙에 따라 정직하게 소통하며 신뢰를 만드는 인재</p>
                 </div>
                 <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-gray-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    <p className="text-gray-700 leading-relaxed">관심있게 관찰하고 더 나은 방식을 찾아내는 인재</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 평가제도 */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <div className="w-1.5 h-6 bg-green-600"></div>
           <h4 className="text-2xl font-bold text-gray-900 tracking-tight">평가제도</h4>
        </div>
        
        <div className="border border-gray-200 flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-sm">
          {/* Left: System Definition */}
          <div className="flex-1 p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-center bg-white">
             <h4 className="font-bold text-sm tracking-[0.2em] text-green-600 uppercase mb-12 flex items-center gap-2">
               <span className="w-5 h-px bg-green-600"></span>
               System
             </h4>
             <div className="flex items-center justify-around gap-4">
                <div className="text-left group flex-1">
                   <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-green-50 transition-all duration-300 group-hover:scale-105 shadow-sm">
                      <svg className="w-10 h-10 text-gray-400 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                   </div>
                   <span className="block text-2xl font-bold text-gray-900 mb-1">업적평가</span>
                   <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 block">Performance</span>
                   <p className="text-[14px] text-gray-600 font-medium leading-relaxed">연간 성과 및 목표 달성도 측정</p>
                </div>
                
                <div className="text-green-500 text-3xl font-light mx-2 opacity-40">+</div>
                
                <div className="text-left group flex-1">
                   <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-green-50 transition-all duration-300 group-hover:scale-105 shadow-sm">
                      <svg className="w-10 h-10 text-gray-400 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                   </div>
                   <span className="block text-2xl font-bold text-gray-900 mb-1">역량평가</span>
                   <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 block">Competency</span>
                   <p className="text-[14px] text-gray-600 font-medium leading-relaxed">직무별 공통 및 전문 역량 진단</p>
                </div>
             </div>
          </div>

          {/* Right: Application */}
          <div className="flex-1 p-8 md:p-12 bg-gray-50/50 flex flex-col justify-center">
             <h4 className="font-bold text-sm tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center gap-2">
               <span className="w-4 h-px bg-gray-300"></span>
               Application
             </h4>
             <div className="grid gap-5">
                {[
                  { id: '01', title: '보상', desc: '평가결과 연계 보상 차등 지급', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
                  { id: '02', title: '승진', desc: '승진의 투명한 반영 및 우수인재 선발', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
                  { id: '03', title: '육성', desc: '평가 피드백 반영 및 필요 역량 개발 지원', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' }
                ].map((item) => (
                  <div key={item.id} className="flex items-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-green-200 hover:shadow-md transition-all duration-300 group">
                    <span className="w-12 text-green-600 font-bold text-lg shrink-0">{item.id}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <strong className="text-gray-900 font-bold text-lg">{item.title}</strong>
                        <svg className="w-5 h-5 text-green-500 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                      </div>
                      <span className="text-gray-600 text-[14px] font-medium leading-relaxed block">{item.desc}</span>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 보상제도 */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <div className="w-1.5 h-6 bg-green-600"></div>
           <h4 className="text-2xl font-bold text-gray-900 tracking-tight">보상제도</h4>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
           <div className="bg-white border border-gray-200 hover:border-green-200 rounded-2xl p-10 flex flex-col items-start text-left shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,160,0,0.08)] transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gray-100 group-hover:bg-green-500 transition-colors duration-300"></div>
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <span className="text-2xl font-bold text-green-600">₩</span>
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-2">기본급</h5>
              <p className="text-gray-700 font-medium">직급별 호봉 산정</p>
           </div>

           <div className="bg-white border border-gray-200 hover:border-green-200 rounded-2xl p-10 flex flex-col items-start text-left shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,160,0,0.08)] transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gray-100 group-hover:bg-green-500 transition-colors duration-300"></div>
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-2">제수당</h5>
              <p className="text-gray-700 font-medium leading-relaxed">현장수당, 자격증수당, 특근수당, 기타 수당 등</p>
           </div>

           <div className="bg-white border border-gray-200 hover:border-green-200 rounded-2xl p-10 flex flex-col items-start text-left shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,160,0,0.08)] transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gray-100 group-hover:bg-green-500 transition-colors duration-300"></div>
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-2">인센티브</h5>
              <p className="text-gray-700 font-medium">성과 기반 차등 지급</p>
           </div>
        </div>
      </section>
    </div>
  );
}