import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { newsData } from '../data/news';
import { socialData } from '../data/social';
import PRSidebar from '../components/pr/PRSidebar';

interface PostDetailPageProps {
  type: 'news' | 'social';
}

const PostDetailPage: React.FC<PostDetailPageProps> = ({ type }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const data = type === 'news' ? newsData : socialData;
  const currentMenu = type === 'news' ? 'NEWS' : '사회공헌';
  const basePath = type === 'news' ? 'news' : 'social';
  
  const post = data.find((item) => item.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>게시글을 찾을 수 없습니다.</p>
        <button onClick={() => navigate(`/${basePath}`)} className="ml-4 text-taeil-light font-bold">목록으로 돌아가기</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Visual Header */}
      <div className="h-64 bg-gray-200 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative text-white text-5xl font-bold z-10">홍보센터</h1>
      </div>

      <div className="max-w-7xl mx-auto py-8 md:py-12 lg:py-20 px-4">
        <div className="flex flex-col lg:flex-row">
          <PRSidebar currentMenu={currentMenu} />
          
          <div className="flex-grow lg:ml-12 mt-10 lg:mt-0">
            <div className="border-b-2 border-taeil-dark pb-4 mb-8 flex justify-between items-end">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{currentMenu}</h3>
              <p className="hidden lg:block text-sm text-gray-500">홈 &gt; 홍보센터 &gt; {currentMenu}</p>
            </div>

            <article className="max-w-4xl">
              <header className="mb-6 md:mb-8 border-b border-gray-100 pb-6 md:pb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h2>
                <div className="flex text-gray-500 text-xs md:text-sm">
                  <span>작성일: {post.date}</span>
                </div>
              </header>

              <div 
                className="prose prose-sm md:prose-lg max-w-none mb-8 md:mb-12 text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {post.detailImages && post.detailImages.length > 0 && (
                <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                  {post.detailImages.map((img, index) => (
                    <div key={index} className="w-full bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={img} 
                        alt={`${post.title} 상세 이미지 ${index + 1}`} 
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="border-t border-gray-200 pt-8 mt-8 md:mt-12 flex justify-center">
                <button 
                  onClick={() => navigate(`/${basePath}`)}
                  className="w-full sm:w-auto px-12 py-3 md:py-4 bg-taeil-dark text-white font-bold rounded hover:bg-opacity-90 transition-colors"
                >
                  목록보기
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
