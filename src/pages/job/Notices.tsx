import { useState } from 'react';
import noticesData from '../../data/notices.json';

export function Notices() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotices = noticesData.filter(notice =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <div className="text-gray-600 text-sm">전체 <span className="font-bold text-gray-900">{filteredNotices.length}</span>건</div>
        <div className="flex border border-gray-300 bg-white rounded-lg overflow-hidden">
          <div className="relative border-r border-gray-300 shrink-0 bg-white">
            <select className="pl-4 pr-10 py-2.5 outline-none bg-transparent text-gray-600 text-sm cursor-pointer appearance-none">
              <option>제목</option>
            </select>
            <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="px-4 py-2.5 outline-none w-full md:w-64 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 flex items-center justify-center transition-colors shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Table Area (Matched to News style) */}
      <div className="bg-white border-x border-gray-200 border-t md:border-t-0">
        {/* Header - Hidden on Mobile */}
        <div className="hidden md:grid bg-gray-50 border-t-2 border-green-600 border-b border-gray-300 grid-cols-[1fr_160px_140px] items-stretch text-center shrink-0">
          <span className="text-sm font-bold text-gray-700 py-4 border-r border-gray-300">제목</span>
          <span className="text-sm font-bold text-gray-700 py-4 border-r border-gray-300">마감기한</span>
          <span className="text-sm font-bold text-gray-700 py-4">접수상태</span>
        </div>

        <div>
          {filteredNotices.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 border-b border-gray-200 animate-fade-in">
              <svg className="w-12 h-12 text-gray-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-500 text-sm">등록된 채용공고가 없습니다.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 border-b border-gray-200">
              {filteredNotices.map((notice) => (
                <div key={notice.id} className="flex flex-col md:grid md:grid-cols-[1fr_160px_140px] items-stretch hover:bg-gray-50/80 transition-all group cursor-pointer animate-fade-in">
                  {/* Status & Title & Date */}
                  <div className="pt-6 pb-5 px-6 md:px-10 text-left md:border-r border-gray-200">
                    {/* Status Tag - Top on Mobile */}
                    <div className="md:hidden mb-3">
                      <span className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full border ${
                        notice.status === '진행중' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                        notice.status === '마감임박' ? 'bg-red-50 text-red-600 border-red-100' :
                        'bg-gray-50 text-gray-500 border-gray-200'
                      }`}>
                        {notice.status}
                      </span>
                    </div>

                    <h5 className="font-bold text-gray-800 text-[15px] group-hover:text-green-700 transition-colors leading-snug">
                      {notice.title}
                    </h5>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-xs text-gray-400">{notice.date}</span>
                      <span className="md:hidden text-xs text-gray-300">|</span>
                      <span className="md:hidden text-xs text-green-600 font-semibold">마감: {notice.deadline}</span>
                    </div>
                  </div>

                  {/* Deadline - Desktop only */}
                  <div className="hidden md:flex py-5 items-center justify-center border-r border-gray-200 text-sm text-gray-600 font-medium">
                    {notice.deadline}
                  </div>

                  {/* Status - Desktop only */}
                  <div className="hidden md:flex py-5 px-6 md:px-0 items-center justify-center">
                    <span className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full border ${
                      notice.status === '진행중' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                      notice.status === '마감임박' ? 'bg-red-50 text-red-600 border-red-100' :
                      'bg-gray-50 text-gray-500 border-gray-200'
                    }`}>
                      {notice.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}