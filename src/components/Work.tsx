import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SubLayout from './SubLayout';

export default function Work() {
  const [currentSubPath, setCurrentSubPath] = useState(decodeURIComponent(window.location.hash) || '#공사수주 현황');

  useEffect(() => {
    const handleHashChange = () => setCurrentSubPath(decodeURIComponent(window.location.hash));
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const sideMenuItems = [
    { name: '공사수주 현황', desc: '태일씨앤티의 주요 프로젝트 수주 현황입니다.' },
    { name: '건설시공능력', desc: '차별화된 기술력과 시공 능력을 보유하고 있습니다.' },
    { name: '품질경영', desc: '최상의 품질을 위한 관리 체계를 운영합니다.' },
    { name: '안전경영', desc: '안전을 최우선 가치로 현장을 관리합니다.' },
  ];

  const activeMenu = sideMenuItems.find(item => `#${item.name}` === currentSubPath) || sideMenuItems[0];

  return (
    <SubLayout title="사업실적" menuItems={sideMenuItems} activePath={currentSubPath} heroImage="./images/cropped_orders.jpg">
      <motion.div key={activeMenu.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
        <div className="border-b border-gray-100 pb-8 mb-12">
          <h3 className="text-3xl font-bold text-zinc-900">{activeMenu.name}</h3>
          <p className="text-gray-500 mt-2 text-lg">{activeMenu.desc}</p>
        </div>
        <div className="flex items-center justify-center h-[40vh] border-2 border-dashed border-gray-100 rounded-3xl">
          <p className="text-gray-300 font-light italic">{activeMenu.name} 상세 내용 준비 중</p>
        </div>
      </motion.div>
    </SubLayout>
  );
}
