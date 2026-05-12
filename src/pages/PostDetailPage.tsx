import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { newsData } from '../data/news';
import { socialData } from '../data/social';
import SubLayout from '../components/SubLayout';

interface PostDetailPageProps {
  type: 'news' | 'social';
}

const PostDetailPage: React.FC<PostDetailPageProps> = ({ type }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const data = type === 'news' ? newsData : socialData;
  const currentMenu = type === 'news' ? 'News' : '사회공헌';
  const basePath = type === 'news' ? 'news' : 'social';
  const activePath = type === 'news' ? '/news' : '/social';
  
  const post = data.find((item) => item.id === Number(id));

  const sideMenuItems = [
    { name: 'News', desc: '태일씨앤티의 최신 소식을 알려드립니다.', path: '/news' },
    { name: '사회공헌', desc: '함께 나누는 따뜻한 세상을 만들어갑니다.', path: '/social' },
    { name: '홍보자료', desc: '태일씨앤티의 다양한 홍보 자료를 확인하세요.', path: '/pr-material' },
  ];

  if (!post) {
    return (
      <SubLayout title="홍보센터" menuItems={sideMenuItems} activePath={activePath}>
        <div className="flex flex-col items-center justify-center min-h-[40vh]">
          <p className="text-gray-500 text-lg">게시글을 찾을 수 없습니다.</p>
          <button onClick={() => navigate(`/${basePath}`)} className="mt-6 text-green-700 font-bold hover:underline">목록으로 돌아가기</button>
        </div>
      </SubLayout>
    );
  }

  return (
    <SubLayout title="홍보센터" menuItems={sideMenuItems} activePath={activePath}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <article className="max-w-4xl">
          <header className="mb-12 border-b border-gray-200 pb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6 leading-tight">{post.title}</h2>
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-bold">{currentMenu}</span>
              <span>작성일: {post.date}</span>
            </div>
          </header>

          <div 
            className="prose prose-lg max-w-none mb-16 text-zinc-700 leading-relaxed font-normal"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.detailImages && post.detailImages.length > 0 && (
            <div className="space-y-8 mb-16">
              {post.detailImages.map((img, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full bg-gray-50 rounded-2xl overflow-hidden shadow-sm"
                >
                  <img 
                    src={img} 
                    alt={`${post.title} 상세 이미지 ${index + 1}`} 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          )}

          <div className="border-t border-gray-200 pt-12 mt-12 flex justify-center">
            <button 
              onClick={() => navigate(`/${basePath}`)}
              className="px-16 py-4 bg-zinc-900 text-white font-bold rounded-full hover:bg-zinc-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
            >
              목록으로 돌아가기
            </button>
          </div>
        </article>
      </motion.div>
    </SubLayout>
  );
};

export default PostDetailPage;
