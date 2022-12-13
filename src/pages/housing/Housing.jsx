import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./housing.module.css";
import Carousel from "../../components/slideshow/Slideshow";
import Profil from "../../components/profil/Profil";
import Tags from "../../components/tags/Tags";

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

  const { title, pictures, location, host, tags } = data;

  return (
    <section>
      {pictures && <Carousel pictures={pictures} />}
      <div className={style.heading}>
        <div>
          <h2>{title}</h2>
          <p>{location}</p>
          {tags && <Tags tags={tags}/>}
        </div>
        <div>
          <Profil host={host} />
        </div>
      </div>
    </section>
  );
}

export default Housing;
