import { useState } from "react";
import {
  motion,
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isFamilySiteOpen, setIsFamilySiteOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log(latest); 
  });
  const menuItems = [
    {
      title: "회사소개",
      sub: [
        { name: "인사말", path: "/about/greetings" },
        { name: "경영이념", path: "/about/philosophy" },
        { name: "회사연혁", path: "/about/history" },
        { name: "기구조직도", path: "/about/organization" },
        { name: "업·면허/인증", path: "/about/certifications" },
        { name: "주거래 시공사", path: "/about/partners" },
        { name: "찾아오시는 길", path: "/about/location" },
      ],
      link: "/about/greetings",
    },
    {
      title: "사업실적",
      sub: [
        { name: "공사수주 현황", path: "/work/projects" },
        { name: "건설시공능력", path: "/work/capability" },
        { name: "품질경영", path: "/work/quality" },
        { name: "안전경영", path: "/work/safety" },
      ],
      link: "/work/projects",
    },
    {
      title: "기술혁신",
      sub: [
        { name: "기술혁신 비전", path: "/tech/vision" },
        { name: "기술혁신 News", path: "/tech/news" },
      ],
      link: "/tech/vision",
    },
    {
      title: "홍보센터",
      sub: [
        { name: "News", path: "/news" },
        { name: "사회공헌", path: "/social" },
        { name: "유튜브", path: "/youtube" },
      ],
      link: "/news",
    },
    {
      title: "인재채용",
      sub: [
        { name: "인사제도", path: "/job/system" },
        { name: "복리후생", path: "/job/benefits" },
        { name: "채용가이드", path: "/job/guide" },
        { name: "채용공고", path: "/job/notices" },
        { name: "채용FAQ", path: "/job/faq" },
      ],
      link: "/job/system",
    },
    {
      title: "ESG경영",
      sub: [
        { name: "ESG", path: "/esg/vision" },
        { name: "환경경영", path: "/esg/environmental" },
        { name: "윤리경영", path: "/esg/ethical" },
      ],
      link: "/esg/vision",
    },
  ];

  const familySites = [
    { name: "테일 인트라넷", url: "#" },
    { name: "테일 NAS", url: "#" },
    { name: "테일 원격지원", url: "#" },
  ];

  const toggleMobileMenu = () => {
    if (!isOpen) {
      setIsMegaMenuOpen(false);
      setIsFamilySiteOpen(false);
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AnimatePresence>
        {isMegaMenuOpen && !isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-[58]"
            onMouseEnter={() => setIsMegaMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.header
        className="fixed top-0 left-0 right-0 z-[60]"
        onMouseLeave={() => setIsMegaMenuOpen(false)}
        animate={{
          backgroundColor: isOpen ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.95)",
          backdropFilter: isOpen ? "blur(0px)" : "blur(15px)",
          borderBottom: isOpen
            ? "1px solid rgba(255,255,255,0)"
            : "1px solid rgba(255,255,255,0.1)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            className={`flex items-center ${isOpen ? "pointer-events-none" : ""}`}
          >
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo-transparent.png"
                alt="태일씨앤티 로고"
                className="h-10 md:h-12 object-contain"
              />
            </Link>
          </motion.div>

          <motion.nav
            animate={{ opacity: isOpen ? 0 : 1 }}
            className={`hidden lg:flex items-center space-x-8 xl:space-x-12 h-full ${isOpen ? "pointer-events-none" : ""}`}
            onMouseEnter={() => !isOpen && setIsMegaMenuOpen(true)}
          >
            {menuItems.map((item) => (
              <div key={item.title} className="relative py-4">
                <Link
                  to={item.link}
                  className="text-white hover:text-green-400 transition-colors text-[18px] font-bold tracking-tight"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </motion.nav>

          <div className="flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-green-400 focus:outline-none z-[70] p-2"
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
                  animate={
                    isOpen ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }
                  }
                  className="w-full h-0.5 bg-white block rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMegaMenuOpen && !isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hidden lg:block w-full bg-green-950/95 backdrop-blur-2xl border-t border-white/10 overflow-hidden shadow-2xl"
            >
              <div className="max-w-7xl mx-auto px-12 py-12 grid grid-cols-6 gap-8">
                {menuItems.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-green-400 text-[18px] font-bold mb-6 border-b border-green-400/30 pb-2">
                      <Link
                        to={item.link}
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <ul className="space-y-3">
                      {item.sub.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.path}
                            onClick={() => setIsMegaMenuOpen(false)}
                            className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all text-[16px]"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] pt-20 pb-12 px-6 md:px-12 overflow-y-auto flex flex-col"
          >
            <div className="fixed inset-0 bg-[#042512]/90 backdrop-blur-3xl z-[-1]" />
            <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-between mt-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 mb-12">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <h3 className="text-white text-xl font-bold mb-6 border-b border-white/20 pb-2">
                      <Link to={item.link} onClick={() => setIsOpen(false)}>
                        {item.title}
                      </Link>
                    </h3>
                    <ul className="space-y-4">
                      {item.sub.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className="text-white/70 hover:text-white hover:translate-x-2 inline-block transition-all text-lg font-normal"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-10 pb-8 mt-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-[15px]">
                      <Link
                        to="/about/greetings"
                        className="text-white hover:text-green-400 transition-colors font-medium"
                      >
                        회사소개
                      </Link>
                      <Link
                        to="/privacy"
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        개인정보처리방침
                      </Link>
                      <Link
                        to="/email-policy"
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        이메일무단수집거부
                      </Link>
                    </div>
                    <div className="text-white/40 text-[14px] leading-relaxed font-normal">
                      <p>
                        (주)태일씨앤티 서울시 금천구 가산디지털2로 101( 가산동
                        549-1 ) 한라원앤원타워 B동 17층 1701호
                      </p>
                      <p className="mt-1 text-white/50">
                        TEL 070-8897-0761 &nbsp; | &nbsp; FAX 02-2101-2141
                      </p>
                      <p className="mt-4 uppercase tracking-wider text-[12px]">
                        COPYRIGHT (c) BY TAEILCNT, ALL RIGHTS RESERVED.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-end gap-6 w-full sm:w-auto">
                    <motion.a
                      href="#지원하기"
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-3 py-2 text-white hover:text-green-400 transition-all w-full sm:w-auto justify-center sm:justify-end"
                    >
                      <span className="text-[20px] font-bold tracking-tight">
                        지원하기
                      </span>
                      <svg
                        className="w-6 h-6 transform group-hover:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.a>

                    <div className="relative w-full sm:w-auto">
                      <button
                        onClick={() => setIsFamilySiteOpen(!isFamilySiteOpen)}
                        className="flex items-center justify-between gap-4 px-6 py-2 bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 rounded-md transition-all w-full sm:w-48"
                      >
                        <span className="text-[14px] font-medium uppercase tracking-wider">
                          Family Site
                        </span>
                        <svg
                          className={`w-4 h-4 transition-transform ${isFamilySiteOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {isFamilySiteOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute bottom-full left-0 sm:left-auto sm:right-0 mb-2 w-full sm:w-48 bg-gray-900 border border-white/10 rounded-md overflow-hidden shadow-2xl z-[80]"
                          >
                            {familySites.map((site) => (
                              <a
                                key={site.name}
                                href={site.url}
                                className="block px-4 py-3 text-[14px] text-white/70 hover:text-white hover:bg-green-900/50 transition-all border-b border-white/5 last:border-0"
                              >
                                {site.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
