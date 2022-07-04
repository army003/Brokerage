import React from "react";
import logo from "../images/загружено 3 (Traced).png";
import styles from "./header.module.css";
import Burger from "../icons/burger.svg";
import Line from "../icons/linee.svg";
import X from "../icons/x.svg";
import "../style.css";
import Accept from "../icons/check (3) 1.svg";
import { useState } from "react";
//header_modalAccepted__6+pam
const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  const classes = styles.burgerMenu + " " + styles.hidden;
  const Show = () => {
    document
      .getElementById("burgerMenu")
      .classList.toggle("header_hidden__q1+3w");
  };
  const Hide = () => {
    document
      .getElementById("burgerMenu")
      .classList.toggle("header_hidden__q1+3w");
  };
  const HideModal = () => {
    document
      .querySelector(".header_modalcontainer__VxMQJ")
      .classList.toggle("header_hidden__q1+3w");
  };
  const [accepted, setAccepted] = useState(false);
  return (
    <header>
      <div
        className={
          modalActive
            ? "header_modal__G5b7P header_active__XtLUz"
            : "header_modal__G5b7P"
        }
        onClick={() => {
          setModalActive(false);
          HideModal();
          setAccepted(false);
        }}
      >
        <div
          className={styles.modalcontainer}
          onClick={(e) => e.stopPropagation()}
        >
          <h1>Закажите звонок</h1>
          <p>и наш менеджер свяжется с Вами</p>
          <form>
            <label htmlFor="name">Ваше имя</label>
            <br />
            <input type="text" id="name" />
            <br />
            <label htmlFor="phone">Номер телефона </label>
            <br />
            <input type="text" id="phone" placeholder="+7" />
            <br />
            <input
              type="button"
              value="Заказать звонок"
              onClick={() => {
                setAccepted(true);
                HideModal();
              }}
            />
          </form>
        </div>

        <div
          className={
            accepted
              ? "header_modalAccepted__6+pam header_active__XtLUz"
              : "header_modalAccepted__6+pam"
          }
        >
          <img src={Accept} />
          <p>Спасибо. мы приняли Вашу заявку</p>
        </div>
      </div>

      <img src={Burger} className={styles.burger} onClick={Show} />
      <div className={classes} id="burgerMenu">
        <nav>
          <img src={X} onClick={Hide} />
          <a href="#">Возможности</a>
          <a href="#">Как подключить</a>
          <a href="#">О компании</a>
          <a href="#">Результаты</a>
          <img src={Line} className={styles.line} />
          <a href="#">Войти</a>
        </nav>
      </div>
      <div className={styles.navigation}>
        <nav>
          <a href="">Возможности платформы</a>
          <a href=""> Как подключить?</a>
          <a href="">Наши результаты</a>
        </nav>
        <button className={styles.btnsignIn}>Войти</button>
      </div>
      <div className={styles.headercontent}>
        <img src={logo} />
        <p>
          Ведущий независимый финансовый <br />
          брокер Казахстана
        </p>
        <p className={styles.small}>
          digital платформа для получения кредита/рассрочки без прямой
          интеграции с кредитными организациями
        </p>
        <button onClick={() => setModalActive(true)}>Подключить</button>
      </div>
    </header>
  );
};
export default Header;
