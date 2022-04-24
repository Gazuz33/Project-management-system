import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <img src="https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg" />
      <NavLink to={"/dialogs/" + props.id}>
        <span>{props.name}</span>
      </NavLink>
    </div>
  );
};

export default DialogItem;
