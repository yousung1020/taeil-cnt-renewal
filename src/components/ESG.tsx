import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SubLayout from './SubLayout';

export default function ESG() {
  const [currentSubPath, setCurrentSubPath] = useState(decodeURIComponent(window.location.hash) || '#ESG');

  useEffect(() => {
    const handleHashChange = () => setCurrentSubPath(decodeURIComponent(window.location.hash));
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const sideMenuItems = [
    { name: 'ESG', desc: '태일씨앤티의 지속 가능한 미래를 위한 ESG 경영 비전입니다.' },
    { name: '환경경영', desc: '자연과 상생하는 친환경 건설 문화를 선도합니다.' },
    { name: '윤리경영', desc: '투명하고 공정한 기업 운영으로 신뢰받는 기업이 되겠습니다.' },
  ];

  const activeMenu = sideMenuItems.find(item => `#${item.name}` === currentSubPath) || sideMenuItems[0];

  return (
    <SubLayout title="ESG 경영" menuItems={sideMenuItems} activePath={currentSubPath}>
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
        
        <div className="space-y-16">
          <section className="bg-zinc-50 p-10 rounded-3xl border border-zinc-100">
            <h4 className="text-xl font-bold text-green-800 mb-6">개요</h4>
            <p className="text-gray-600 leading-relaxed break-keep text-[18px]">
              태일씨앤티는 {activeMenu.name} 실천을 위해 엄격한 기준을 수립하고 실천하고 있습니다. 
              모든 공정과 운영에서 사회적 가치를 창출하는 데 최선을 다하겠습니다.
            </p>
          </section>

          <div className="flex items-center justify-center h-[30vh] border-2 border-dashed border-gray-100 rounded-3xl">
            <p className="text-gray-300 font-light italic">{activeMenu.name} 상세 콘텐츠 영역</p>
          </div>
        </div>
      </motion.div>
    </SubLayout>
  );
}
