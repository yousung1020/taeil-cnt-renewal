import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import SubLayout from './SubLayout';

export default function Recruit() {
  const { subpage } = useParams();

  const sideMenuItems = [
    { name: '인사제도', key: 'system', desc: '태일씨앤티의 공정하고 합리적인 인사 시스템입니다.', path: '/recruit/system' },
    { name: '복리후생', key: 'benefits', desc: '임직원의 삶의 질 향상을 위한 다양한 혜택을 제공합니다.', path: '/recruit/benefits' },
    { name: '채용가이드', key: 'guide', desc: '태일씨앤티와 함께할 미래 인재를 기다립니다.', path: '/recruit/guide' },
  ];

  const activeMenu = sideMenuItems.find(item => item.key === subpage) || sideMenuItems[0];

  return (
    <SubLayout title="인재채용" menuItems={sideMenuItems} activePath={activeMenu.path}>
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
