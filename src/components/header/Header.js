import { NavLink } from "react-router-dom";
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
        <img className="header_logo"
          src={require("../../assets/logoRed.png")}
          alt="Logo de l'agence Kasa avec le premier A en forme de maison"
        />
      <div className="header_link">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "header_link_active" : "link")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "header_link_active" : "link")}
        >
          A Propos
        </NavLink>
      </div>
    </header>
  );
}
