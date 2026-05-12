import React from 'react';
import { newsData } from '../data/news';
import PRSidebar from '../components/pr/PRSidebar';
import PostList from '../components/pr/PostList';

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-64 bg-gray-200 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative text-white text-5xl font-bold z-10">홍보센터</h1>
      </div>

      <div className="max-w-7xl mx-auto py-8 md:py-12 lg:py-20 px-4">
        <div className="flex flex-col lg:flex-row">
          <PRSidebar currentMenu="NEWS" />
          <PostList posts={newsData} basePath="news" title="NEWS" />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
