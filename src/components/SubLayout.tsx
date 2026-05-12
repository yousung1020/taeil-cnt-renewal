import { Outlet, Link, useLocation } from 'react-router-dom';

interface SubLayoutProps {
  title: string;
  subtitle: string;
  tabs: { name: string; path: string }[];
}

export function SubLayout({ title, subtitle, tabs }: SubLayoutProps) {
  const location = useLocation();

  return (
    <div className="pt-[72px] bg-white min-h-screen">
      {/* Subpage Hero */}
      <section className="relative h-56 md:h-[340px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000)' }}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-gray-900/40"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] mb-3 text-green-400 uppercase">{title}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{subtitle}</h2>
        </div>
      </section>

      {/* Mobile Tab Navigation — 모바일에서만 상단 탭 표시 */}
      <div className="lg:hidden bg-white border-b border-gray-200 sticky top-[72px] z-30">
        <div className="px-4 sm:px-6">
          <div className="flex overflow-x-auto no-scrollbar snap-x space-x-1">
            {tabs.map((tab) => {
              const isActive = location.pathname.startsWith(tab.path);
              return (
                <Link 
                  key={tab.name} 
                  to={tab.path}
                  className={`shrink-0 snap-center py-4 px-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 border-b-2 ${
                    isActive ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {tab.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop: Sidebar + Content / Mobile: Content Only */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-12 py-12 md:py-16 lg:py-20">
          
          {/* Desktop Left Sidebar — lg 이상에서만 보임 */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-[140px]">
              {/* Section Label */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 tracking-tight">{subtitle}</h3>
                <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mt-1">{title}</p>
              </div>

              {/* Nav Links */}
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const isActive = location.pathname.startsWith(tab.path);
                  return (
                    <Link
                      key={tab.name}
                      to={tab.path}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? 'bg-green-600 text-white'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {tab.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <Outlet />
          </main>

        </div>
      </div>
    </div>
  );
}