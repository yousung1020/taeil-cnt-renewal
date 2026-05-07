import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#26282b] text-gray-400 py-16 px-8 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-6 text-white text-lg font-bold">
             <div className="w-5 h-5 bg-green-600 flex items-center justify-center text-[10px]">T</div>
             태일씨앤티
          </div>
          <p>(주)태일씨앤티 서울시 금천구 가산디지털2로 101(가산동 548-1)</p>
          <p>한라원앤원타워 B동 17층 1701호</p>
          <p>TEL 070-8897-0761 | FAX 02-2101-2141</p>
          <p className="pt-4 text-gray-500 font-light">COPYRIGHT (c) BY TAEIL CNT. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
           <div className="flex flex-wrap gap-6 text-gray-300">
             <Link to="#" className="hover:text-white transition-colors">회사소개</Link>
             <Link to="#" className="hover:text-white transition-colors font-medium">개인정보처리방침</Link>
             <Link to="#" className="hover:text-white transition-colors">이메일무단수집거부</Link>
           </div>
           <div className="w-full md:w-auto">
             <select 
               className="w-full md:w-48 bg-[#1f2124] border border-gray-600 text-gray-300 py-2 px-4 outline-none hover:border-gray-400 transition-colors appearance-none cursor-pointer"
               aria-label="Family Site"
             >
               <option>FAMILY SITE</option>
             </select>
           </div>
        </div>
      </div>
    </footer>
  );
}