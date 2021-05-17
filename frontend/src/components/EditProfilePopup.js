import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const [userData, setUserData] = useState({
    name: "",
    description: "",
  });

  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  // Загрузка данных текущего пользователя в инпуты
  useEffect(() => {
    setUserData({
      name: currentUser.name,
      description: currentUser.about,
    });
  }, [currentUser]);

  // Обработка инпутов
  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  // Передача значения управляемых компонентов во внешний обработчик
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: userData.name,
      about: userData.description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__field">
        <input
          className="form__input form__input_type_name"
          id="name-input"
          type="text"
          name="name"
          required
          minLength="2"
          maxLength="40"
          value={userData.name}
          onChange={handleChange}
        />
      </label>
      <label className="form__field">
        <input
          className="form__input form__input_type_job"
          value={userData.description}
          onChange={handleChange}
          id="job-input"
          type="text"
          name="description"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__error" id="job-input-error"></span>
      </label>
      <button className="form__button-submit" type="submit">
        {props.isLoading ? "Сохранение" : "Сохранить"}
      </button>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
