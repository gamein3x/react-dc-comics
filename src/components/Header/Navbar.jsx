import styles from "./Navbar.module.css"
import logo from '../../assets/img/dc-logo.png';
import navData from './navData';



const navLogo = (
    <div className={`${styles.headLogo} head-item0`}>
        <a className="navbar-brand" href="#">
            <img src={logo} alt="DC Logo" className="img-fluid"/>
        </a>
    </div>
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
        {item.itemList.map((li, key) => (
            <li key={key}>
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
    <div className="head-item1">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
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
    </div>
);

const headContentBox = (
    <div className="d-flex justify-content-around align-items-center my-1 h2">
        {navLogo}
        {navbar}
    </div>
);

export default function Navbar() {
    return headContentBox;
}