import React from "react";
import styles from "./mobialBen.module.css";
import Ellipse from "../images/Group 22.png";
const Mobial = () => {
  return (
    <section className={styles.benefits}>
      <h1 className="heading">Преимущества</h1>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.ellipse}>
            <img src={Ellipse} />
            <span>до 90 % </span>
          </div>

          <div className={styles.card}>
            <h2>Max % одобрения кредитных заявок</h2>
            <p>
              С помощью платформы, потребитель заинтересованный в покупке товара
              в магазине, практически всегда получит подходящее предложение от
              банков-партнеров, подключенных к системе.
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.ellipse}>
            <img src={Ellipse} />
            <span> &#60; 1 день </span>
          </div>

          <div className={styles.card}>
            <h2>
              Срок подключения к<br /> платформе
            </h2>
            <p>
              Для взаимодействия с брокером необходимо только наличие телефона,
              учетная запись выдается в день подписания договора, поддержка
              операций 24/7
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.ellipse}>
            <img src={Ellipse} />
            <span>0 тг </span>
          </div>

          <div className={styles.card}>
            <h2>Нет комиссии за пользование приложением</h2>
            <p>
              При использовании приложения не взимается абонентская плата,
              оплачиваете только, если выдаете товар.
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.ellipse}>
            <img src={Ellipse} />
            <span> &#60; 2 мин </span>
          </div>
          <div className={styles.card}>
            <h2>
              Время оформления кредитной
              <br /> заявки/рассрочки
            </h2>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.ellipse} id="g">
            <img src={Ellipse} />
            <span>1 %</span>
          </div>

          <div className={styles.card} id="j">
            <h2>Вознаграждения по кредиту партнерам</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mobial;
