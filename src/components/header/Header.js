import { NavLink } from "react-router-dom";
// import "../style/header.css";

export function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={require("../../assets/logoRed.png")}
          alt="Logo de l'agence Kasa avec le premier A en forme de maison"
        />
      </div>
      <div className="links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          A Propos
        </NavLink>
      </div>
    </div>
  );
}
