import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logoRed.svg";
import style from "./Header.module.css"


function Header() {
  return (
    <header className={style.header}>
      <Link to="/">
        <img src={logo} alt="logo du site Kasa" />
      </Link>
      <nav className={style.nav}>
        <NavLink className={({isActive}) => isActive ? style.linkActive : style.link } end to="/">Accueil</NavLink>
        <NavLink className={({isActive}) => isActive ? style.linkActive : style.link } end to="/about">A Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
