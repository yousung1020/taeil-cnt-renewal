import { useState, useEffect } from 'react';
import Header from './components/Header';
import ESG from './components/ESG';
import About from './components/About';
import Work from './components/Work';
import Innovation from './components/Innovation';
import PR from './components/PR';
import Recruit from './components/Recruit';
import Footer from './components/Footer';

function App() {
  const getDecodedHash = () => decodeURIComponent(window.location.hash) || '#home';
  const [currentPath, setCurrentPath] = useState(getDecodedHash());

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getDecodedHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 각 카테고리별 서브페이지 해시 정의
  const aboutSubPages = ['#인사말', '#경영이념', '#회사연혁', '#기구조직도', '#업·면허/인증', '#주거래 시공사', '#찾아오시는 길'];
  const workSubPages = ['#공사수주 현황', '#건설시공능력', '#품질경영', '#안전경영'];
  const innovationSubPages = ['#기술혁신 비전', '#기술혁신 News'];
  const prSubPages = ['#News', '#사회공헌', '#홍보자료'];
  const recruitSubPages = ['#인사제도', '#복리후생', '#채용가이드'];
  const esgSubPages = ['#ESG', '#환경경영', '#윤리경영'];

  const isSubPage = [
    ...aboutSubPages,
    ...workSubPages,
    ...innovationSubPages,
    ...prSubPages,
    ...recruitSubPages,
    ...esgSubPages
  ].includes(currentPath);

  return (
    <div className="bg-black min-h-screen font-sans">
      <Header />
      <main>
        {aboutSubPages.includes(currentPath) && <About />}
        {workSubPages.includes(currentPath) && <Work />}
        {innovationSubPages.includes(currentPath) && <Innovation />}
        {prSubPages.includes(currentPath) && <PR />}
        {recruitSubPages.includes(currentPath) && <Recruit />}
        {esgSubPages.includes(currentPath) && <ESG />}
        
        {!isSubPage && (
          <div className="h-screen flex items-center justify-center">
            <h2 className="text-white/20 text-2xl font-bold italic uppercase tracking-widest">
              Main Section (Scroll Snap Area)
            </h2>
          </div>
        )}
      </main>
      {isSubPage && <Footer />}
    </div>
  );
}

export default App;