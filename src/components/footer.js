import React from "react";
import Logo from "../icons/загружено 3 (Traced)(1).svg";
import Phone from "../icons/phone.svg";
import Mail from "../icons/mail.svg";
import Fb from "../icons/facebook.svg";
import Wp from "../icons/wp.svg";
import Ig from "../icons/inst.svg";
import styles from "./styles/footer.module.css";
const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.wrapper}>
        <img src={Logo} className={styles.logo} />

        <nav>
          <div className={styles.links}>
            <h2>Навигация по сайту</h2>
            <a href="#">Возможности платформы</a>
            <a href="#">Как подключить?</a>
            <a href="#">Наши результаты</a>
          </div>
          <div className={styles.contacts}>
            <h2>Наши контакты</h2>
            <li>
              <img src={Phone} />
              <span>+7 747 300 1889</span>
            </li>
            <li>
              <img src={Mail} />
              <span>support@brokerage24.kz</span>
            </li>
          </div>
          <div className={styles.btn}>
            <button>Войти</button>
          </div>
        </nav>
        <div className={styles.last}>
          <span>© 2021 ТОО Brokerage</span>
          <div className={styles.socialmedia}>
            <a href="#">
              <img src={Fb} />
            </a>
            <a href="#">
              <img src={Wp} />
            </a>
            <a href="#">
              <img src={Ig} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
