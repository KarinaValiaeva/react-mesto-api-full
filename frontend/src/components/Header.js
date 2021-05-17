import logo from "../images/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  //функция нажатия на кнопку меню
  function handleNavBar() {
    if (!isOpenMenu) {
      setIsOpenMenu(true);
      document
        .querySelector(".header__nav-icon-item")
        .classList.toggle("header__nav-icon-item_open");
    } else {
      setIsOpenMenu(false);
      document
        .querySelector(".header__nav-icon-item")
        .classList.toggle("header__nav-icon-item_open");
    }
  }

  return (
    <>
      {/* Если произошло нажатие на кнопку меню - отрисовка меню вверху страницы */}
      {isOpenMenu && (
        <div className="header__open-menu">
          <h2 className="header__user-email header__user-email_menu">
            {props.userEmail}
          </h2>
          <Link
            className="header__link header__link_menu "
            onClick={props.onLogOut}
            to="/sign-in"
          >
            {props.linkTitle}
          </Link>
        </div>
      )}

      <header className="header page__header">
        <div className="header__container">
          <img className="logo" src={logo} alt="Логотип Место" />
        </div>
        {/* Если пользователь авторизирован - отрисовка кнопки меню на экранах меньше 1024
            или email и кнопка выйти на экранах больше 1024 */}
        {props.loggedIn ? (
          <>
            <div className="header__nav-icon" onClick={handleNavBar}>
              <span className="header__nav-icon-item"></span>
            </div>

            <div className="header__navbar">
              <h2 className="header__user-email">{props.userEmail}</h2>
              <Link
                className="header__link header__link_desktop"
                onClick={props.onLogOut}
                to="/sign-in"
              >
                {props.linkTitle}
              </Link>
            </div>
          </>
        ) : (
          <Link
            className="header__link"
            onClick={props.onLogOut}
            to={props.linkRoute}
          >
            {props.linkTitle}
          </Link>
        )}
      </header>
    </>
  );
}

export default Header;
