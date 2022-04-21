import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { Input } from "../common/FormsControls/FormsControls";
import required from "../utils/validators/validators";
import s from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <legend>LOGIN</legend>
      <div>
        <Field
          placeholder={"Email"}
          component={Input}
          name={"email"}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          component={Input}
          name={"password"}
          type={"password"}
          validate={[required]}
        />
      </div>
      <div>
        <Field type={"checkbox"} component={"input"} name={"rememberMe"} />{" "}
        Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div className={s.item}>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
