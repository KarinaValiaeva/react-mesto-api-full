import PopupWithForm from "./PopupWithForm";
import ImgSuccess from "../images/union.svg";
import ImgError from "../images/img-fail.svg";

function InfoTooltip(props) {
  function showInfo() {
    if (props.isSignUp) {
      return (
        <>
          <img className="popup__img-info" src={ImgSuccess} alt="succes-img" />
          <p className="popup__caption popup__caption_infotooltip">
            Вы успешно зарегистрировались!
          </p>
        </>
      );
    }
    if (!props.isSignUp || !props.loggedIn) {
      return (
        <>
          <img className="popup__img-info" src={ImgError} alt="fail-img" />
          <p className="popup__caption popup__caption_infotooltip">
            Что-то пошло не так! Попробуйте ещё раз.
          </p>
        </>
      );
    }
  }
  return (
    <PopupWithForm
      name="infotooltip"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      {showInfo()}
    </PopupWithForm>
  );
}

export default InfoTooltip;
