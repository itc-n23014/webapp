// WeatherIcon.js
import React from 'react'

const WeatherIcon = ({ weatherMain }) => {
  let iconClass

  switch (weatherMain) {
    case 'Clear':
      iconClass = 'wi wi-day-sunny'
      break
    case 'Clouds':
      iconClass = 'wi wi-cloud'
      break
    case 'Rain':
      iconClass = 'wi wi-rain'
      break
    case 'Drizzle':
      iconClass = 'wi wi-day-rain'
      break
    case 'Snow':
      iconClass = 'wi wi-snow'
      break
    case 'Thunderstorm':
      iconClass = 'wi wi-thunderstorm'
      break
    case 'Fog':
    case 'Mist':
      iconClass = 'wi wi-fog'
      break
    default:
      iconClass = 'wi wi-day-sunny'
      break
  }

  return <i className={iconClass}></i>
}

export default WeatherIcon
