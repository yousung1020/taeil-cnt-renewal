import { useState } from 'react';

const categories = ['전체', '건설분야', '기타분야'];

export function News() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="animate-fade-in-up space-y-12">
      {/* Section Title */}
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
          기술혁신 News
        </h3>
        <div className="flex justify-center gap-1">
          <div className="w-1.5 h-6 bg-green-600 rounded-full"></div>
          <div className="w-1.5 h-6 bg-green-500 rounded-full"></div>
          <div className="w-1.5 h-6 bg-green-400 rounded-full"></div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="grid grid-cols-3 border border-gray-200 rounded-xl overflow-hidden">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`py-4 text-center text-sm font-medium transition-colors ${
              activeTab === idx
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700'
            } ${idx > 0 ? 'border-l border-gray-200' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search & Count */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="text-gray-500 text-sm">
          전체 <span className="font-bold text-gray-900">0</span>건
        </div>
        <div className="flex items-center rounded-lg border border-gray-200 overflow-hidden bg-white">
          <select className="px-4 py-2.5 border-r border-gray-200 outline-none bg-transparent text-gray-600 text-sm cursor-pointer">
            <option>제목</option>
          </select>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="px-4 py-2.5 outline-none w-full md:w-56 text-sm bg-transparent"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 flex items-center justify-center transition-colors text-sm font-medium gap-1.5 shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            검색
          </button>
        </div>
      </div>

      {/* Table Header */}
      <div>
        <div className="bg-gray-50 border-t-2 border-green-600 border-b border-gray-200 grid grid-cols-[1fr_140px_120px] px-6 py-3.5">
          <span className="text-sm font-semibold text-gray-700 text-center">제목</span>
          <span className="text-sm font-semibold text-gray-700 text-center hidden md:block">마감기한</span>
          <span className="text-sm font-semibold text-gray-700 text-center hidden md:block">접수상태</span>
        </div>

        {/* Empty State */}
        <div className="border-b border-gray-200 py-24 flex flex-col items-center justify-center bg-white">
          <svg className="w-12 h-12 text-gray-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-gray-400 text-sm">등록된 News가 없습니다.</p>
        </div>
      </div>
    </div>
  );
}