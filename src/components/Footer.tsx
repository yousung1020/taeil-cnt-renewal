export default function Footer() {
  return (
    <footer className="bg-[#0a0a0b] border-t border-white/10 text-gray-400 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-6">
          <img src="/images/태일-로고-removebg-preview.png" alt="태일씨앤티" className="h-8 opacity-100 brightness-110" />
          <div className="space-y-3 text-sm leading-relaxed font-normal text-gray-500">
            <p className="flex flex-col md:flex-row md:gap-3">
              <span className="text-gray-300 font-semibold w-20">상호</span> 
              <span>태일씨앤티(주)</span>
            </p>
            <p className="flex flex-col md:flex-row md:gap-3">
              <span className="text-gray-300 font-semibold w-20">대표이사</span> 
              <span>배준희</span>
            </p>
            <p className="flex flex-col md:flex-row md:gap-3">
              <span className="text-gray-300 font-semibold w-20">주소</span> 
              <span>서울특별시 금천구 가산디지털2로 101 한신S-델타 5층 1701호</span>
            </p>
            <p className="flex flex-col md:flex-row md:gap-6">
              <span><span className="text-gray-300 font-semibold mr-2">TEL</span> 02-000-0000</span>
              <span><span className="text-gray-300 font-semibold mr-2">FAX</span> 02-000-0000</span>
            </p>
          </div>
        </div>
        
        <div className="flex flex-col space-y-4 text-sm font-semibold">
          <h4 className="text-white text-xs uppercase tracking-widest opacity-30 mb-2 font-bold">Links</h4>
          <a href="#" className="hover:text-green-500 transition-colors">회사소개서 다운로드</a>
          <a href="#" className="hover:text-green-500 transition-colors">이용약관</a>
          <a href="#" className="hover:text-green-500 transition-colors">개인정보처리방침</a>
          <a href="#" className="hover:text-green-500 transition-colors">이메일무단수집거부</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium text-gray-600 uppercase tracking-tighter">
        <p>&copy; {new Date().getFullYear()} TAEIL C&T. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <span className="hover:text-gray-300 cursor-pointer">FAMILY SITE +</span>
        </div>
      </div>
    </footer>
  );
}