import { useState, useEffect } from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  useHistory,
} from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ProtectedRoute from "./ProtectedRoute";
import api from "../utils/api";
import * as auth from "../utils/auth";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmPopup from "./ConfirmPopup";
import InfoTooltip from "./InfoTooltip";
import Register from "./Register";
import Login from "./Login";

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
    avatar: "",
  });
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");
  const [removedCard, setRemovedCard] = useState("");
  const [cards, setCards] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [email, setEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

      useEffect(() => {
        tokenCheck();
      }, []);

      useEffect(() => {
        if (loggedIn) {
          history.push("/");
        }
      }, [loggedIn, history]);

  const tokenCheck = () => {
      if (localStorage.getItem("jwt")) {
      let jwt = localStorage.getItem("jwt");
      auth
        .getContent(jwt)
        .then((data) => {
          if (data.email) {
            setLoggedIn(true);
            setEmail(data.email);
          }
        })
        .catch((res) => {
          if (res.status === 400)
            console.log("Токен не передан или передан не в том формате");
          if (res.status === 401) console.log("Переданный токен некорректен");
        });
  };
}

  const handleRegister = ({ email, password }) => {
    return auth
      .register({ email, password })
      .then((res) => {
        setIsSignUp(true);
        history.push("/sign-in");
        return res;
      })
      .catch((res) => {
        setIsSignUp(false);
        if (res.status === 400) {
          console.log("Некорректно заполнено одно из полей");
        }
      });
  };

  const handleLogin = ({ email, password }) => {
    return auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          localStorage.setItem("jwt", res.token);
          setEmail(email);
          history.push("/");
          return;
        }
      })
      .catch((res) => {
        setIsInfoTooltipOpen(true);
        if (res.status === 400) console.log("Не передано одно из полей");
        if (res.status === 401) console.log("Пользователь с email не найден");
      });
  };



  const handleLogOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/sign-in");
    setEmail("");
  };

  // загрузка информации о пользователе и карточек с сервера
  useEffect(() => {
  if (loggedIn) {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setCurrentUser(userData);
        setCards(initialCards);
      })
      .catch((err) => console.log(err));}
  }, [loggedIn]);

  // закрытие поппапов при нажатии на Esc
  useEffect(() => {
    function handleEsc(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleRemoveCardClick(card) {
    setIsConfirmPopupOpen(true);
    setRemovedCard(card);
  }

  function handleInfoTooltip() {
    setIsInfoTooltipOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmPopupOpen(false);
    setIsInfoTooltipOpen(false);
    setSelectedCard();
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  // обновление информации о пользователе
  function handleUpdateUser(item) {
    setIsloading(true);
    api
      .setUserInfo(item)
      .then((item) => {
        setCurrentUser(item);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsloading(false));
  }
  // обновление аватара
  function handleUpdateAvatar(item) {
    setIsloading(true);
    api
      .setUserAvatar(item.avatar)
      .then((item) => {
        setCurrentUser(item);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsloading(false));
  }
  // добавление новой карточки
  function handleAddPlaceSubmit(item) {
    setIsloading(true);
    api
      .postCard(item)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsloading(false));
  }

  // функция для постановки лайка
  function handleCardLike(card) {
    
    const isLiked = card.likes.some((i) => i === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  // функция для удаления карточки
  function handleCardDelete() {
    setIsloading(true);
    // запрос в API на удаление карточки
    api
      .deleteCard(removedCard._id)
      .then(() => {
        // отрисовка массива карточек без удалённой карточки
        setCards((state) =>
          state.filter((c) => {
            return c !== removedCard;
          })
        );
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsloading(false));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Switch>
            <ProtectedRoute
              exact
              path="/"
              loggedIn={loggedIn}
              component={Main}
              userEmail={email}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleRemoveCardClick}
              onLogOut={handleLogOut}
            />

            <Route path="/sign-in">
              <Login onLogin={handleLogin} />
            </Route>

            <Route path="/sign-up">
              <Register
                onRegister={handleRegister}
                onInfoTooltip={handleInfoTooltip}
              />
            </Route>

            <Route>
              {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
            </Route>
          </Switch>
          {loggedIn && <Footer />}
        </div>
      </div>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <ConfirmPopup
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        onClick={handleCardDelete}
        isLoading={isLoading}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        isLoading={isLoading}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        isLoading={isLoading}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
        isLoading={isLoading}
      />
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        isSignUp={isSignUp}
        loggedIn={loggedIn}
      />
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
