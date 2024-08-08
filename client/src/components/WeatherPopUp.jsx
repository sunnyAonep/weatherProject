import React, { useEffect, useState } from "react";
import styles from "./WeatherPopUp.module.css";

export default function WeatherPopUp({ weatherData }) {
  return (
    <div className={styles.WeatherPopUpContainer}>
      <div className={styles.headline}>
        <div className={styles.cityAndCountry}>
          <p className={styles.city}>{weatherData.city}</p>
          <p className={styles.country}>{weatherData.country}</p>
        </div>
        <p className={styles.date}>{weatherData.date}</p>
      </div>
      <div className={styles.weatherContainer}>
        <p className={styles.temperature}>
          {weatherData.temperature}
          <span className={styles.dote}>&deg;</span>
        </p>
        <p className={styles.weather}>{weatherData.weather}</p>
      </div>
      <div className={styles.detailoContainer}>
        <div className={styles.detail}>
          <span className={styles.subject}>precipitation</span>
          <span className={styles.subjectData}>
            {weatherData.precipitation}
          </span>
        </div>
        <div className={styles.detail}>
          <span className={styles.subject}>humidity</span>
          <span className={styles.subjectData}>{weatherData.humidity}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.subject}>wind</span>
          <span className={styles.subjectData}>{weatherData.wind}</span>
        </div>
      </div>
      <div className={styles.hoursContainer}>
        {weatherData.time.map((hour, index) => (
          <div className={styles.hour} key={index}>
            <span className={styles.currentTime}>{hour.time}</span>
            <span className={styles.TimeTemperature}>{hour.temperature}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}
