import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-colors duration-300 backdrop-blur-sm ${
        isHome 
          ? 'text-white bg-black/30 hover:bg-black/80' 
          : 'text-gray-900 bg-white border-b border-gray-200'
      }`}>
        <Link to="/" className="flex items-center space-x-2">
          {/* Logo placeholder */}
          <div className="flex items-center">
             <div className="w-8 h-8 bg-green-600 flex items-center justify-center font-bold text-xs text-white">T</div>
             <span className="text-xl font-bold tracking-tight ml-2">태일씨앤티</span>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="#" className="hover:text-green-500 transition-colors">회사소개</Link>
          <Link to="#" className="hover:text-green-500 transition-colors">사업실적</Link>
          <Link to="/tech/vision" className="hover:text-green-500 transition-colors">기술혁신</Link>
          <Link to="#" className="hover:text-green-500 transition-colors">홍보센터</Link>
          <Link to="/job/system" className="hover:text-green-500 transition-colors">인재채용</Link>
          <Link to="#" className="hover:text-green-500 transition-colors">ESG경영</Link>
        </nav>
        <button 
          className={`focus:outline-none hover:text-green-500 ${isHome ? 'text-white' : 'text-gray-800'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             {isMenuOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
             ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
             )}
          </svg>
        </button>
      </header>

      {/* Full Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 pt-32 px-8 text-white overflow-y-auto pb-10">
           <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 text-sm">
              <div className="space-y-4">
                 <h4 className="text-lg font-bold border-b border-gray-700 pb-2">회사소개</h4>
                 <ul className="space-y-2 text-gray-400">
                    <li><Link to="#" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">인사말</Link></li>
                    <li><Link to="#" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">경영이념</Link></li>
                    <li><Link to="#" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">회사연혁</Link></li>
                    <li><Link to="#" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">기구조직도</Link></li>
                    <li><Link to="#" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">면허/인증</Link></li>
                    <li><Link to="#" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">찾아오시는길</Link></li>
                 </ul>
              </div>
              <div className="space-y-4">
                 <h4 className="text-lg font-bold border-b border-gray-700 pb-2">사업실적</h4>
                 <ul className="space-y-2 text-gray-400">
                    <li><Link to="#" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">공사수주 현황</Link></li>
                    <li><Link to="#" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">건설시공능력</Link></li>
                    <li><Link to="#" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">품질경영</Link></li>
                    <li><Link to="#" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">안전경영</Link></li>
                 </ul>
              </div>
              <div className="space-y-4">
                 <h4 className="text-lg font-bold border-b border-gray-700 pb-2">기술혁신</h4>
                 <ul className="space-y-2 text-gray-400">
                    <li><Link to="/tech/vision" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">기술혁신 비전</Link></li>
                    <li><Link to="/tech/news" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">기술혁신 News</Link></li>
                 </ul>
              </div>
              <div className="space-y-4">
                 <h4 className="text-lg font-bold border-b border-gray-700 pb-2">홍보센터</h4>
                 <ul className="space-y-2 text-gray-400">
                    <li><Link to="#" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">News</Link></li>
                    <li><Link to="#" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">사회공헌</Link></li>
                    <li><Link to="#" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">홍보자료</Link></li>
                 </ul>
              </div>
              <div className="space-y-4">
                 <h4 className="text-lg font-bold border-b border-gray-700 pb-2">인재채용</h4>
                 <ul className="space-y-2 text-gray-400">
                    <li><Link to="/job/system" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">인사제도</Link></li>
                    <li><Link to="/job/benefits" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">복리후생</Link></li>
                    <li><Link to="/job/guide" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">채용가이드</Link></li>
                    <li><Link to="/job/notices" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">채용공고</Link></li>
                    <li><Link to="/job/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">채용FAQ</Link></li>
                 </ul>
              </div>
              <div className="space-y-4">
                 <h4 className="text-lg font-bold border-b border-gray-700 pb-2">ESG경영</h4>
                 <ul className="space-y-2 text-gray-400">
                    <li><Link to="#" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">품질경영</Link></li>
                    <li><Link to="#" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">안전경영</Link></li>
                    <li><Link to="#" onClick={() => setIsMenuOpen(false)} className="hover:text-green-400">ESG경영</Link></li>
                 </ul>
              </div>
           </div>
        </div>
      )}
    </>
  );
}