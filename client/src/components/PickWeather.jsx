import React, { useState, useEffect } from "react";
import styles from "./PickWeather.module.css";

export default function PickWeather({ onCitySubmit, notValid }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onCitySubmit(city);
      setCity("");
    }
  };

  return (
    <div className={styles.PickWeather}>
      <h1 className={styles.title}>
        Use our weather app to see the weather around the world
      </h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>City name</label>
        <div className={styles.inputAndButton}>
          <input
            type="text"
            className={styles.input}
            placeholder="Tel Aviv"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className={styles.button}>
            Check
          </button>
          {notValid ? <p className={styles.error}>Enter a valid city</p> : null}
        </div>
      </form>
    </div>
  );
}
