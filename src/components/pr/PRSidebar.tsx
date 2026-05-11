import React from 'react';
import { Link } from 'react-router-dom';

interface PRSidebarProps {
  currentMenu: string;
}

const PRSidebar: React.FC<PRSidebarProps> = ({ currentMenu }) => {
  const menus = [
    { name: 'NEWS', path: '/news' },
    { name: '사회공헌', path: '/social' },
    { name: '홍보자료', path: '/pr-material' },
  ];

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="bg-taeil-dark text-white p-6 lg:p-8 rounded-t-lg lg:rounded-none">
        <h2 className="text-xl lg:text-2xl font-bold">홍보센터</h2>
        <p className="text-xs lg:text-sm opacity-80 mt-1 lg:mt-2">PR CENTER</p>
      </div>
      <nav className="border-x border-b border-gray-200 rounded-b-lg lg:rounded-none overflow-hidden">
        <ul className="flex lg:flex-col">
          {menus.map((menu) => (
            <li key={menu.name} className="flex-1 lg:flex-none text-center lg:text-left">
              <Link
                to={menu.path}
                className={`block py-3 lg:py-4 px-4 lg:px-6 border-r lg:border-r-0 lg:border-t border-gray-200 transition-colors text-sm md:text-base ${
                  currentMenu === menu.name
                    ? 'bg-taeil-light text-white font-bold lg:border-t-taeil-light'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default PRSidebar;
