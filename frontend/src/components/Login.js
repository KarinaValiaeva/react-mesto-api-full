import { useState } from "react";
import Header from "./Header";

function Login(props) {
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
    e.preventDefault();
    props.onLogin(userData);
  }

  return (
    <>
      <Header linkTitle="Регистрация" linkRoute="/sign-up" />
      <div className="sign page__login">
        <div className="sign__container">
          <h2 className="sign__title">Вход</h2>
          <form className="form form_sign" onSubmit={handleSubmit} noValidate>
            <label className="form__field">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
                className="form__input form__input_sign"
                value={userData.email}
                onChange={handleChange}
              />
            </label>
            <label className="form__field">
              <input
                id="password"
                name="password"
                placeholder="Пароль"
                type="password"
                autoComplete="off"
                className="form__input form__input_sign"
                value={userData.password}
                onChange={handleChange}
              />
            </label>
            <button
              className="form__button-submit form__button-submit_sign"
              type="submit"
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
