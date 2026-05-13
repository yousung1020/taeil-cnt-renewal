import React from 'react';
import { motion } from 'framer-motion';
import SubLayout from '../components/SubLayout';

const YoutubePage: React.FC = () => {
  const sideMenuItems = [
    { name: 'News', desc: '태일씨앤티의 최신 소식을 알려드립니다.', path: '/news' },
    { name: '사회공헌', desc: '함께 나누는 따뜻한 세상을 만들어갑니다.', path: '/social' },
    { name: '유튜브', desc: '태일씨앤티의 다양한 영상을 확인하세요.', path: '/youtube' },
  ];

  return (
    <SubLayout title="PR CENTER" subtitle="홍보센터" menuItems={sideMenuItems} activePath="/youtube">
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
        <div className="border-b border-gray-100 pb-8 mb-12">
          <h3 className="text-3xl font-bold text-zinc-900">유튜브</h3>
          <p className="text-gray-500 mt-2 text-lg">태일씨앤티의 다양한 영상을 확인하세요.</p>
        </div>

        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/5Z3fGjtwe4Y?start=521"
            title="태일씨앤티 유튜브 영상"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-8 p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
          <h4 className="text-xl font-bold text-zinc-900 mb-4">태일씨앤티 공식 유튜브</h4>
          <p className="text-gray-600 leading-relaxed">
            태일씨앤티의 전문적인 기술력과 현장의 생생한 모습을 영상으로 만나보세요.
            끊임없는 혁신과 도전을 통해 건설 산업의 미래를 열어가는 태일씨앤티의 노력을 담았습니다.
          </p>
          <a
            href="https://www.youtube.com/@%ED%83%9C%EC%9D%BC%EC%94%A8%EC%95%A4%ED%8B%B0%EA%B2%BD%EC%98%81%EA%B8%B0%ED%9A%8D%EC%8B%A4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-green-600 font-bold hover:text-green-700 transition-colors"
          >
            유튜브에서 보기
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </motion.div>
    </SubLayout>
  );
};

export default YoutubePage;
