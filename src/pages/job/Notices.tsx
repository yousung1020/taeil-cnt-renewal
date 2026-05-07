export function Notices() {
  return (
    <div className="animate-fade-in-up space-y-12">
      <div className="mb-16 border-b border-gray-900 pb-6 flex items-end justify-between">
        <h3 className="text-3xl font-bold text-gray-900 tracking-tight">채용공고</h3>
        <span className="text-sm font-medium text-green-600 tracking-widest uppercase">Notices</span>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-6 flex items-center justify-center text-sm font-medium text-gray-800">
        <svg className="w-5 h-5 mr-3 shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        입사지원서를 허위로 작성한 경우 입사가 취소됩니다.
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-600 text-sm">전체 <span className="font-bold text-gray-900">0</span>건</div>
        <div className="flex border border-gray-300 bg-white">
          <select className="px-4 py-2 border-r border-gray-300 outline-none bg-transparent text-gray-600 text-sm cursor-pointer">
            <option>선택</option>
          </select>
          <input type="text" placeholder="검색어를 입력하세요" className="px-4 py-2 outline-none w-full md:w-64 text-sm" />
          <button className="bg-gray-900 text-white px-6 py-2 flex items-center justify-center hover:bg-gray-800 transition-colors text-sm font-medium tracking-wide">
             검색
          </button>
        </div>
      </div>

      <div className="border-t-2 border-gray-900">
        <table className="w-full text-center text-sm md:text-base">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-700 font-medium">
              <th className="py-4 px-4">제목</th>
              <th className="py-4 px-4 w-32 md:w-48 border-l border-gray-200">마감기한</th>
              <th className="py-4 px-4 w-24 md:w-32 border-l border-gray-200">접수상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3} className="py-32 text-gray-400 border-b border-gray-200 bg-white font-light">
                등록된 채용공고가 없습니다.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}