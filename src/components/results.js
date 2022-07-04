import React from "react";
import Target from "../icons/Mask Group3.svg";
import styles from "./styles/results.module.css";
const Results = () => {
  return (
    <section className={styles.results}>
      <h1 className="heading">НАШИ РЕЗУЛЬТАТЫ</h1>
      <div className={styles.wrapper}>
        <div className={styles.wrapperresult}>
          <div className={styles.result}>
            <h3>300+</h3>
            <p>магазинов подключено за 1ый квартал 2021 года</p>
          </div>
          <div className={styles.result}>
            <h3>2000+</h3>
            <p>кредитных заявок обработано за этот период</p>
          </div>
          <p>
            С начала 2021 года нашим решением пользуются почти во всех крупных
            городах Казахстана
          </p>
        </div>
        <img src={Target} />
      </div>
    </section>
  );
};
export default Results;
