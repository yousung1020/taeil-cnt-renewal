export function System() {
  return (
    <div className="animate-fade-in-up space-y-32">
      {/* Title */}
      <div className="mb-16 border-b border-gray-900 pb-6 flex items-end justify-between">
        <h3 className="text-3xl font-bold text-gray-900 tracking-tight">인사제도</h3>
        <span className="text-sm font-medium text-green-600 tracking-widest uppercase">HR System</span>
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
                    <p className="text-gray-600 font-light leading-relaxed">책임과 배움을 반복하며 지속적으로 성장하는 인재</p>
                 </div>
                 <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-gray-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <p className="text-gray-600 font-light leading-relaxed">공동체를 강화하여 어려움을 함께 극복하는 인재</p>
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
                    <p className="text-gray-600 font-light leading-relaxed">원칙에 따라 정직하게 소통하며 신뢰를 만드는 인재</p>
                 </div>
                 <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-gray-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    <p className="text-gray-600 font-light leading-relaxed">관심있게 관찰하고 더 나은 방식을 찾아내는 인재</p>
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
        
        <div className="border border-gray-200 flex flex-col lg:flex-row bg-white">
          <div className="flex-1 p-12 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-center">
             <h4 className="font-bold text-sm tracking-widest text-gray-400 uppercase mb-8">System</h4>
             <div className="flex items-center justify-between">
                <div className="text-center">
                   <span className="block text-2xl font-bold text-gray-900 mb-2">업적평가</span>
                   <span className="text-sm font-light text-gray-500 uppercase">Performance</span>
                </div>
                <div className="text-green-500 font-light mx-4">+</div>
                <div className="text-center">
                   <span className="block text-2xl font-bold text-gray-900 mb-2">역량평가</span>
                   <span className="text-sm font-light text-gray-500 uppercase">Competency</span>
                </div>
             </div>
          </div>

          <div className="flex-1 p-12 bg-gray-50 flex flex-col justify-center">
             <h4 className="font-bold text-sm tracking-widest text-gray-400 uppercase mb-8">Application</h4>
             <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="w-6 text-green-600 font-bold mr-4 shrink-0">01</span>
                  <div>
                    <strong className="text-gray-900 font-medium block mb-1">보상</strong>
                    <span className="text-gray-600 font-light text-sm">평가결과 연계 보상 차등 지급</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 text-green-600 font-bold mr-4 shrink-0">02</span>
                  <div>
                    <strong className="text-gray-900 font-medium block mb-1">승진</strong>
                    <span className="text-gray-600 font-light text-sm">승진의 투명한 반영 및 우수인재 선발</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 text-green-600 font-bold mr-4 shrink-0">03</span>
                  <div>
                    <strong className="text-gray-900 font-medium block mb-1">육성</strong>
                    <span className="text-gray-600 font-light text-sm">평가 피드백 반영 및 필요 역량 개발 지원</span>
                  </div>
                </li>
             </ul>
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
           <div className="bg-white border border-gray-100 rounded-2xl p-10 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <span className="text-2xl font-bold text-green-600">₩</span>
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-3">기본급</h5>
              <p className="text-sm text-gray-500 font-light">(직급별 호봉 산정)</p>
           </div>

           <div className="bg-white border border-gray-100 rounded-2xl p-10 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-3">제수당</h5>
              <p className="text-sm text-gray-500 font-light leading-relaxed">(현장수당, 자격증수당,<br/>특근수당, 기타 수당 등)</p>
           </div>

           <div className="bg-white border border-green-200 rounded-2xl p-10 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,160,0,0.08)] hover:shadow-[0_10px_30px_rgba(0,160,0,0.15)] transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-green-500"></div>
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-3">인센티브</h5>
              <p className="text-sm text-gray-500 font-light">성과 기반 차등 지급</p>
           </div>
        </div>
      </section>
    </div>
  );
}