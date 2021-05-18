import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = (props) => {
  const { card } = props;
  const currentUser = useContext(CurrentUserContext);
  
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some((i) => i === currentUser._id);
  const cardDeleteButtonClassName = `card__btn-remove ${
    isOwn ? "card__btn-remove_active" : ""
  }`;
  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleCardDelete() {
    props.onCardDelete(props.card);
  }

  return (
    <figure className="card__item">
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleCardDelete}
      ></button>
      <img
        className="card__photo"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <figcaption className="card__caption">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <h2 className="card__like-counter">{card.likes.length}</h2>
        </div>
      </figcaption>
    </figure>
  );
};

export default Card;
