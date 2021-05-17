import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [data, setData] = useState({
    title: "",
    link: "",
  });

  // Очистка инпутов перед открытием попапа
  useEffect(() => {
    if (props.isOpen) {
      setData({ title: "", link: "" });
    }
  }, [props.isOpen]);

  // Обработка инпутов
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  // Передача значения управляемых компонентов во внешний обработчик
  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: data.title,
      link: data.link,
    });
  }

  return (
    <PopupWithForm
      name="cards"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__field">
        <input
          className="form__input form__input_cards form__input_type_title"
          id="title-input"
          type="text"
          name="title"
          placeholder="Название"
          value={data.title}
          onChange={handleChange}
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__error" id="title-input-error"></span>
      </label>
      <label className="form__field">
        <input
          className="form__input form__input_cards form__input_type_link"
          id="link-input"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          value={data.link}
          onChange={handleChange}
          required
        />
        <span className="popup__error" id="link-input-error"></span>
      </label>
      <button
        className="form__button-submit form__button-submit_cards"
        type="submit"
      >
        {props.isLoading ? "Сохранение" : "Создать"}
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
