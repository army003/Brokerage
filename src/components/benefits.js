import React from "react";
import Ellipse from "../images/Group 22.png";
import Stroke1 from "../images/Vector 1.png";
import Stroke2 from "../Vector 2.svg";
import Stroke3 from "../Vector(3).svg";
import Stroke4 from "../Vector4.svg";
import Stroke5 from "../Vector5.svg";
import styles from "./benefits.module.css";

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <h1 className="heading">Преимущества</h1>
      <div className={styles.container}>
        <div className={styles.box} id={styles.first}>
          <div className={styles.card}>
            <h2>
              Срок подключения к<br /> платформе
            </h2>
            <p>
              Для взаимодействия с брокером необходимо только наличие телефона,
              учетная запись выдается в день подписания договора, поддержка
              операций 24/7
            </p>
            {/* <img src={Stroke1} id="v1" /> */}
          </div>

          <div className={styles.card}>
            {/* <img src={Stroke2} id="v2" /> */}
            <h2>
              Время оформления кредитной
              <br /> заявки/рассрочки
            </h2>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.ellipse}>
            <img src={Ellipse} />
            <span> &#60; 1 день </span>
          </div>
          <div className={styles.ellipse}>
            <img src={Ellipse} />
            <span> &#60; 2 мин </span>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.ellipse}>
            <img src={Ellipse} />
            <span>до 90 % </span>
          </div>
          <div className={styles.ellipse}>
            <img src={Ellipse} />
            <span>0 тг </span>
          </div>
          <div className={styles.ellipse} id="g">
            <img src={Ellipse} />
            <span>1 %</span>
          </div>
        </div>
        <div className={styles.box} id={styles.last}>
          <div className={styles.card}>
            <h2>Max % одобрения кредитных заявок</h2>
            <p>
              С помощью платформы, потребитель заинтересованный в покупке товара
              в магазине, практически всегда получит подходящее предложение от
              банков-партнеров, подключенных к системе.
            </p>
            {/* <img src={Stroke3} id="v3" /> */}
          </div>

          <div className={styles.card} id="i">
            {/* <img src={Stroke4} id="v4" /> */}
            <h2>Нет комиссии за пользование приложением</h2>
            <p>
              При использовании приложения не взимается абонентская плата,
              оплачиваете только, если выдаете товар.
            </p>
          </div>

          <div className={styles.card} id="j">
            <h2>Вознаграждения по кредиту партнерам</h2>
            {/* <img src={Stroke5} id="v5" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
