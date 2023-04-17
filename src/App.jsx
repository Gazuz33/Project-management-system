import "./App.css";
import "./components/Header/Header.module.css";
import "./components/Navbar/Navbar.module.css";
import "./components/Profile/Profile.module.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ToDo from "./components/todo/todo";
import Video from "./components/video/video";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<DialogsContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/profile/:userId" element={<Profile/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/video" element={<Video />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;




