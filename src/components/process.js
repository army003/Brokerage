import React from "react";
import BgPhoto from "../Mask Group.svg";
import BgPhoto2 from "../Mask Group2.svg";
import BgPhoto3 from "../Mask Group3.svg";
import styles from "./process.module.css";
const Process = () => {
  return (
    <section className={styles.process}>
      <img src={BgPhoto} className={styles.bgPhoto} />
      <img src={BgPhoto2} className={styles.bgPhoto2} />
      <img src={BgPhoto3} className={styles.bgPhoto3} />

      <h1 className="heading">Процесс оформления заявки</h1>
      <div className={styles.container}>
        <div className={styles.card} id={styles.c1}>
          <h2>1</h2>
          <h3>Данные от клиента</h3>
          <p>
            <li>ИИН</li>
            <li>Номер телефоне</li>
            <li>Сумма займа</li>
            <li>Срок займа</li>
          </p>
        </div>
        <div className={styles.card} id={styles.c2}>
          <h2>2</h2>
          <h3>Прескоринг</h3>
          <p>Проверка клиента в гос. базах</p>
        </div>
        <div className={styles.card} id={styles.c3}>
          <h2>3</h2>
          <h3>Выбор программы кредитования</h3>
          <p>Подбор подходящего тарифа</p>
        </div>
        <div className={styles.card} id={styles.c4}>
          <h2>4</h2>
          <h3>Подтверждение данных клиентом</h3>
          <p>Подбор подходящего тарифа</p>
        </div>
        <div className={styles.card} id={styles.c5}>
          <h2>5</h2>
          <h3>Верификация клиента</h3>
          <p>OTP + биометрия</p>
        </div>
        <div className={styles.card} id={styles.c6}>
          <h2>6</h2>
          <h3>Процесс одобрения</h3>
          <p>Принятие решения</p>
        </div>
        <div className={styles.card} id={styles.c7}>
          <h2>7</h2>
          <h3>Выдача товара</h3>
          <p>Конец процесса</p>
        </div>
      </div>
    </section>
  );
};
export default Process;
