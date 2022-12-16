import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Housing.module.css";
import Carousel from "../../components/slideshow/Slideshow";
import Profil from "../../components/profil/Profil";
import Tags from "../../components/tags/Tags";
import StarRating from "../../components/rating/Rating";
import Collapse from "../../components/collpase/Collapse";

function Housing() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch("../housing.json")
      .then((res) => res.json())
      .then((myJson) => {
        const datas = myJson.find((el) => el.id === id);
        if (datas === undefined) navigate("/error");
        setData(datas);
      })
      .catch(() => navigate("/error"));
  }, [data, id, navigate]);

  const {
    title,
    pictures,
    location,
    host,
    tags,
    rating,
    description,
    equipments,
  } = data;

  return (
    <section className={style.container}>
      {pictures && <Carousel pictures={pictures} />}
      <div className={style.heading}>
        <div>
          <h2>{title}</h2>
          <p>{location}</p>
          {tags && <Tags tags={tags} />}
        </div>
        <div className={style.profilContainer}>
          <Profil host={host} />
          <StarRating rating={rating} />
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.item}>
          <Collapse title="Description">{description}</Collapse>
        </div>
        <div className={style.item}>
          <Collapse title="Équipements">
            {equipments &&
              equipments.map((text, index) => <p key={index}>{text}</p>)}
          </Collapse>
        </div>
      </div>
    </section>
  );
}

export default Housing;
