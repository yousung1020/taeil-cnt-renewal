import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SubLayout from './SubLayout';

export default function PR() {
  const [currentSubPath, setCurrentSubPath] = useState(decodeURIComponent(window.location.hash) || '#News');

  useEffect(() => {
    const handleHashChange = () => setCurrentSubPath(decodeURIComponent(window.location.hash));
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const sideMenuItems = [
    { name: 'News', desc: '태일씨앤티의 최신 소식을 알려드립니다.' },
    { name: '사회공헌', desc: '함께 나누는 따뜻한 세상을 만들어갑니다.' },
    { name: '홍보자료', desc: '태일씨앤티의 다양한 홍보 자료를 확인하세요.' },
  ];

  const activeMenu = sideMenuItems.find(item => `#${item.name}` === currentSubPath) || sideMenuItems[0];

  return (
    <SubLayout title="홍보센터" menuItems={sideMenuItems} activePath={currentSubPath} heroImage="./images/cropped_news.jpg">
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
