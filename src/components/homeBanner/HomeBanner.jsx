import style from "./HomeBanner.module.css";

function HomeBanner() {
  return (
    <section className={style.banner}>
      <h1>
        <span>Chez vous,</span> <span>&nbsp;</span>
        <span>partout et ailleurs</span>
      </h1>
    </section>
  );
}

export default HomeBanner;
