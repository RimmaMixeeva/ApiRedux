import { Outlet, NavLink } from 'react-router-dom';
function Layout() {
  return (
    <div>
      <header style={{ display: 'flex', gap: '1rem' }}>
        <NavLink
          to="/albums"
          className={({ isActive }) => (isActive ? 'link-active' : '')}
        >
          Albums
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? 'link-active' : '')}
        >
          Users
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
