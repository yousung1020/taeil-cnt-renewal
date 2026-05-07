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

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar snap-x space-x-1 md:space-x-6">
            {tabs.map((tab) => {
              const isActive = location.pathname.startsWith(tab.path);
              return (
                <Link 
                  key={tab.name} 
                  to={tab.path}
                  className={`shrink-0 snap-center py-4 px-3 text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-200 border-b-2 ${
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

      {/* Page Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Outlet />
      </div>
    </div>
  );
}