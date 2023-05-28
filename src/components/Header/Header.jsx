import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {signOut} from "firebase/auth"
import { auth } from '../../firebase'
import logo from "../../assets/images/logo.png"

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <header className={s.header}>
      <img src={logo}/>
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


