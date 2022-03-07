import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <img src="https://smmis.ru/wp-content/uploads/2015/01/ava.jpg" />
    <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
  </div>
  );
}

export default DialogItem;
