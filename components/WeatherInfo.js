// WeatherInfo.js
import React from 'react'
import WeatherIcon from './weather'
import styles from '../styles/styles.module.css'

const WeatherInfo = ({ weatherData, cityImage }) => {
  return (
    <div
      className={styles.weather}
      style={{
        backgroundImage: `url(${cityImage})`,
        backgroundSize: 'cover'
      }}
    >
      <div className={styles.today}>
        <div className={styles.weather_icon}>
          <WeatherIcon weatherMain={weatherData.weather[0].main} />
        </div>
        <div className={styles.weather_detail}>
          <div className={styles.current_temperature}>
            {weatherData.main.temp.toFixed(0)}℃
          </div>
          <div className={styles.city_name}>{weatherData.name}</div>{' '}
          <div className={styles.name}>
            {weatherData.weather[0].description}
          </div>
          <div className={styles.temperature}>
            <span>{weatherData.main.temp_max.toFixed(1)}℃</span>/
            <span>{weatherData.main.temp_min.toFixed(1)}℃</span>
            <div>
              <div className={styles.rainy_percent}>
                {weatherData.main.humidity}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo
