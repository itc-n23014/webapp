import React from 'react'
import styles from '../styles/styles.module.css'

const Header = ({ cityName, handleInputChange }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>お天気アプリ</h1>
      <div className={styles.search_box}>
        <input
          className={styles.input}
          type='text'
          placeholder='検索'
          value={cityName}
          onChange={handleInputChange}
        />
      </div>
    </header>
  )
}

export default Header
