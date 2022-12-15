import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
const setActive = ({isActive}) => isActive ? s.active : s.item;
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to ="/profile" className={setActive}>Профиль</NavLink></div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={setActive}>Сообщения</NavLink></div>
      <div className={s.item}>
        <NavLink to="/users" className={setActive}>Пользователи</NavLink></div>
      <div className={s.item}>
        <NavLink to="/settings" className={setActive}>Настройки</NavLink></div>
      <div className={s.item}>
        <NavLink to="/todo" className={setActive}>Мои доски</NavLink></div> 
      <div className={s.item}>
        <NavLink to="/video" className={setActive}>Видео-чат</NavLink></div> 
    </nav>
  ); 
};
export default Navbar;
