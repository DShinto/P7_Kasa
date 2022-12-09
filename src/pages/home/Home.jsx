import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import Card from "../../components/card/Card";
import style from "./Home.module.css";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("../housing.json")
      .then((res) => res.json())
      .then((myJson) => setData(myJson))
      .catch(() => navigate("/error"));
  }, [navigate]);
  return (
    <div className={style.home}>
      <HomeBanner />
      <section className={style.cards}>
        {data &&
          data.length > 0 &&
          data.map((item) => <Card data={item} key={item.id} />)}
      </section>
    </div>
  );
}

export default Home;
