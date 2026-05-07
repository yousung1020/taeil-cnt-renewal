import { useState } from 'react';

const jobCategories = ['현장공사', '현장안전', '현장공무', '본사공무', '자재', '재무회계', '인사/총무', 'IT'];

export function Guide() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="animate-fade-in-up space-y-32">
      {/* Title */}
      <div className="mb-16 border-b border-gray-900 pb-6 flex items-end justify-between">
        <h3 className="text-3xl font-bold text-gray-900 tracking-tight">채용가이드</h3>
        <span className="text-sm font-medium text-green-600 tracking-widest uppercase">Recruitment Guide</span>
      </div>

      {/* 공개채용 */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <div className="w-1.5 h-6 bg-green-600"></div>
           <h4 className="text-2xl font-bold text-gray-900 tracking-tight">공개채용</h4>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          {[
            { step: '01', title: '서류전형', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
            { step: '02', title: '1차면접', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
            { step: '03', title: '인성검사', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
            { step: '04', title: '2차면접', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl py-8 px-4 w-full flex-1 flex flex-col items-center justify-center relative shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 group hover:-translate-y-1 transition-transform duration-300">
               <svg className="w-8 h-8 text-gray-300 mb-4 group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
               <span className="font-bold text-gray-900 text-lg">{item.title}</span>
               <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-200 z-10">
                 <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
               </div>
            </div>
          ))}
          <div className="bg-white border-2 border-green-500 rounded-xl py-8 px-4 w-full flex-1 flex flex-col items-center justify-center relative shadow-[0_4px_20px_rgba(0,160,0,0.08)]">
             <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
             </div>
             <span className="font-bold text-gray-900 text-lg">최종합격</span>
          </div>
        </div>
      </section>

      {/* 직무소개 */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <div className="w-1.5 h-6 bg-green-600"></div>
           <h4 className="text-2xl font-bold text-gray-900 tracking-tight">직무소개</h4>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-0 mb-12 border-t border-l border-gray-200">
          {jobCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`py-4 px-2 text-center text-sm border-r border-b border-gray-200 font-medium transition-colors ${
                activeTab === idx 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 p-8 md:p-12 space-y-12">
           <div className="flex flex-col md:flex-row gap-6 md:gap-12">
             <h5 className="text-sm font-bold tracking-widest text-green-600 uppercase w-32 shrink-0 pt-1">
                Roles
             </h5>
             <div>
               <h6 className="text-xl font-bold text-gray-900 mb-4">업무개발</h6>
               <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                 공사계획 수립<br/>공사작업관리<br/>자재 기술개발<br/>공사 특이사항 관리
               </p>
             </div>
           </div>
           
           <div className="w-full h-px bg-gray-200"></div>

           <div className="flex flex-col md:flex-row gap-6 md:gap-12">
             <h5 className="text-sm font-bold tracking-widest text-green-600 uppercase w-32 shrink-0 pt-1">
                Competency
             </h5>
             <div>
               <h6 className="text-xl font-bold text-gray-900 mb-4">필요역량</h6>
               <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                 발주자 요구사항 이해, 공종별 체계화 기술, 건축적산, 공사비 분석<br/>
                 도면이해, 공정 단계별 실행대응, 가공오차 분석, 거푸집 및 철근콘크리트 타설 제반 지식<br/>
                 자재 특성 이해, 공기 단축 공법 제안 능력, 공법별 자재별 원가분석 기술<br/>
                 안전점검 및 하도급 공사 관리
               </p>
             </div>
           </div>

           <div className="w-full h-px bg-gray-200"></div>

           <div className="flex flex-col md:flex-row gap-6 md:gap-12">
             <h5 className="text-sm font-bold tracking-widest text-green-600 uppercase w-32 shrink-0 pt-1">
                Vision
             </h5>
             <div>
               <h6 className="text-xl font-bold text-gray-900 mb-4">비전</h6>
               <p className="text-gray-600 font-medium leading-relaxed text-sm md:text-base">
                 공사 작업관리 <span className="mx-3 text-gray-300 font-light">→</span> 공사 계획 수립 <span className="mx-3 text-gray-300 font-light">→</span> 자재/기술 개발
               </p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}