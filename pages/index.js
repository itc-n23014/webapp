import { useState } from 'react'
import styles from '../styles/styles.module.css'
import Head from 'next/head'
import WeatherFetcher from '../components/WeatherFetcher'
import ImageFetcher from '../components/ImageFetcher'
import WeatherInfo from '../components/WeatherInfo'
import Header from '../components/header'

const MyApp = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [cityName, setCityName] = useState('')
  const [cityImage, setCityImage] = useState('')

  const handleInputChange = event => {
    setCityName(event.target.value)
  }

  return (
    <div className={styles.top_div}>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css'
        />
      </Head>
      <Header cityName={cityName} handleInputChange={handleInputChange} />

      <WeatherFetcher cityName={cityName} setWeatherData={setWeatherData} />
      <ImageFetcher cityName={cityName} setCityImage={setCityImage} />
      {weatherData && (
        <WeatherInfo weatherData={weatherData} cityImage={cityImage} />
      )}
    </div>
  )
}

export default MyApp
