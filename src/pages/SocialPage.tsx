import React from 'react';
import { motion } from 'framer-motion';
import { socialData } from '../data/social';
import SubLayout from '../components/SubLayout';
import PostList from '../components/pr/PostList';

const SocialPage: React.FC = () => {
  const sideMenuItems = [
    { name: 'News', desc: '태일씨앤티의 최신 소식을 알려드립니다.', path: '/news' },
    { name: '사회공헌', desc: '함께 나누는 따뜻한 세상을 만들어갑니다.', path: '/social' },
    { name: '유튜브', desc: '태일씨앤티의 다양한 영상을 확인하세요.', path: '/youtube' },
  ];

  return (
    <SubLayout title="PR CENTER" subtitle="홍보센터" menuItems={sideMenuItems} activePath="/social">
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
        <div className="mb-16 border-b border-gray-900 pb-6">
          <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-1.5">사회공헌</h3>
          <p className="text-gray-500 text-lg font-medium">함께 나누는 따뜻한 세상을 만들어갑니다.</p>
        </div>
        <PostList posts={socialData} basePath="social" title="사회공헌" />
      </motion.div>
    </SubLayout>
  );
};

export default SocialPage;
