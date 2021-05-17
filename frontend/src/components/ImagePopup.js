import Button from "../images/button.svg";
function ImagePopup(props) {
  const selectedCard = props.card;
  return (
    <div
      className={`popup popup_image ${selectedCard ? "popup_opened" : ""}`}
      onClick={props.onClose}
    >
      <figure
        className="popup__container popup__container_image"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="popup__button-close popup__button-close_image"
          type="button"
        >
          <img
            className="button button_close"
            src={Button}
            alt="Кнопка закрыть"
            onClick={props.onClose}
          />
        </button>
        <img
          className="popup__photo"
          src={selectedCard ? `${selectedCard.link}` : "#"}
          alt={selectedCard ? `${selectedCard.name}` : ""}
        />
        <figcaption className="popup__caption">
          {selectedCard ? `${selectedCard.name}` : ""}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
