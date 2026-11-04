import { NavLink, Link } from 'react-router-dom';

const links = [
  ['/', 'Home'],
  ['/work', 'Work'],
  ['/designs', 'Designs'],
  ['/sites', 'Sites'],
  ['/writing', 'Writing'],
  ['/about', 'About'],
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-in">
        <Link className="brand" to="/">Johnson <em>Okafor</em></Link>
        <div className="nav-links">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'on' : '')}>
              {label}
            </NavLink>
          ))}
        </div>
        <Link className="nav-cta" to="/contact">Hire me</Link>
      </div>
    </nav>
  );
}
