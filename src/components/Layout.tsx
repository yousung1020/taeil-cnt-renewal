import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}