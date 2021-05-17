import Button from "../images/button.svg";
function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${
        props.isOpen && "popup_opened" }`}
      onClick={props.onClose}
    >
      <div
        className={`popup__container popup__container_${props.name}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
        >
          <img
            className="button button_close"
            src={Button}
            alt="Кнопка закрыть"
          />
        </button>
        <h2 className={`popup__title popup__title_${props.name}`}>{props.title}</h2>
        <form
          className={`form form_${props.name}`}
          name="form"
          noValidate
          onSubmit={props.onSubmit}
        >
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
