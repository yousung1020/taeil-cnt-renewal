import { useState } from 'react';

const jobCategories = ['현장공사', '현장안전', '현장공무', '본사공무', '자재', '재무회계', '인사/총무', 'IT'];

export function Guide() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="animate-fade-in-up space-y-32">
      {/* Title */}
      <div className="mb-16 border-b border-gray-900 pb-6">
        <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-1.5">채용가이드</h3>
        <p className="text-gray-500 text-lg font-medium">태일씨앤티 채용 프로세스와 직무에 대해 안내해 드립니다.</p>
      </div>

      {/* 공개채용 */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <div className="w-1.5 h-6 bg-green-600"></div>
           <h4 className="text-2xl font-bold text-gray-900 tracking-tight">공개채용</h4>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {[
            { step: '01', title: '서류전형', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
            { step: '02', title: '1차면접', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
            { step: '03', title: '인성검사', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
            { step: '04', title: '2차면접', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
            { step: '05', title: '최종합격', icon: 'M5 13l4 4L19 7' },
          ].map((item, idx, array) => (
            <div key={idx} className="flex-1 flex items-center w-full">
              <div 
                className="bg-white rounded-xl py-10 px-8 w-full flex flex-col items-start justify-center transition-all duration-300 group
                  border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.04)]
                  hover:border-green-500 hover:shadow-[0_10px_30px_rgba(0,160,0,0.12)] hover:-translate-y-2"
              >
                 <div className="w-14 h-14 rounded-full bg-gray-50 group-hover:bg-green-100 flex items-center justify-center mb-5 transition-colors duration-300">
                    <svg className="w-7 h-7 text-gray-400 group-hover:text-green-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                 </div>
                 <span className="font-bold text-gray-900 text-[17px] tracking-tight whitespace-nowrap">{item.title}</span>
              </div>
              
              {/* Arrow between steps (desktop only) */}
              {idx < array.length - 1 && (
                <div className="hidden lg:flex items-center justify-center w-8 text-gray-300 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
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

        {/* Job Content Area - Image height matches text content height */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Left: Image Area - Stretches to match text height */}
          <div className="lg:w-[400px] shrink-0 bg-gray-100 rounded-lg overflow-hidden shadow-sm relative">
            <img 
              src={jobIntroData[activeTab].image} 
              alt={jobIntroData[activeTab].title}
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Right: Content Area */}
          <div className="flex-1">
            {/* Overview */}
            <div className="pb-8 border-t border-gray-200 pt-6">
              <h5 className="text-green-600 font-bold text-lg mb-5 flex items-center gap-2">
                업무개괄
              </h5>
              <div className="text-gray-700 text-[15px] leading-relaxed space-y-2.5">
                {jobIntroData[activeTab].overview.split('\n').map((line, i) => (
                  <p key={i} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-green-500 shrink-0"></span>
                    <span>{line}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Competency */}
            <div className="pb-8 border-t border-gray-200 pt-6">
              <h5 className="text-green-600 font-bold text-lg mb-5 flex items-center gap-2">
                필요역량
              </h5>
              <div className="text-gray-700 text-[15px] leading-relaxed space-y-4">
                {jobIntroData[activeTab].competency.split('\n').map((para, i) => (
                  <p key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-green-500 shrink-0 mt-[10px]"></span>
                    <span>{para}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div className="pb-6 border-t border-gray-200 pt-6">
              <h5 className="text-green-600 font-bold text-lg mb-5 flex items-center gap-2">
                Vision
              </h5>
              <div className="text-gray-700 text-[15px] font-medium leading-relaxed flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-green-500 shrink-0"></span>
                <span>{jobIntroData[activeTab].vision}</span>
              </div>
            </div>
            <div className="border-b border-gray-200"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

const jobIntroData = [
  {
    title: '현장공사',
    image: 'https://images.unsplash.com/photo-1673978481178-b4d72cfd2fb9?auto=format&fit=crop&q=80&w=1200',
    overview: '공사계획 수립\n공사작업관리\n자재 기술개발\n공사 특이사항 관리',
    competency: '발주자 요구사항 이해, 공종별 체계화 기술, 건축적산, 공사비 분석\n도면 이해 및 공정별 실행 대응, 거푸집·철근콘크리트 타설 지식\n자재 특성 이해, 공기 단축 공법 제안, 원가분석 기술\n안전점검 및 하도급 공사 관리',
    vision: '공사 작업관리 → 공사 계획 수립 → 자재/기술 개발'
  },
  {
    title: '현장안전',
    image: 'https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?auto=format&fit=crop&q=80&w=1200',
    overview: '안전기획\n안전점검\n안전보건교육\n산업재해 예방',
    competency: '안전관리계획서 작성, 공정표 분석, 안전보건교육 연간 일정계획 수립\n산업안전규정 및 공정 지식, 산업안전시설 및 장비 지식\n안전교육 실습 매체 및 교수법\n산업재해 법규 이해',
    vision: '안전점검, 교육 및 산재 대응 → 안전기획'
  },
  {
    title: '현장공무',
    image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80&w=1200',
    overview: '공정관리\n자금 및 원가관리\n자재관리\n현장인력 관리',
    competency: '현장착공관리, 예정 공정표 분석, 발주자 요구 내용의 전반적 이해\n회계처리 기본 이해, 공정별 원가관리\n자재 납품계약서 등 이해, 자재 규격별 공종별 수요 이해\n인사노무관리, 장비관리',
    vision: '제반 현장 운영 → 공정관리, 자금/원가관리 → 협상력 강화'
  },
  {
    title: '본사공무',
    image: 'https://images.unsplash.com/photo-1575318633968-0383e7d07ca0?auto=format&fit=crop&q=80&w=1200',
    overview: '견적산출 및 설계 검토\n공정관리 및 공무 행정\n자금 및 원가관리\n산업 동향 및 고객관리',
    competency: '설계 검토 및 수익성 분석, 입찰-계약진행\n현장착공관리 및 예정 공정표 분석 능력\n회계 처리 기본 이해 및 공정별 원가관리 실무\n건설업 규정 준수 및 하자/공문 대응 역량',
    vision: '공정관리 → 자금/원가관리 → 견적 산출 → 협상력 강화'
  },
  {
    title: '자재',
    image: 'https://images.unsplash.com/photo-1530863506128-dc9eb5c3e0fc?auto=format&fit=crop&q=80&w=1200',
    overview: '자재 사업기획\n자재 구매관리\n자재조달기획\n자재운영관리',
    competency: '자재 품질요구조건 지식, 공정관리 프로세스 이해, 협력업체 관리\n견적서 분석, 구매계약 프로세스 이해, 설계도면 분석\n원가 및 손익 분석, 사업타당성 도출\n자재 입출고 및 유지보수 관련 지식',
    vision: '자재운영, 자재구매관리 → 자재조달기획 → 자재사업기획'
  },
  {
    title: '재무회계',
    image: 'https://images.unsplash.com/photo-1648201637025-1c77b9be3013?auto=format&fit=crop&q=80&w=1200',
    overview: '자금관리\n세무회계\n원가관리\n계약지원',
    competency: '증빙서류 관리, 회계 규정 및 처리 절차 이해\n세무 신고 및 규정 이해, 전표 처리, 재무제표 작성 및 분석\n원가분석, 일위대가산정 이해, 손익 분석\n계약 및 보증 증권 이해, 재무 신용 관리 절차 및 기준 파악',
    vision: '자금관리 → 계약지원/세무회계 → 자금 및 원가관리'
  },
  {
    title: '인사/총무',
    image: 'https://images.unsplash.com/photo-1569235186275-626cb53b83ce?auto=format&fit=crop&q=80&w=1200',
    overview: '인사기획 및 운영\n급여 및 복리후생\n교육 및 노무관리\n총무 행정 지원',
    competency: '인사 규정 및 노동법 지식, 근로기준법 및 취업규칙 이해\n커뮤니케이션 및 협상 능력, 조직 갈등 관리\n자산 관리 및 환경 위생 관리 지식\n급여 및 4대보험 실무, 복리후생 제도 기획 능력',
    vision: '인사/총무 운영 → 인사 기획 → 경영 지원 전략 수립'
  },
  {
    title: 'IT',
    image: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&q=80&w=1200',
    overview: '사내 인프라 관리\n정보시스템 유지보수\n데이터 보안 관리\nIT 기술 지원',
    competency: '서버 및 네트워크 운영 지식, OS 및 가상화 기술 이해\n보안 정책 수립 및 위기 대응 능력, 정보보호 규정 이해\n문제 해결 및 기술적 소통 능력, 사용자 지원 경험\n사내 시스템(ERP/그룹웨어) 구축 및 유지보수 역량',
    vision: '인프라 운영 → 시스템 기획 → 디지털 전환(DX) 리딩'
  }
];