import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import SubLayout from './SubLayout';

export default function Work() {
  const { subpage } = useParams();

  const sideMenuItems = [
    { name: '공사수주 현황', key: 'projects', desc: '태일씨앤티의 주요 프로젝트 수주 현황입니다.', path: '/work/projects' },
    { name: '건설시공능력', key: 'capability', desc: '차별화된 기술력과 시공 능력을 보유하고 있습니다.', path: '/work/capability' },
    { name: '품질경영', key: 'quality', desc: '최상의 품질을 위한 관리 체계를 운영합니다.', path: '/work/quality' },
    { name: '안전경영', key: 'safety', desc: '안전을 최우선 가치로 현장을 관리합니다.', path: '/work/safety' },
  ];

  const activeMenu = sideMenuItems.find(item => item.key === subpage) || sideMenuItems[0];

  return (
    <SubLayout title="사업실적" menuItems={sideMenuItems} activePath={activeMenu.path}>
      <motion.div key={activeMenu.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
        <div className="border-b border-gray-100 pb-8 mb-12">
          <h3 className="text-3xl font-bold text-zinc-900">{activeMenu.name}</h3>
          <p className="text-gray-500 mt-2 text-lg">{activeMenu.desc}</p>
        </div>
        <div className="flex items-center justify-center h-[40vh] border-2 border-dashed border-gray-100 rounded-3xl">
          <p className="text-gray-300 font-normal italic">{activeMenu.name} 상세 내용 준비 중</p>
        </div>
      </motion.div>
    </SubLayout>
  );
}
