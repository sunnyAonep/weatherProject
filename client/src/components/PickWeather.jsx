import React, { useState, useEffect } from "react";
import styles from "./PickWeather.module.css";

export default function PickWeather({ onCitySubmit, notValid }) {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchCitySuggestions = async (query) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/search.json?key=818b03431c944f5dbf2180141240708&q=${query}`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching city suggestions:", error);
    }
  };

  useEffect(() => {
    if (city.length > 2) {
      fetchCitySuggestions(city);
    } else {
      setSuggestions([]);
    }
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onCitySubmit(city);
      setCity("");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion.name);
    setSuggestions([]);
    onCitySubmit(suggestion.name);
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
