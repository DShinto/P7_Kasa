import style from "./Rating.module.css";

function StarRating({ rating }) {
  return (
    <div className={style.star}>
      {[...Array(5)].map((_, i) => {
        const index = ++i;
        return (
          <span
            key={i}
            className={index <= rating ? style.starActive : style.starInactive}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
