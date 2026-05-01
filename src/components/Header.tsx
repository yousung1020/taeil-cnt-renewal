import { useState } from 'react';
import { motion, useScroll, AnimatePresence, useMotionValueEvent } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Track scroll position to toggle header state
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const menuItems = [
    { title: '회사소개', sub: ['인사말', '경영이념', '회사연혁', '기구조직도', '업·면허/인증'] },
    { title: '사업실적', sub: ['공사수주 현황', '건설시공능력', '품질경영', '안전경영'] },
    { title: '기술혁신', sub: ['기술혁신 비전', '기술혁신 News'] },
    { title: '홍보센터', sub: ['News', '사회공헌', '홍보자료'] },
    { title: '인재채용', sub: ['인사제도', '복리후생', '채용가이드'] },
    { title: 'ESG경영', sub: ['품질경영', '안전경영', 'ESG경영'] },
  ];

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 py-4"
        animate={{
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: isScrolled ? 'blur(15px)' : 'blur(0px)',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0)',
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <div className="flex items-center">
          <img src="/images/태일-로고-removebg-preview.png" alt="태일씨앤티 로고" className="h-10 md:h-12 object-contain" />
        </div>
        
        <nav className="hidden lg:flex space-x-12 text-sm font-medium">
          {menuItems.map(item => (
            <a key={item.title} href={`#${item.title}`} className="text-white hover:text-gray-300 transition-colors uppercase tracking-wider">{item.title}</a>
          ))}
        </nav>

        <div className="flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-300 focus:outline-none z-[70] p-2"
          >
            <div className="w-8 h-6 flex flex-col justify-between relative">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white block rounded-full origin-center"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-white block rounded-full"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white block rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-black/95 z-[55] pt-32 pb-12 px-6 md:px-12 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 md:gap-8">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <h3 className="text-white text-xl font-bold mb-6 border-b border-white/20 pb-2">{item.title}</h3>
                  <ul className="space-y-4">
                    {item.sub.map(sub => (
                      <li key={sub}>
                        <a href="#" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-8 items-center text-gray-500 text-sm">
              <p>© TAEIL C&T. ALL RIGHTS RESERVED.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white">개인정보처리방침</a>
                <a href="#" className="hover:text-white">이메일무단수집거부</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
