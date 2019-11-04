import React from 'react'
// support css modules
import styles from './home.module.scss'

const Home = () => {
  const handleClick = () => {
    window.alert('clicked')
    setTimeout(() => {
      console.log('test es6')
    }, 2000)
  }

  return (
    <div className={styles.home}>
      <button className={styles.btn} onClick={handleClick}>
        click me
      </button>
      <div>
        <img
          src={require('../assets/avatar.png')}
          width="64"
          height="64"
          alt="logo"
        />
        <img src={require('../assets/todo.png')} />
      </div>
    </div>
  )
}

export default Home
