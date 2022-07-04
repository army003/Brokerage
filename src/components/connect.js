import React from "react";
import TextIcon from "../icons/document-text.svg";
import LockIcon from "../icons/lock-closed.svg";
import CapIcon from "../icons/academic-cap.svg";
import ThumbIcon from "../icons/thumb-up.svg";
import styles from "./styles/connect.module.css";
const Connect = () => {
  return (
    <div className={styles.connect}>
      <h1 className="heading">Как подключить brokerage?</h1>
      <div className={styles.wrapper}>
        <div className={styles.wrapperinfo}>
          <li>
            <img src={TextIcon} />
            <p>Заключение договора</p>
          </li>
          <li>
            <img src={LockIcon} />
            <p>Получение индивидуального логина</p>
          </li>
          <li>
            <img src={CapIcon} />
            <p>Обучение работе в системе</p>
          </li>
          <li>
            <img src={ThumbIcon} />
            <p>Начало работы</p>
          </li>
        </div>
        <div className={styles.contactinput}>
          <h2>Остались вопросы?</h2>
          <form>
            <label for="name">Ваше имя</label>
            <br />
            <input type="text" />
            <br />
            <label for="phoneNum">Номер телефона</label>
            <br />
            <input type="text" placeholder="+7" />
            <br />
            <input type="submit" placeholder="Оставить заявку" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Connect;
