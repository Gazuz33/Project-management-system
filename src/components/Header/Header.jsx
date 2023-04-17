import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {signOut} from "firebase/auth"
import { auth } from '../../firebase'
const Header = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <header className={s.header}>
      <img src="https://img-fotki.yandex.ru/get/49312/106698111.20/0_235fac_88527a68_M.png" />
      <span>Project management system </span>
      <div className={s.loginBlock}>
        {{...currentUser}.email ? (
          <div>
            <div className={s.login}>{currentUser.displayName}</div>{" "}
            <div className={s.logout}>
            <NavLink to={"/login"}>
            <button onClick={()=>signOut(auth)}>Выйти</button>
          </NavLink>
            
            </div>{" "}
          </div>
        ) : (
          <NavLink to={"/login"}>
            <button className={s.loginBtn}>Войти</button>
          </NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;


