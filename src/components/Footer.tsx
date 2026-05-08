import { motion } from 'framer-motion';

export default function Footer() {
  const familySites = [
    { name: '테일 인트라넷', url: '#' },
    { name: '테일 NAS', url: '#' },
    { name: '테일 원격지원', url: '#' },
  ];

  return (
    <footer className="bg-[#0a0a0b] border-t border-white/10 text-white/50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* 기업 정보 영역 */}
          <div className="space-y-6 flex-grow">
            <img src="./images/태일-로고-removebg-preview.png" alt="태일씨앤티" className="h-8 brightness-90" />
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-white/80 font-medium">
              <a href="./#회사소개" className="hover:text-green-400 transition-colors">회사소개</a>
              <a href="./#개인정보처리방침" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="./#이메일무단수집거부" className="hover:text-white transition-colors">이메일무단수집거부</a>
            </div>

            <div className="text-[14px] leading-relaxed font-light space-y-1">
              <p>(주)태일씨앤티 서울시 금천구 가산디지털2로 101( 가산동 549-1 ) 한라원앤원타워 B동 17층 1701호</p>
              <p>TEL 070-8897-0761 &nbsp; | &nbsp; FAX 02-2101-2141</p>
              <p className="mt-4 uppercase tracking-wider text-[12px] opacity-40">COPYRIGHT (c) BY TAEILCNT, ALL RIGHTS RESERVED.</p>
            </div>
          </div>

          {/* 패밀리 사이트 드롭다운 (푸터용) */}
          <div className="w-full lg:w-48">
            <select 
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-sm text-white/70 outline-none focus:border-green-500 transition-colors"
              onChange={(e) => e.target.value && window.open(e.target.value, '_blank')}
            >
              <option value="" className="bg-zinc-900">FAMILY SITE</option>
              {familySites.map(site => (
                <option key={site.name} value={site.url} className="bg-zinc-900">{site.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
