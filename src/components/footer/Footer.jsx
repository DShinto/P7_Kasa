import { Link } from "react-router-dom";
import logo from "../../assets/logo_white.png";
import style from "./Footer.module.css"

function Footer() {
  return(
    <footer className={style.footer}>
      <Link to="/">
        <img src={logo} alt="logo du site Kasa" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer