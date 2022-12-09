import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_red.png";
import style from "./Header.module.css"


function Header() {
  return (
    <header className={style.header}>
      <Link to="/">
        <img src={logo} alt="logo du site Kasa" />
      </Link>
      <nav className={style.nav}>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
