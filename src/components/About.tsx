import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import SubLayout from './SubLayout';

export default function About() {
  const { subpage } = useParams();

  const sideMenuItems = [
    { name: '인사말', key: 'greetings', desc: '태일씨앤티 대표이사의 메시지입니다.', path: '/about/greetings' },
    { name: '경영이념', key: 'philosophy', desc: '우리가 추구하는 가치와 철학입니다.', path: '/about/philosophy' },
    { name: '회사연혁', key: 'history', desc: '태일씨앤티가 걸어온 길입니다.', path: '/about/history' },
    { name: '기구조직도', key: 'organization', desc: '효율적인 운영을 위한 조직 구성입니다.', path: '/about/organization' },
    { name: '업·면허/인증', key: 'certifications', desc: '신뢰의 바탕이 되는 자격과 인증 현황입니다.', path: '/about/certifications' },
    { name: '주거래 시공사', key: 'partners', desc: '함께 협력하는 파트너사입니다.', path: '/about/partners' },
    { name: '찾아오시는 길', key: 'location', desc: '태일씨앤티로 오시는 방법입니다.', path: '/about/location' },
  ];

  const activeMenu = sideMenuItems.find(item => item.key === subpage) || sideMenuItems[0];

  return (
    <SubLayout title="ABOUT US" subtitle="회사소개" menuItems={sideMenuItems} activePath={activeMenu.path}>
      <motion.div
        key={activeMenu.name}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="mb-16 border-b border-gray-900 pb-6">
          <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-1.5">{activeMenu.name}</h3>
          <p className="text-gray-500 text-lg font-medium">{activeMenu.desc}</p>
        </div>
        
        <div className="flex items-center justify-center h-[40vh] border-2 border-dashed border-gray-100 rounded-3xl">
          <p className="text-gray-300 font-normal italic">{activeMenu.name} 콘텐츠 영역</p>
        </div>
      </motion.div>
    </SubLayout>
  );
}
