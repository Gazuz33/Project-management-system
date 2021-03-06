import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://img-fotki.yandex.ru/get/49312/106698111.20/0_235fac_88527a68_M.png" />
      <span>Project management system </span>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            <div className={s.login}>{props.login}</div>{" "}
            <div className={s.logout}>
              <button onClick={props.logout}>Log out</button>
            </div>{" "}
          </div>
        ) : (
          <NavLink to={"/login"}><button className={s.loginBtn}>Login</button></NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
