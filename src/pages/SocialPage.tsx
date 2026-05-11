import React from 'react';
import { socialData } from '../data/social';
import PRSidebar from '../components/pr/PRSidebar';
import PostList from '../components/pr/PostList';

const SocialPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-64 bg-gray-200 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative text-white text-5xl font-bold z-10">홍보센터</h1>
      </div>

      <div className="max-w-7xl mx-auto py-8 md:py-12 lg:py-20 px-4">
        <div className="flex flex-col lg:flex-row">
          <PRSidebar currentMenu="사회공헌" />
          <div className="flex-grow">
            <div className="lg:ml-12 mt-8 lg:mt-0 mb-8 lg:mb-12">
              <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-6 md:p-8 flex items-center relative overflow-hidden">
                {/* Decorative Accent */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-taeil-light"></div>
                
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                  태일씨앤티는 기업의 사회적 책임을 다하고, 나눔을 실천하고자 다양한 사회공헌 활동을 위해 노력하고 있습니다.
                </p>
              </div>
            </div>
            <PostList posts={socialData} basePath="social" title="사회공헌" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
