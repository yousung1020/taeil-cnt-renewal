import React from 'react';
import { motion } from 'framer-motion';
import { newsData } from '../data/news';
import SubLayout from '../components/SubLayout';
import PostList from '../components/pr/PostList';

const NewsPage: React.FC = () => {
  const sideMenuItems = [
    { name: 'News', desc: '태일씨앤티의 최신 소식을 알려드립니다.', path: '/news' },
    { name: '사회공헌', desc: '함께 나누는 따뜻한 세상을 만들어갑니다.', path: '/social' },
    { name: '홍보자료', desc: '태일씨앤티의 다양한 홍보 자료를 확인하세요.', path: '/pr-material' },
  ];

  return (
    <SubLayout title="PR CENTER" subtitle="홍보센터" menuItems={sideMenuItems} activePath="/news">
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
        <div className="border-b border-gray-100 pb-8 mb-12">
          <h3 className="text-3xl font-bold text-zinc-900">News</h3>
          <p className="text-gray-500 mt-2 text-lg">태일씨앤티의 최신 소식을 알려드립니다.</p>
        </div>
        <PostList posts={newsData} basePath="news" title="NEWS" />
      </motion.div>
    </SubLayout>
  );
};

export default NewsPage;
