import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

interface SubLayoutProps {
  title: string;
  menuItems: { name: string; desc: string; path?: string }[];
  activePath: string;
  children: React.ReactNode;
}

export default function SubLayout({ title, menuItems, activePath, children }: SubLayoutProps) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* 서브 타이틀 섹션 (순수 배경색만 사용) */}
      <section className="bg-zinc-900 h-[20vh] md:h-[25vh] flex items-center justify-center border-b border-white/10">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            {title}
          </motion.h1>
          <div className="mt-4 w-10 h-1 bg-green-500 mx-auto rounded-full" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col md:flex-row gap-16 relative">
        {/* 공통 좌측 네비게이션 (LNB) */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-32">
            <h2 className="text-xl font-black text-green-700 mb-8 border-l-4 border-green-700 pl-4 uppercase tracking-tighter">
              {title}
            </h2>
            <nav>
              <ul className="space-y-1">
                {menuItems.map((item) => {
                  const itemPath = item.path || `#${item.name}`;
                  // URL의 전체 경로 혹은 해시 부분이 일치하는지 확인
                  const isActive = activePath === itemPath || activePath === `#${item.name}`;
                  
                  return (
                    <li key={item.name}>
                      <Link 
                        to={itemPath} 
                        className={`block px-4 py-3 text-lg transition-all ${isActive ? 'bg-green-700 text-white font-bold rounded shadow-md' : 'text-gray-400 hover:text-green-700 hover:pl-6'}`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </aside>

        {/* 동적 콘텐츠 영역 */}
        <main className="flex-grow min-h-[50vh]">
          {children}
        </main>
      </div>

      {/* 우측 하단 고정 화살표 */}
      <div className="fixed bottom-10 right-10 z-[100] flex flex-col gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center shadow-2xl border border-white/10 transition-all ${showTopBtn ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToBottom}
          className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center shadow-2xl border border-white/10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </motion.button>
      </div>

      <Footer />
    </div>
  );
}
