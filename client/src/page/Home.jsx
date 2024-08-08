import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import PickWeather from "../components/PickWeather";
import logo from "../assets/imgs/FintekLogo.png";
import WeatherPopUp from "../components/WeatherPopUp";
import loadingGif from "../assets/imgs/Loading.gif";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherCity, setWeatherCity] = useState("");
  const [notValid, setNotValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:1500/api/v1/weather?city=${weatherCity}`
      );
      const data = await response.json();
      if (data.error) {
        setNotValid(true);
      } else {
        setWeatherData(data);
        setNotValid(false);
      }
    } catch (error) {
      setNotValid(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (weatherCity) {
      fetchWeather();
    }
  }, [weatherCity]);

  const handleCitySubmit = (city) => {
    setWeatherCity(city);
    setWeatherData(null);
  };

  return (
    <div className={styles.HomePage}>
      <div className={styles.inputContainer}>
        <img src={logo} alt="logo" />
        <div className={styles.TitleAndInput}>
          <PickWeather onCitySubmit={handleCitySubmit} notValid={notValid} />
        </div>
        <div className={styles.deatailsAndTime}>
          <div className={styles.Container}>
            {weatherData ? (
              <>
                <div className={styles.latitudeAndlongitude}>
                  <p>latitude {weatherData.latitude}</p>
                  <p>longitude {weatherData.longitude}</p>
                </div>
                <p>accurate to {weatherData.date}</p>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className={styles.weather}>
        {loading ? (
          <img src={loadingGif} alt="Loading..." />
        ) : weatherData ? (
          <WeatherPopUp weatherData={weatherData} />
        ) : (
          <h1 className={styles.WeatherMessage}>
            Enter the city name in the input
          </h1>
        )}
      </div>
    </div>
  );
}
