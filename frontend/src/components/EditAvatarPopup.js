import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  // очистка инпута перед открытием попапа
  useEffect(() => {
    if (props.isOpen) {
      avatarRef.current.value = '';
    }
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    e.target.reset();
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновите аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__field">
        <input
          className="form__input form__input_type_link"
          id="link-photo-input"
          type="url"
          name="link"
          placeholder="Ссылка на фото"
          required
          ref={avatarRef}
        />
        <span className="popup__error" id="link-photo-input-error"></span>
      </label>
      <button className="form__button-submit" type="submit">
        {props.isLoading ? "Сохранение" : "Сохранить"}
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
