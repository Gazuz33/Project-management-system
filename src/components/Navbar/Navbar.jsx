import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
const setActive = ({isActive}) => isActive ? s.active : s.item;
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to ="/profile" className={setActive}>Profile</NavLink></div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={setActive}>Messages</NavLink></div>
        <div className={s.item}>
        <NavLink to="/users" className={setActive}>Users</NavLink></div>
      <div className={s.item}>
        <NavLink to="/settings" className={setActive}>Settings</NavLink></div>
        <div className={s.item}>
        <NavLink to="/todo" className={setActive}>ToDo</NavLink></div> 
    </nav>
  ); 
};
export default Navbar;
