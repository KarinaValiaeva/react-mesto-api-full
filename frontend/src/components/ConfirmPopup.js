import PopupWithForm from "./PopupWithForm";

function ConfirmPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onClick(props.card);
  }
  return (
    <PopupWithForm
      name="remove-card"
      title="Вы уверены?"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <button
        className="popup__button-confirm"
        type="button"
        onClick={handleSubmit}
      >
        {props.isLoading ? "Удаление" : "Да"}
      </button>
    </PopupWithForm>
  );
}
export default ConfirmPopup;
