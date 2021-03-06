import "./App.css";
import "./components/Header/Header.module.css";
import "./components/Navbar/Navbar.module.css";
import "./components/Profile/Profile.module.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ToDo from "./components/todo/todo";


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
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todo" element={<ToDo/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
