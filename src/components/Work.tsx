import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import SubLayout from './SubLayout';
import { CheckCircle2, BarChart3, ClipboardCheck } from 'lucide-react';

// 이미지 임포트
import suwonImg from '../assets/suwon.png';
import daisoImg from '../assets/daiso.png';
import yonginImg from '../assets/yongin.png';
import cementImg from '../assets/cement.png';

export default function Work() {
  const { subpage } = useParams();
  const [activeFilter, setActiveFilter] = useState('전체');
  const [activeQualityTab, setActiveQualityTab] = useState('policy');
  const [activeSafetyTab, setActiveSafetyTab] = useState('policy');
  const [selectedSafetyPost, setSelectedSafetyPost] = useState<number | null>(null);

  const sideMenuItems = [
    { name: '공사수주 현황', key: 'projects', desc: '태일씨앤티의 주요 프로젝트 수주 현황입니다.', path: '/work/projects' },
    { name: '건설시공능력', key: 'capability', desc: '차별화된 기술력과 시공 능력을 보유하고 있습니다.', path: '/work/capability' },
    { name: '품질경영', key: 'quality', desc: '최상의 품질을 위한 관리 체계를 운영합니다.', path: '/work/quality' },
    { name: '안전경영', key: 'safety', desc: '안전을 최우선 가치로 현장을 관리합니다.', path: '/work/safety' },
  ];

  const categories = ['전체', '주택', '업무시설', '교육/의료', '플랜트', '초고층', '판매시설', '기타'];
  const activeMenu = sideMenuItems.find(item => item.key === subpage) || sideMenuItems[0];

  const projectCards = [
    { id: 1, type: '주택', title: '수원연무동 주상복합', image: suwonImg, client: 'HL 디앤아이한라 주식회사', contractor: 'HL 디앤아이한라 주식회사', scale: '대지면적 : 6,781m2 연면적 : 53,385m2 지하1층~지상28층', period: '2024.05.22 ~ 2026.05.31', status: '진행' },
    { id: 2, type: '판매시설', title: '다이소 세종 온라인센터', image: daisoImg, client: '(주)아성다이소', contractor: '삼성물산 주식회사', scale: '연면적 : 63,524m2 지하1층~지상4층', period: '2025.06.01 ~ 2026.09.30', status: '진행' },
    { id: 3, type: '기타', title: '용인 Cluster 1기 OBL 및 공동구', image: yonginImg, client: 'SK하이닉스 주식회사', contractor: 'SK에코플랜트 주식회사', scale: '용인 반도체 클러스터 기반시설 공사', period: '2024.10.15 ~ 2027.06.30', status: '진행' },
    { id: 4, type: '업무시설', title: '엔씨소프트 글로벌 RDI센터', image: cementImg, client: '(주)엔씨소프트', contractor: '삼성물산 주식회사', scale: '연면적 : 185,241m2 지하8층~지상14층', period: '2024.07.01 ~ 2027.10.31', status: '진행' },
  ];

  const filteredProjects = activeFilter === '전체' ? projectCards : projectCards.filter(p => p.type === activeFilter);

  const renderContent = () => {
    switch (subpage) {
      case 'projects':
        return (
          <div className="space-y-10">
            <div className="flex flex-wrap gap-2 pb-2 border-b border-gray-100">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveFilter(cat)} className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeFilter === cat ? 'bg-green-600 text-white shadow-lg shadow-green-100' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>{cat}</button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold rounded-full uppercase tracking-wider">{project.type}</span></div>
                      <div className="absolute top-4 right-4"><span className={`px-3 py-1 rounded-full text-[11px] font-bold ${project.status === '진행' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>{project.status}</span></div>
                    </div>
                    <div className="p-7 flex-grow flex flex-col">
                      <h4 className="text-xl font-bold text-gray-900 mb-5 group-hover:text-green-600 transition-colors line-clamp-1">{project.title}</h4>
                      <div className="space-y-3 flex-grow text-[13px]">
                        <div className="flex"><span className="w-20 text-gray-400 font-medium shrink-0">발주처</span><span className="text-gray-700 font-semibold">{project.client}</span></div>
                        <div className="flex"><span className="w-20 text-gray-400 font-medium shrink-0">시공사</span><span className="text-gray-700 font-semibold">{project.contractor}</span></div>
                        <div className="flex"><span className="w-20 text-gray-400 font-medium shrink-0">규모</span><span className="text-gray-600 leading-relaxed">{project.scale}</span></div>
                        <div className="flex"><span className="w-20 text-gray-400 font-medium shrink-0">공사기간</span><span className="text-gray-500 font-medium">{project.period}</span></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        );
      case 'capability':
        return (
          <div className="space-y-6">
            <div className="bg-stone-50 p-6 rounded-2xl mb-8 border border-stone-100">
              <p className="text-stone-600 text-sm leading-relaxed text-center">태일씨앤티는 매년 철근콘크리트 공사업 분야에서 압도적인 시공능력평가액 상승을 기록하며 업계 선두권을 유지하고 있습니다.</p>
            </div>
            <div className="space-y-4">
              {[{ year: '2024년 시공능력평가', data: [{ type: '철근·콘크리트', id: '92-서울-10-440', value: '66,974,298', national: '61 / 12,463' }, { type: '비계구조물', id: '관악-14-06-01', value: '9,850,873', national: '216 / 3,960' }, { type: '습식방수', id: '관악-14-03-01', value: '9,850,873', national: '249 / 2,956' }] }, { year: '2023년 시공능력평가', data: [{ type: '철근·콘크리트', id: '92-서울-10-440', value: '58,421,500', national: '65 / 12,200' }] }].map((yearSection, idx) => (
                <details key={idx} className="group border border-gray-200 rounded-2xl bg-white overflow-hidden" open={idx === 0}>
                  <summary className="flex items-center justify-between px-8 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center group-open:bg-green-600 transition-colors"><BarChart3 className="w-5 h-5 text-green-600 group-open:text-white transition-colors" /></div>
                      <span className="text-lg font-bold text-gray-900">{yearSection.year}</span>
                    </div>
                    <div className="text-gray-400 group-open:rotate-180 transition-transform duration-300"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></div>
                  </summary>
                  <div className="px-8 pb-8 pt-2">
                    <div className="mb-4 flex justify-end"><span className="text-xs text-gray-400 font-medium">(단위: 천원)</span></div>
                    <div className="overflow-x-auto border border-gray-100 rounded-xl">
                      <table className="w-full text-sm text-left border-collapse">
                        <thead className="bg-gray-50 border-b border-gray-100"><tr><th className="px-4 py-3 font-bold text-gray-700">업종</th><th className="px-4 py-3 font-bold text-gray-700 text-right">시공능력평가액</th><th className="px-4 py-3 font-bold text-gray-700 text-center">전국순위</th></tr></thead>
                        <tbody className="divide-y divide-gray-50">{yearSection.data.map((row, rowIdx) => (<tr key={rowIdx} className="hover:bg-gray-50/50 transition-colors"><td className="px-4 py-4 font-bold text-gray-900">{row.type}</td><td className="px-4 py-4 text-right font-bold text-green-700">{row.value}</td><td className="px-4 py-4 text-center text-gray-600">{row.national}</td></tr>))}</tbody>
                      </table>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        );
      case 'quality':
        return (
          <div className="space-y-10">
            <div className="flex gap-8 border-b border-gray-100">
              {[{ id: 'policy', name: '품질경영 방침' }, { id: 'status', name: '품질경영 관리현황' }].map((tab) => (
                <button key={tab.id} onClick={() => setActiveQualityTab(tab.id)} className={`pb-4 text-lg font-bold transition-all relative ${activeQualityTab === tab.id ? 'text-green-600' : 'text-gray-400 hover:text-gray-600'}`}>{tab.name}{activeQualityTab === tab.id && (<motion.div layoutId="qualityTab" className="absolute bottom-0 left-0 right-0 h-1 bg-green-600 rounded-full" />)}</button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              {activeQualityTab === 'policy' ? (
                <motion.div key="policy" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-16">
                  <div className="bg-green-100/80 border border-green-200 p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden shadow-sm">
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                          <CheckCircle2 className="text-green-600 w-6 h-6" />
                        </div>
                        <span className="text-green-600 font-bold tracking-widest text-sm uppercase">Integrated Management System</span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold mb-8 leading-tight break-keep text-zinc-900">
                        태일씨앤티는 인간과 자연의 조화를 위한 <br className="hidden md:block" />
                        지속 가능한 기술개발과 환경 친화적인 사업을 실천합니다.
                      </h4>
                      <p className="text-zinc-700 text-lg leading-relaxed font-normal break-keep max-w-4xl">
                        ㈜태일씨앤티는 고객의 기대와 요구를 만족시키는 최고 품질의 제품공급과 서비스 및 인간과 자연의 조화를 위한 지속 가능한 기술개발과
                        환경 친화적인 사업을 위해 <span className="text-green-800 font-black border-b-2 border-green-400">ISO 9001 / ISO 14001 품질·환경경영시스템</span>을 수립하여 고객감동의 품질·환경 경영을 실천한다.
                      </p>
                    </div>
                    <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-green-200/30 to-transparent pointer-events-none" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-10 rounded-[2rem] border border-green-100 flex flex-col items-center text-center"><h5 className="text-gray-500 text-lg mb-2">경영방침</h5><p className="text-4xl font-black text-green-700">고객감동</p></div>
                    <div className="bg-zinc-50 p-10 rounded-[2rem] border border-zinc-200 flex flex-col items-center text-center"><h5 className="text-gray-500 text-lg mb-2">경영목표</h5><p className="text-4xl font-black text-zinc-900">초일류기업실현</p></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[{ id: '01', title: '고객감동 최우선 경영', desc: '철저한 품질경영 및 환경법규 준수 활동 추진' }, { id: '02', title: '완벽시공 및 사후관리', desc: '재해 없는 현장 구축 및 환경 성과 지속 관리' }, { id: '03', title: '지속적 기술개발', desc: '원가절감 및 친환경 제품의 지속적 실현' }, { id: '04', title: '체계적 목표 관리', desc: '품질경영 관련 법규 및 목표를 문서화하여 관리' }, { id: '05', title: '직원 교육훈련 강화', desc: '지속적인 교육 기회 제공을 통한 전문성 확보' }, { id: '06', title: '전사적 품질 활동', desc: '전 임직원이 책임감을 가지고 품질경영 수행' }].map((item) => (
                      <div key={item.id} className="p-8 rounded-3xl border border-gray-100 bg-white hover:border-green-200 hover:shadow-xl hover:shadow-green-50 transition-all duration-300 group"><span className="text-green-600 font-black text-3xl opacity-20 group-hover:opacity-100 transition-opacity mb-4 block">{item.id}</span><h6 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h6><p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p></div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div key="status" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                  <div className="bg-white border-y-2 border-zinc-900"><div className="grid grid-cols-[80px_1fr_120px] bg-zinc-50 border-b border-zinc-200 text-center py-4 text-sm font-bold text-zinc-700"><span>번호</span><span>제목</span><span>등록일</span></div><div className="py-20 flex flex-col items-center justify-center text-zinc-400"><ClipboardCheck className="w-12 h-12 mb-4 opacity-20" /><p>등록된 품질경영 관리현황이 없습니다.</p></div></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      case 'safety':
        return (
          <div className="space-y-10">
            {/* 내부 서브 탭 */}
            <div className="flex gap-8 border-b border-gray-100">
              {[{ id: 'policy', name: '안전보건방침' }, { id: 'status', name: '안전보건관리현황' }].map((tab) => (
                <button key={tab.id} onClick={() => { setActiveSafetyTab(tab.id); setSelectedSafetyPost(null); }} className={`pb-4 text-lg font-bold transition-all relative ${activeSafetyTab === tab.id ? 'text-green-600' : 'text-gray-400 hover:text-gray-600'}`}>{tab.name}{activeSafetyTab === tab.id && (<motion.div layoutId="safetyTab" className="absolute bottom-0 left-0 right-0 h-1 bg-green-600 rounded-full" />)}</button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeSafetyTab === 'policy' ? (
                <motion.div key="policy" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                  <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                    <img src="/images/safe_main.jpg" alt="안전보건방침" className="w-full h-auto" />
                  </div>
                </motion.div>
              ) : (
                <motion.div key="status" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                  {!selectedSafetyPost ? (
                    <div className="bg-white border-y-2 border-zinc-900">
                      <div className="grid grid-cols-[80px_1fr_120px] bg-zinc-50 border-b border-zinc-200 text-center py-4 text-sm font-bold text-zinc-700">
                        <span>번호</span><span>제목</span><span>등록일</span>
                      </div>
                      <div className="divide-y divide-gray-100">
                        <div onClick={() => setSelectedSafetyPost(1)} className="grid grid-cols-[80px_1fr_120px] py-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                          <span className="text-gray-500">1</span>
                          <span className="text-left px-4 font-medium text-gray-900 group-hover:text-green-600">안전보건 경영 방침 및 경영목표</span>
                          <span className="text-gray-400">2024.01.01</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      <button onClick={() => setSelectedSafetyPost(null)} className="flex items-center gap-2 text-gray-500 hover:text-green-600 font-bold transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        목록으로 돌아가기
                      </button>
                      <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                        <h4 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-6">안전보건 경영 방침 및 경영목표</h4>
                        <img src="/images/safe2.jpg" alt="안전보건 경영 방침 및 경영목표 상세" className="w-full h-auto rounded-xl shadow-lg" />
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <SubLayout title="BUSINESS" subtitle="사업실적" menuItems={sideMenuItems} activePath={activeMenu.path}>
      <motion.div key={activeMenu.key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="border-b border-gray-100 pb-8 mb-12">
          <div className="flex items-center gap-3 mb-2"><span className="w-8 h-[2px] bg-green-600" /><span className="text-sm font-bold text-green-600 tracking-widest uppercase">Performance</span></div>
          <h3 className="text-4xl font-black text-zinc-900 tracking-tight">{activeMenu.name}</h3>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl">{activeMenu.desc}</p>
        </div>
        {renderContent()}
      </motion.div>
    </SubLayout>
  );
}
