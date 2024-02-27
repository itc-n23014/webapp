// WeatherFetcher.js
import { useEffect, useState } from 'react'

const WeatherFetcher = ({ cityName, setWeatherData }) => {
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
        const response = await fetch(apiUrl)
        if (response.ok) {
          const data = await response.json()
          setWeatherData(data)
        } else {
          setWeatherData(null)
          console.error('Failed to fetch weather data')
        }
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    if (cityName.trim() !== '') {
      fetchWeatherData()
    }
  }, [cityName, setWeatherData])

  return null
}

export default WeatherFetcher
