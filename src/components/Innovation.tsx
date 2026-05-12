import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import SubLayout from './SubLayout';

export default function Innovation() {
  const { subpage } = useParams();

  const sideMenuItems = [
    { name: '기술혁신 비전', key: 'vision', desc: '미래 건설 시장을 선도할 기술 혁신 로드맵입니다.', path: '/innovation/vision' },
    { name: '기술혁신 News', key: 'news', desc: '태일씨앤티의 새로운 기술 소식을 전해드립니다.', path: '/innovation/news' },
  ];

  const activeMenu = sideMenuItems.find(item => item.key === subpage) || sideMenuItems[0];

  return (
    <SubLayout title="기술혁신" menuItems={sideMenuItems} activePath={activeMenu.path}>
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
