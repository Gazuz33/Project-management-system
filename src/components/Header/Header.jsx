import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://img-fotki.yandex.ru/get/49312/106698111.20/0_235fac_88527a68_M.png" />
      <span>Project management system </span>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
