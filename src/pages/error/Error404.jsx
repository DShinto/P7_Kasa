import { NavLink } from "react-router-dom";
import style from "./Error.module.css";

function Error() {
  return (
    <article className={style.article}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink className={style.link} to="/">
        Retourner sur la page d’accueil
      </NavLink>
    </article>
  );
}

export default Error;
