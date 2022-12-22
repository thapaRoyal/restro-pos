import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex gap-4">
      <aside className="w-36 bg-slate-500 min-h-screen">
        <div>LOGO</div>
        <ul>
          <li>
            <Link to="/">Tables</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </aside>
      <main className="w-3/4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
