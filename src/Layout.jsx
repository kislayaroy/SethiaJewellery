import { Link, NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="page">
      <header className="nav">
        <Link className="brand" to="/">
          <span className="logo">Sethia Jewellers</span>
          <span className="owner">Owned by Aman Sethia</span>
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/#collections">Collections</Link>
            </li>
            <li>
              <NavLink to="/rings">Rings</NavLink>
            </li>
            <li>
              <NavLink to="/earrings">Earrings</NavLink>
            </li>
            <li>
              <Link to="/#retail">Retail</Link>
            </li>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#visit">Visit</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer className="footer" id="visit">
        <span>Sethia Jewellers</span>
        <span>Started by Champak Lal · Run by Aman Sethia</span>
      </footer>
    </div>
  )
}

export default Layout
