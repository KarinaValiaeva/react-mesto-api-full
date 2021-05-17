import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Button from "../images/button.svg";
import Card from "./Card";
import Header from "./Header";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <Header
        loggedIn={props.loggedIn}
        userEmail={props.userEmail}
        linkTitle="Выйти"
        linkRoute="/sign-in"
        onLogOut={props.onLogOut}
      />
      <main className="content">
        <section className="profile page__profile">
          <div className="profile__image">
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="Аватар"
            />
            <button
              className="profile__edit-avatar"
              type="button"
              onClick={props.onEditAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name" id="name">
              {currentUser.name}
            </h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__job">{currentUser.about}</p>
          </div>
          <button
            className="profile__add-button"
            type="button"
            onClick={props.onAddPlace}
          >
            <img
              className="button button_add"
              src={Button}
              alt="Кнопка добавить"
            />
          </button>
        </section>
        <section className="cards page__cards">
          {props.cards.map((item) => (
            <Card
              onCardClick={props.onCardClick}
              key={item._id}
              card={item}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
