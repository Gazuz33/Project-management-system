import preloader from "../../../assets/images/preLoader.svg"
import s from "../Preloader/Preloader.module.css"

let Preloader = (props) => {
    return <img src={preloader} className={s.preloader} />
}

export default Preloader;