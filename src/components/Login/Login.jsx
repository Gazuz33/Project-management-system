import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Вход в аккаунт</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Почта" />
          <input type="password" placeholder="Пароль" />
          <button>Войти</button>
          {err && <span>Проверьте корректность данных...</span>}
        </form>
        <p>У вас ещё нет аккаунта? <Link to="/register">Регистрация</Link></p>
      </div>
    </div>
  );
};

export default Login;
