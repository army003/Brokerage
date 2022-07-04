import React from "react";
import Map from "../icons/map.svg";
import Eurasian from "../icons/eurasian-bank-3 1.svg";
import Freedom from "../icons/Group 744.svg";
import Isker from "../icons/IskerСredit 1.svg";
import styles from "./styles/geo.module.css";
const Geography = () => {
  return (
    <div className={styles.geography}>
      <h1 className="heading" id={styles.geoHead}>
        География проекта
      </h1>
      <div className={styles.wrapper}>
        <img src={Map} className={styles.map} />
      </div>
      <div className={styles.partners}>
        <h2>Наши партнеры</h2>
        <img src={Eurasian} />
        <img src={Freedom} />
        <img src={Isker} />
      </div>
    </div>
  );
};
export default Geography;
