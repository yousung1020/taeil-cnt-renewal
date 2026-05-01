import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import megaContent from './data/mega-content.json';

// --- 네비게이션 구조 (21개 항목 완벽 반영) ---
const NAVIGATION_STRUCTURE = [
  {
    title: '회사소개',
    basePath: '/company',
    items: [
      { label: '인사말', path: '/company/greeting', data: megaContent.company.greeting },
      { label: '경영이념', path: '/company/philosophy', data: megaContent.company.philosophy },
      { label: '회사연혁', path: '/company/history', data: '30년 전통의 건설 역사' },
      { label: '기구조직도', path: '/company/organization', data: '효율적 의사결정을 위한 본부제 운영' },
      { label: '업·면허/인증', path: '/company/certificates', data: '철근콘크리트공사업, 토공사업 등 보유' },
      { label: '주거래 시공사', path: '/company/partners', data: '삼성물산, 현대건설, GS건설 등' },
      { label: '찾아오는길', path: '/company/location', data: megaContent.company.location }
    ]
  },
  {
    title: '주요실적',
    basePath: '/performance',
    items: [
      { label: '공사수주 현황', path: '/performance/status', data: "전국 주요 현장 시공 중" },
      { label: '건설시공능력', path: '/performance/capacity', data: "상위 1% 시공능력평가액" }
    ]
  },
  {
    title: '품질/안전경영',
    basePath: '/management',
    items: [
      { label: '품질경영', path: '/management/quality', data: "ISO 9001 인증 품질 시스템" },
      { label: '안전경영', path: '/management/safety', data: "중대재해 Zero 달성 목표" }
    ]
  },
  {
    title: '기술혁신',
    basePath: '/technology',
    items: [
      { label: '기술혁신 비전', path: '/technology/vision', data: "스마트 건설 선도 기업" },
      { label: '기술혁신 News', path: '/technology/news', data: "최신 특허 및 신공법 소식" }
    ]
  },
  {
    title: '홍보센터',
    basePath: '/pr',
    items: [
      { label: 'News', path: '/pr/news', data: "태일씨앤티 뉴스" },
      { label: '사회공헌', path: '/pr/social', data: "지역 나눔 활동" },
      { label: '홍보자료', path: '/pr/media', data: "카탈로그 및 영상" }
    ]
  },
  {
    title: '인재채용',
    basePath: '/careers',
    items: [
      { label: '인사제도', path: '/careers/system', data: "공정한 평가와 보상" },
      { label: '복리후생', path: '/careers/welfare', data: "최고의 근무 환경 제공" },
      { label: '채용가이드', path: '/careers/guide', data: "인재상 및 채용 절차" },
      { label: '채용공고', path: '/careers/jobs', data: "현재 진행 중인 공고" },
      { label: '채용FAQ', path: '/careers/faq', data: "자주 묻는 질문" }
    ]
  }
];

const Navbar = () => (
  <header className="fixed top-0 w-full z-50 nav-glass border-b border-white/5">
    <div className="max-w-[1600px] mx-auto px-8 h-24 flex justify-between items-center">
      <Link to="/" className="flex items-center group">
        <img src="./source/logo_no_bg.png" alt="태일로고" className="h-16 w-auto group-hover:scale-105 transition-transform duration-300" />
      </Link>
      <nav className="hidden lg:flex items-center gap-10 h-full">
        {NAVIGATION_STRUCTURE.map(nav => (
          <div key={nav.title} className="relative group h-full flex items-center">
            <Link to={nav.items[0].path} className="text-[16px] font-bold text-gray-400 group-hover:text-white transition-all uppercase">
              {nav.title}
            </Link>
            <div className="absolute top-full left-0 bg-[#0c0c0c]/95 backdrop-blur-xl border border-white/5 p-4 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-2xl z-50 rounded-b-xl">
              {nav.items.map(item => (
                <Link key={item.path} to={item.path} className="block py-3 px-4 text-[14px] text-gray-500 hover:text-brand-green hover:bg-white/5 transition-all font-bold">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
      <button className="bg-brand-green text-black px-8 py-2.5 rounded-full font-black text-sm uppercase hover:bg-white transition-all">Contact Us</button>
    </div>
  </header>
);

const Home = () => (
  <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar">
    
    {/* 1. Hero Section: 영상 유지 */}
    <section className="relative h-screen flex snap-start flex-shrink-0 overflow-hidden bg-matte-black">
      <div className="relative z-10 w-full lg:w-[60%] flex items-center px-8 lg:px-24 bg-matte-black">
        <div className="max-w-3xl">
          <span className="section-label mb-8 text-brand-green font-black tracking-[0.4em]">Engineering Integrity</span>
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.1] mb-12 tracking-tighter">
            대한민국의 기초를 <br />
            <span className="text-brand-green underline underline-offset-[15px] decoration-8 decoration-brand-green/20">정직</span>으로 <br />
            세웁니다.
          </h2>
          <Link to="/company/greeting" className="inline-block bg-brand-green text-black px-12 py-5 font-black text-lg hover:scale-105 transition-all rounded-sm uppercase tracking-widest shadow-2xl">
            Start Discovery
          </Link>
        </div>
      </div>
      <div className="hidden lg:block lg:w-[40%] h-full relative bg-gray-900">
        <video key="hero-video" autoPlay muted loop playsInline className="w-full h-full object-cover grayscale-[20%]">
          <source src="./source/company_intro_final.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-transparent to-transparent" />
      </div>
    </section>

    {/* 2. Overview Section: 이미지 제거 및 수치 강조 */}
    <section className="relative h-screen flex snap-start flex-shrink-0 bg-[#050505] overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8 w-full flex flex-col justify-center">
        <span className="section-label mb-10 text-brand-yellow font-black">Market Leader</span>
        <h3 className="text-6xl md:text-[5rem] font-black mb-20 leading-none uppercase italic italic tracking-tighter text-white/90">Strong <br />Fundamentals.</h3>
        <div className="grid md:grid-cols-3 gap-16 border-t border-white/10 pt-16">
          <div>
            <div className="text-7xl font-black text-brand-green mb-4 italic italic">1,548<span className="text-2xl not-italic ml-2 text-gray-600">억</span></div>
            <p className="text-sm font-black text-gray-400 uppercase tracking-[0.4em]">시공능력평가액</p>
          </div>
          <div>
            <div className="text-7xl font-black text-white mb-4 italic italic">A-</div>
            <p className="text-sm font-black text-gray-400 uppercase tracking-[0.4em]">기업 신용 등급</p>
          </div>
          <div className="flex items-center">
             <p className="text-xl text-gray-500 font-bold leading-relaxed border-l-2 border-brand-green pl-8 uppercase tracking-tighter">
                National Top Tier <br /> Specialty Contractor
             </p>
          </div>
        </div>
      </div>
    </section>

    {/* 3. Business Areas: 이미지 제거 및 미니멀 카드 */}
    <section className="relative h-screen flex snap-start flex-shrink-0 bg-matte-black overflow-hidden border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-8 w-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="section-label mb-6">Our Expertise</span>
            <h3 className="text-6xl font-black uppercase italic italic tracking-tighter">Core Business</h3>
          </div>
          <Link to="/business/rebar" className="text-brand-green font-bold text-sm uppercase tracking-widest border-b border-brand-green pb-2 hover:text-white transition-all">All Business Areas</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
           <div className="bg-[#111] p-16 border border-white/5 hover:border-brand-green transition-all group rounded-sm">
              <span className="text-brand-green font-black text-6xl mb-10 block opacity-20 group-hover:opacity-100 transition-opacity uppercase italic">01</span>
              <h4 className="text-4xl font-black mb-6">철근공사</h4>
              <p className="text-xl text-gray-400 font-light leading-loose">자동화 가공 시스템과 BIM 정밀 배근 기술의 완벽한 조화로 건축의 뼈대를 완성합니다.</p>
           </div>
           <div className="bg-[#111] p-16 border border-white/5 hover:border-brand-green transition-all group rounded-sm">
              <span className="text-brand-green font-black text-6xl mb-10 block opacity-20 group-hover:opacity-100 transition-opacity uppercase italic">02</span>
              <h4 className="text-4xl font-black mb-6">콘크리트공사</h4>
              <p className="text-xl text-gray-400 font-light leading-loose">고성능 배합 설계와 첨단 타설 장비를 통한 무결점 구조체 형성으로 최상의 품질을 보장합니다.</p>
           </div>
        </div>
      </div>
    </section>

    {/* 4. Careers Section: 이미지 제거 및 타이포 강조 */}
    <section className="relative h-screen snap-start bg-[#050505] flex flex-col justify-center items-center overflow-hidden">
       <div className="max-w-7xl mx-auto px-8 text-center">
          <span className="section-label mb-12 text-brand-green uppercase">Build your Legacy</span>
          <h4 className="text-7xl md:text-[10rem] font-black mb-16 tracking-tighter italic italic leading-none text-white opacity-90 uppercase">Join Us.</h4>
          <Link to="/careers/info" className="inline-block bg-brand-green text-black px-20 py-6 font-black text-xl hover:bg-white transition-all shadow-[0_0_50px_rgba(16,185,129,0.2)] uppercase tracking-widest">Recruitment</Link>
       </div>
       <footer className="absolute bottom-10 left-0 w-full px-8 flex justify-between items-center text-gray-700 font-black text-[10px] uppercase tracking-[0.5em]">
          <span>© 2026 TAEIL C&T Co., Ltd. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-12">
            <span className="hover:text-white cursor-pointer">LinkedIn</span>
            <span className="hover:text-white cursor-pointer">Instagram</span>
          </div>
       </footer>
    </section>
  </div>
);

const SubPage = () => {
  const location = useLocation();
  const currentNav = NAVIGATION_STRUCTURE.find(nav => location.pathname.startsWith(nav.basePath));
  const currentItem = currentNav?.items.find(item => item.path === location.pathname);

  if (!currentNav || !currentItem) return <div className="pt-40 text-center text-white font-bold">페이지를 찾을 수 없습니다.</div>;

  return (
    <div className="pt-24 min-h-screen bg-matte-black text-white">
      <div className="h-64 bg-[#0a0a0a] border-b border-white/5 flex items-center justify-center">
        <h2 className="text-5xl font-black uppercase tracking-[0.3em]">{currentNav.title}</h2>
      </div>
      <div className="max-w-[1600px] mx-auto px-8 py-20 flex flex-col lg:flex-row gap-20">
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="sticky top-40 space-y-2">
            {currentNav.items.map(item => (
              <Link key={item.path} to={item.path} className={`block px-8 py-5 font-bold text-sm uppercase transition-all border-l-4 ${location.pathname === item.path ? 'border-brand-green bg-brand-green/5 text-white' : 'border-transparent text-gray-500 hover:text-white hover:bg-white/5'}`}>{item.label}</Link>
            ))}
          </div>
        </aside>
        <main className="flex-1">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <h3 className="text-5xl font-black mb-16 italic uppercase text-brand-green">{currentItem.label}</h3>
            <div className="bg-[#111] p-12 border border-white/5 rounded-sm relative shadow-2xl">
              {location.pathname === '/company/organization' ? (
                 <img src="./source/org_chart.jpg" alt="조직도" className="w-full h-auto" />
              ) : location.pathname === '/company/greeting' ? (
                 <div className="space-y-12 py-10">
                    <h4 className="text-brand-green font-black text-sm tracking-[0.3em] uppercase">Taeil C&T CEO Greeting</h4>
                    <p className="text-3xl md:text-4xl text-white leading-relaxed font-light italic">"{currentItem.data}"</p>
                    <div className="pt-10 border-t border-white/5 max-w-2xl text-gray-400 text-lg leading-loose">
                       <p>태일씨앤티는 창립 이래 철근 및 콘크리트 공사 전문업체로서 오직 한 길만을 걸어왔습니다.</p>
                       <p className="mt-4">우리는 보이지 않는 곳에서 건축물의 뼈대를 세우는 우리의 일이 곧 사회의 안전과 직결된다는 무거운 책임감을 가지고 있습니다. 정직한 시공과 끊임없는 기술 혁신으로 보답하겠습니다.</p>
                    </div>
                 </div>
              ) : (
                <p className="text-2xl text-white leading-relaxed font-light italic italic">"{currentItem.data}"</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-matte-black text-white font-sans selection:bg-brand-green/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company/*" element={<SubPage />} />
          <Route path="/performance/*" element={<SubPage />} />
          <Route path="/management/*" element={<SubPage />} />
          <Route path="/technology/*" element={<SubPage />} />
          <Route path="/pr/*" element={<SubPage />} />
          <Route path="/careers/*" element={<SubPage />} />
        </Routes>
      </div>
    </Router>
  );
}
