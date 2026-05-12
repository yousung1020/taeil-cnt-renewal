import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import SubLayout from './SubLayout';

export default function ESG() {
  const { subpage } = useParams();

  const sideMenuItems = [
    { name: 'ESG', key: 'vision', desc: '더 나은 내일을 건설하는 태일씨앤티의 지속가능 경영 비전입니다.', path: '/esg/vision' },
    { name: '환경경영', key: 'environmental', desc: '자연과 인간이 조화로운 건설 환경을 조성합니다.', path: '/esg/environmental' },
    { name: '윤리경영', key: 'ethical', desc: '정직과 신뢰를 바탕으로 깨끗하고 투명한 기업 문화를 정착시킵니다.', path: '/esg/ethical' },
  ];

  const activeMenu = sideMenuItems.find(item => item.key === subpage) || sideMenuItems[0];

  // 각 페이지별 상세 콘텐츠 렌더링 함수
  const renderContent = () => {
    switch (activeMenu.key) {
      case 'vision':
        return (
          <div className="space-y-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              <div className="bg-green-50 p-8 md:p-12 rounded-3xl border border-green-100">
                <h4 className="text-2xl font-bold text-green-900 mb-6">ESG 경영 비전</h4>
                <p className="text-xl text-gray-700 leading-relaxed font-normal break-keep">
                  태일씨앤티는 단순한 이윤 추구를 넘어 환경 보호, 사회적 책임, 지배구조 개선을 경영의 핵심 가치로 삼고 있습니다. 
                  투명한 경영과 사회적 가치 창출을 통해 신뢰받는 건설 파트너로 도약하겠습니다.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-4">
                <img src="/images/ESG.png" alt="ESG 경영 전략 체계" className="w-full h-auto rounded-2xl" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Environment', label: 'E', color: 'bg-green-600', text: '친환경 시공 공법 도입 및 탄소 배출 저감 활동' },
                { title: 'Social', label: 'S', color: 'bg-blue-600', text: '안전 최우선 경영, 지역사회 공헌 및 상생 협력' },
                { title: 'Governance', label: 'G', color: 'bg-slate-700', text: '투명한 의사결정 체계 확립 및 윤리 준수' },
              ].map((item, idx) => (
                <motion.div key={idx} whileHover={{ y: -5 }} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm space-y-4">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white text-2xl font-bold`}>{item.label}</div>
                  <h5 className="text-xl font-bold text-gray-900">{item.title}</h5>
                  <p className="text-gray-500 leading-relaxed break-keep">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'environmental':
        return (
          <div className="space-y-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
              <div className="space-y-8">
                <h4 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                  "자연과 인간이 조화로운 <span className="text-green-700">건설 환경 조성</span>"
                </h4>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <img src="/images/환경경영.jpg" alt="환경경영 원본" className="w-full h-auto block" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-6">
                  <h4 className="text-xl font-bold text-green-800 border-b border-green-200 pb-4">주요 방침</h4>
                  <ul className="space-y-4 text-[18px] text-gray-600 font-normal">
                    <li className="flex items-start gap-3"><span className="text-green-600 font-bold">•</span> 국내외 환경 관련 법규 및 협약 엄격 준수</li>
                    <li className="flex items-start gap-3"><span className="text-green-600 font-bold">•</span> 건설 폐기물 최소화 및 자원 순환 활동 전개</li>
                    <li className="flex items-start gap-3"><span className="text-green-600 font-bold">•</span> 소음, 진동, 먼지 등 환경 오염원 철저 관리</li>
                  </ul>
                </div>
                <div className="p-10 bg-green-900 text-white rounded-3xl space-y-6">
                  <h4 className="text-xl font-bold border-b border-green-700 pb-4">추진 전략</h4>
                  <p className="text-lg leading-relaxed opacity-90 font-normal break-keep">
                    친환경 인증 자재의 사용을 대폭 확대하고, 시공 프로세스의 최적화를 통해 에너지 절감을 실현합니다. 
                    현장별 환경 관리 전담제를 통해 오염 방지에 만전을 기하고 있습니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        );
      case 'ethical':
        return (
          <div className="space-y-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-8">
                  <h4 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">정직과 신뢰를 바탕으로 한<br/><span className="text-green-700">정도(正道) 경영</span></h4>
                  <p className="text-xl text-gray-600 leading-relaxed font-normal break-keep">
                    태일씨앤티는 깨끗하고 투명한 기업 문화 정착을 위해 모든 임직원이 준수해야 할 윤리 강령을 운용하고 있습니다. 
                    부패 방지와 공정 거래를 통해 고객과 협력사의 신뢰를 지켜나갑니다.
                  </p>
                </div>
                <div className="flex-1 w-full max-w-md">
                  <img src="/images/윤리경영.png" alt="윤리경영 아이콘" className="w-full h-auto drop-shadow-2xl" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="p-8 border-l-4 border-green-700 bg-white shadow-sm space-y-4">
                  <h5 className="text-xl font-bold text-gray-900">부패 방지 및 금품 수수 금지</h5>
                  <p className="text-gray-500 font-normal leading-relaxed">어떠한 형태의 부정 청탁이나 향응 수수를 금지하며 공정한 거래 질서를 확립합니다.</p>
                </div>
                <div className="p-8 border-l-4 border-blue-700 bg-white shadow-sm space-y-4">
                  <h5 className="text-xl font-bold text-gray-900">상생 협력 및 동반 성장</h5>
                  <p className="text-gray-500 font-normal leading-relaxed">협력사와의 수평적 관계를 유지하고 기술 지원 및 상생 협력을 통해 함께 성장합니다.</p>
                </div>
              </div>
            </motion.div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <SubLayout title="ESG" subtitle="ESG 경영" menuItems={sideMenuItems} activePath={activeMenu.path}>
      <motion.div
        key={activeMenu.name}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="border-b border-gray-100 pb-8 mb-12">
          <h3 className="text-3xl font-bold text-zinc-900">{activeMenu.name}</h3>
          <p className="text-gray-500 mt-2 text-lg">{activeMenu.desc}</p>
        </div>
        
        {renderContent()}
      </motion.div>
    </SubLayout>
  );
}
