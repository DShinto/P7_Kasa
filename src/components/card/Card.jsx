import { useNavigate } from "react-router-dom";
import style from "./Card.module.css";

function Card({ data }) {
  const { id, title, cover } = data;
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/housing/${id}`);
  }

  return (
    <article onClick={handleNavigate} className={style.card}>
      <h2>{title}</h2>
      <img src={cover} alt={title} />
    </article>
  );
}

export default Card;
