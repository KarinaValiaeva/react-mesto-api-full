import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Register(props) {
  const [userData, setUserData] = useState({
    password: "",
    email: "",
  });

  // Обработка инпутов
  function handleChange(e) {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  // Передача значения управляемых компонентов во внешний обработчик
  function handleSubmit(e) {
    let { password, email } = userData;
    e.preventDefault();
    props.onRegister({ password, email });
  }

  return (
    <>
      <Header linkTitle="Войти" linkRoute="/sign-in" />
      <div className="sign page__login">
        <div className="sign__container">
          <h2 className="sign__title">Регистрация</h2>
          <form className="form form_sign" onSubmit={handleSubmit} noValidate>
            <label className="form__field">
              <input
                className="form__input form__input_sign"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleChange}
                autoComplete="off"
              />
            </label>
            <label className="form__field">
              <input
                className="form__input form__input_sign"
                id="password"
                name="password"
                type="password"
                placeholder="Пароль"
                value={userData.password}
                onChange={handleChange}
                autoComplete="off"
              />
            </label>
            <button
              className="form__button-submit form__button-submit_sign"
              type="submit"
              onClick={props.onInfoTooltip}
            >
              Зарегистрироваться
            </button>
          </form>
          <p className="sign__signin-link">
            Уже зарегистрированы?&nbsp;
            <Link to="/sign-in" className="sign__signin-link">
              Войти
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
