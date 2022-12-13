import { useState } from "react";
import style from "./Slideshow.module.css";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex(
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex(
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className={style.container}>
      {pictures.map((picture, index) => (
        <div
          key={index}
          className={
            currentIndex === index
              ? `${style.contentImage} ${style.active}`
              : style.contentImage
          }
        >
          <img src={picture} alt="aperçu de la location" />
        </div>
      ))}
      <span className={style.pagination}>
        {currentIndex + 1}/{pictures.length}
      </span>
      {pictures.length > 1 && (
        <>
          <button onClick={prev} className={style.leftArrow}>
            &lt;
          </button>
          <button onClick={next} className={style.rightArrow}>
            &gt;
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
