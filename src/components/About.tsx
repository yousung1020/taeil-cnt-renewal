import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SubLayout from './SubLayout';

export default function About() {
  const [currentSubPath, setCurrentSubPath] = useState(decodeURIComponent(window.location.hash) || '#인사말');

  useEffect(() => {
    const handleHashChange = () => setCurrentSubPath(decodeURIComponent(window.location.hash));
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const sideMenuItems = [
    { name: '인사말', desc: '태일씨앤티 대표이사의 메시지입니다.' },
    { name: '경영이념', desc: '우리가 추구하는 가치와 철학입니다.' },
    { name: '회사연혁', desc: '태일씨앤티가 걸어온 길입니다.' },
    { name: '기구조직도', desc: '효율적인 운영을 위한 조직 구성입니다.' },
    { name: '업·면허/인증', desc: '신뢰의 바탕이 되는 자격과 인증 현황입니다.' },
    { name: '주거래 시공사', desc: '함께 협력하는 파트너사입니다.' },
    { name: '찾아오시는 길', desc: '태일씨앤티로 오시는 방법입니다.' },
  ];

  const activeMenu = sideMenuItems.find(item => `#${item.name}` === currentSubPath) || sideMenuItems[0];

  return (
    <SubLayout title="회사소개" menuItems={sideMenuItems} activePath={currentSubPath}>
      <motion.div
        key={activeMenu.name}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="border-b border-gray-100 pb-8 mb-12">
          <h3 className="text-3xl font-bold text-zinc-900">{activeMenu.name}</h3>
          <p className="text-gray-500 mt-2 text-lg">{activeMenu.desc}</p>
        </div>
        
        <div className="flex items-center justify-center h-[40vh] border-2 border-dashed border-gray-100 rounded-3xl">
          <p className="text-gray-300 font-light italic">{activeMenu.name} 콘텐츠 영역</p>
        </div>
      </motion.div>
    </SubLayout>
  );
}
