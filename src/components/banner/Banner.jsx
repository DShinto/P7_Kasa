import style from "./Banner.module.css"
import background from '../../assets/home_background.jpg'

function Banner() {
  return (
  <div className={style.banner}>
    <img src={background} alt="arrière plan nature" />
  </div>)
}

export default Banner