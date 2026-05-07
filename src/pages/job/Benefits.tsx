export function Benefits() {
  const benefitsList = [
    { title: '자녀학자금 및 교육지원', desc: '자녀 학자금 지원\n아주대경영대학원 교육 지원\n직무/직급/리더십 교육 및 워크샵 지원\n건설기술인 연회비 및 승급교육 일체 지원', icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
    { title: '연금보험가입', desc: '퇴직연금(DB형)', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { title: '상조회', desc: '태일 상조회 운영', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { title: '휴양시설 운영', desc: '전국 대명리조트 회원권 보유', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { title: '해외연수', desc: '태일인/우수사원/최우수현장', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
    { title: '사내동아리 지원', desc: '직급별 모임 지원\n동아리 모임 지원', icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' },
    { title: '청년지원', desc: '청년재직자 내일채움공제', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { title: '연차제도', desc: '반차/반반차 운영', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { title: '기념품 지급', desc: '근로자의 날/창립기념일', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  ];

  return (
    <div className="animate-fade-in-up">
      <div className="mb-16 border-b border-gray-900 pb-6 flex items-end justify-between">
        <h3 className="text-3xl font-bold text-gray-900 tracking-tight">복리후생</h3>
        <span className="text-sm font-medium text-green-600 tracking-widest uppercase">Welfare</span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200">
        {benefitsList.map((item, idx) => (
          <div key={idx} className="bg-white border-r border-b border-gray-200 p-10 flex flex-col items-start transition-colors duration-300 hover:bg-gray-50 group">
            <svg className="w-8 h-8 text-gray-400 mb-8 group-hover:text-green-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={item.icon} />
            </svg>
            <h4 className="text-xl font-bold mb-4 text-gray-900 tracking-tight">{item.title}</h4>
            <p className="text-gray-500 leading-relaxed whitespace-pre-line text-sm font-light">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}