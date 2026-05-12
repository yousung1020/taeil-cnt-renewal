import { Link } from 'react-router-dom';

export default function Footer() {
  const familySites = [
    { name: '테일 인트라넷', url: '#' },
    { name: '테일 NAS', url: '#' },
    { name: '테일 원격지원', url: '#' },
  ];

  return (
    <footer className="bg-[#0a0a0b] border-t border-white/10 text-white/40 py-6 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* 기업 정보 영역 - 간격 최적화 */}
          <div className="space-y-3 flex-grow">
            <img src="/images/logo-footer.png" alt="태일씨앤티" className="h-10 md:h-12 brightness-90" />
            
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-[13px] text-white/60 font-medium">
              <Link to="/about/greetings" className="hover:text-green-400 transition-colors">회사소개</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
              <Link to="/email-policy" className="hover:text-white transition-colors">이메일무단수집거부</Link>
            </div>

            <div className="text-[12px] leading-snug font-normal">
              <p>(주)태일씨앤티 서울시 금천구 가산디지털2로 101( 가산동 549-1 ) 한라원앤원타워 B동 17층 1701호</p>
              <p className="mt-0.5">TEL 070-8897-0761 &nbsp; | &nbsp; FAX 02-2101-2141</p>
              <p className="mt-2 uppercase tracking-wider text-[11px] opacity-30">COPYRIGHT (c) BY TAEILCNT, ALL RIGHTS RESERVED.</p>
            </div>
          </div>

          {/* 패밀리 사이트 드롭다운 (푸터용) */}
          <div className="w-full lg:w-40">
            <select 
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-1.5 text-[12px] text-white/50 outline-none focus:border-green-900 transition-colors"
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
