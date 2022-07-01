import React from "react";
import styles from "./components.module.css";
const Components = () => {
  return (
    <section className={styles.components}>
      <h1 className="heading">Составляющие</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>01</h2>
          <p>Администрирование системы</p>
          <ul>
            <li>
              изменение условий кредитования под каждого партнера индивидуально
            </li>
            <li>настройка сервисов</li>
            <li>мониторинг работы процессов и заявок.</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h2>02</h2>
          <p>Обработка данных клиентов</p>
          <ul>
            <li>автоматическое принятие решения по кредиту;</li>
            <li>предоставление альтернативного решения в случае отказа.</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h2>03</h2>
          <p>Дэшборд с аналитическими данными</p>
          <ul>
            <li>аналитика проблемных кейсов в реальном времени</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>04</h2>
          <p>Система проверки клиентских данных</p>
          <ul>
            <li>модуль по интеграции с внешними и внутренними базами данных</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h2>05</h2>
          <p>Настройка системы</p>
          <ul>
            <li>распределение заявок с учетом нагрузки</li>
            <li>отправка смс сообщений</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>06</h2>
          <p>Кабинет партнера</p>
          <ul>
            <li>заведение заявок</li>

            <li>просмотр статистики</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Components;
