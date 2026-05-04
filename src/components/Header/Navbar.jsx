import styles from "./Navbar.module.css" 
import logo from '../../assets/img/dc-logo.png';
import navData from './navData';

const navLogo = (
  <a className="navbar-brand" href="#">
    <img src={logo} alt="DC Logo" style={{ height: 40 }} />
  </a>
);

const navLink = (title, idx) => (
  <a
    className="nav-link dropdown-toggle"
    href="#"
    id={`navbarDropdown-${idx}`}
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    {title}
  </a>
);

const navDropList = (item, idx) => (
  <ul className="dropdown-menu" aria-labelledby={`navbarDropdown-${idx}`}>
    {item.itemList.map((li, j) => (
      <li key={j}>
        <a className="dropdown-item" href="#">
          {li}
        </a>
      </li>
    ))}
  </ul>
);

const navListItem = navData.map((item, idx) => (
  <li key={idx} className="nav-item dropdown">
    {navLink(item.itemTitle, idx)}
    {navDropList(item, idx)}
  </li>
));

const navbar = (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      {navLogo}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">{navListItem}</ul>
      </div>
    </div>
  </nav>
);

export default function Navbar() {
  return navbar;
}